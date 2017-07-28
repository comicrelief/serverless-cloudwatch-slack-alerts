export default ((event, context) => {
  console.log(event);
  console.log(event.Sns);
  console.log(event[0].Sns);

  var color = 'warning';
  switch(message.NewStateValue) {
    case "OK":
      color = 'good';
      break;
    case "ALARM":
      color = 'danger';
      break;
  }

  var payloadStr = JSON.stringify({
    "username": "Cloudwatch",
    "attachments": [
      {
        "title": message.AlarmName,
        "fallback": message.NewStateReason,
        "text": message.NewStateReason,
        "fields": [
          {
            "title": "Region",
            "value": message.Region,
            "short": true
          },
          {
            "title": "State",
            "value": message.NewStateValue,
            "short": true
          }
        ],
        "color": color
      }
    ],
    "icon_emoji": ":cloudwatch:"
  });

  var postData = querystring.stringify({
    "payload": payloadStr
  });

  var options = {
    hostname: 'hooks.slack.com',
    port: 443,
    path: '/services/' + process.env.SLACK_WEB_HOOK,
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': postData.length
    }
  };

  var req = http.request(options, function(res) {
    res.on("data", function(chunk) {
      console.log(chunk);
      context.done(null, 'done!');
    });
  }).on('error', function(e) {
    context.done('error', e);
  });
  req.write(postData);
  req.end();
});
