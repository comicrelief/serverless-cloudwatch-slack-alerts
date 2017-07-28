#!/bin/sh

# Install NPM
echo "Running npm install"
npm install

# Generate environment file base on params
echo "Generating environment file"
echo '{"SLACK_WEB_HOOK" : "'$SLACK_WEB_HOOK'"}' > ./env.json

# Deploy to AWS
echo "Deploying to AWS"
SLS_DEBUG=* serverless deploy --stage $DEPLOY_ENV --region $AWS_REGION
