# Serverless SNS Slack Alerts
> This package streams errors and warnings from [CloudWatch](https://aws.amazon.com/cloudwatch/) to a slack channel via 
a [lamba](https://aws.amazon.com/lambda/) (using [Serverless](https://serverless.com/) framework.
 
## Installation & Deployment

To install the package on your local machine you will need to run,

```bash
npm install
```

You will then need to create an environment file with the last part of your slack hook in,

```json
{
  "SLACK_WEB_HOOK" : "xxxxxx/xxxxxxxxxxxxxxx"
}
```

To deploy to AWS you will need to create API keys and configure them either in the AWS cli or using the 
[Serverless](https://serverless.com/) command line tool. Once complete you can deploy the function using the following
command (where $AWS_REGION is the region that you wish to deploy to).

```bash
serverless deploy --stage production --region $AWS_REGION
```

Once this command has complete, you will then be able to feed the url created by the serverless cli command into a SNS
subscription.

For more information, please view the articles listed in the acknowledgments section. 
 
## Acknowledgements
Most of this code was taken from an excellent article by [Matthew Cooper](http://matthewcooper.net/) and can be found 
[here](http://matthewcooper.net/2015/08/21/aws-cloudwatch-to-slack-via-api-gateway-and-lambda/).

## License

The Serverless Slack Alerts repository is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
