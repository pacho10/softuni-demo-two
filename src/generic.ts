var aws = require("aws-sdk");
var ses = new aws.SES({ region: "eu-central-1" });

//const AWS = require('aws-sdk');
//const ses = AWS.SES();
exports.handler = async (event) => {
    for (const record of event.Records) {
        if (record.eventName === 'INSERT') {
            const newItem = record.dynamodb.NewImage;
            const emailAddress = process.env.SES_EMAIL_ADDRESS

            const params = {
                Destination: {
                  ToAddresses: [emailAddress],
                },
                Message: {
                  Body: {
                    Text: {
                      Data: `New item added to DynamoDB:\n\n${JSON.stringify(newItem, null, 2)} \n` + `${new Date(Date.now())}`,
                    },
                  },
                  Subject: { Data: 'New DynamoDB Record Added' },
                },
                Source: emailAddress,
              };
        
              try {
                await ses.sendEmail(params).promise();
                console.log('Email sent successfully');
              } catch (error) {
                console.error('Error sending email:', error);
              }
        }
    }
}