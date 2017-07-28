#!/bin/sh

# Install NPM
echo "Running npm install"
npm install

# Generate environment file base on params
echo "Generating environment file"
echo '{"LOGGLY_TOKEN" : "'$LOGGLY_TOKEN'", "LOGGLY_SUBDOMAIN" : "'$LOGGLY_SUBDOMAIN'", "ELASTICSEARCH_ENDPOINT" : "'$ELASTICSEARCH_ENDPOINT'", "CUBS_URL" : "'$CUBS_URL'", "CUBS_USERNAME" : "'$CUBS_USERNAME'", "CUBS_SALT" : "'$CUBS_SALT'", "CUBS_SECURITY_KEY" : "'$CUBS_SECURITY_KEY'"}' > ./env.json

# Deploy to AWS
echo "Deploying to AWS"
SLS_DEBUG=* serverless deploy --stage $DEPLOY_ENV --region $AWS_REGION
