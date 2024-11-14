"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoftuniDemoStack = void 0;
const cdk = require("aws-cdk-lib");
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
const aws_dynamodb_1 = require("aws-cdk-lib/aws-dynamodb");
const aws_lambda_nodejs_1 = require("aws-cdk-lib/aws-lambda-nodejs");
const aws_lambda_event_sources_1 = require("aws-cdk-lib/aws-lambda-event-sources");
const aws_iam_1 = require("aws-cdk-lib/aws-iam");
class SoftuniDemoStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        // The code that defines your stack goes here
        //   const exampleBucket = new Bucket(this, "plamen-test-cdk-bucket")
        const dynamoTable = new aws_dynamodb_1.Table(this, 'homework-cdk-table', {
            partitionKey: {
                name: 'PK',
                type: aws_dynamodb_1.AttributeType.STRING
            },
            sortKey: {
                name: 'SK',
                type: aws_dynamodb_1.AttributeType.STRING
            },
            billingMode: aws_dynamodb_1.BillingMode.PAY_PER_REQUEST,
            removalPolicy: cdk.RemovalPolicy.DESTROY,
            stream: aws_dynamodb_1.StreamViewType.NEW_IMAGE
        });
        //   new cdk.CfnOutput(this, "bucketName", {
        //     value: exampleBucket.bucketName
        //   })
        const baseFunction = new aws_lambda_nodejs_1.NodejsFunction(this, 'homework-send-email-lambda', {
            runtime: aws_lambda_1.Runtime.NODEJS_20_X,
            handler: 'handler',
            entry: `${__dirname}/../src/generic.ts`,
            timeout: cdk.Duration.seconds(10),
            architecture: aws_lambda_1.Architecture.ARM_64,
            environment: {
                TABLE_NAME: dynamoTable.tableName,
                SES_EMAIL_ADDRESS: 'pmpetkov1983@gmail.com'
            }
        });
        baseFunction.addEventSource(new aws_lambda_event_sources_1.DynamoEventSource(dynamoTable, {
            startingPosition: aws_lambda_1.StartingPosition.TRIM_HORIZON
        }));
        baseFunction.addToRolePolicy(new aws_iam_1.PolicyStatement({
            actions: ['ses:SendEmail', 'ses:SendRawEmail'],
            resources: ['*'],
        }));
        new cdk.CfnOutput(this, 'tableName', {
            value: dynamoTable.tableName
        });
    }
}
exports.SoftuniDemoStack = SoftuniDemoStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdHVuaS1kZW1vLXN0YWNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29mdHVuaS1kZW1vLXN0YWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUFtQztBQUVuQyx1REFBaUc7QUFDakcsMkRBQTZGO0FBQzdGLHFFQUErRDtBQUMvRCxtRkFBeUU7QUFDekUsaURBQXNEO0FBRXRELE1BQWEsZ0JBQWlCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFDN0MsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUM5RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4Qiw2Q0FBNkM7UUFFL0MscUVBQXFFO1FBRW5FLE1BQU0sV0FBVyxHQUFHLElBQUksb0JBQUssQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7WUFDdEQsWUFBWSxFQUFFO2dCQUNaLElBQUksRUFBRSxJQUFJO2dCQUNWLElBQUksRUFBRSw0QkFBYSxDQUFDLE1BQU07YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLDRCQUFhLENBQUMsTUFBTTthQUMzQjtZQUNELFdBQVcsRUFBRSwwQkFBVyxDQUFDLGVBQWU7WUFDeEMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTztZQUN4QyxNQUFNLEVBQUUsNkJBQWMsQ0FBQyxTQUFTO1NBQ25DLENBQUMsQ0FBQTtRQUVKLDRDQUE0QztRQUM1QyxzQ0FBc0M7UUFDdEMsT0FBTztRQUVILE1BQU0sWUFBWSxHQUFHLElBQUksa0NBQWMsQ0FBQyxJQUFJLEVBQUUsNEJBQTRCLEVBQUU7WUFDMUUsT0FBTyxFQUFFLG9CQUFPLENBQUMsV0FBVztZQUM1QixPQUFPLEVBQUUsU0FBUztZQUNsQixLQUFLLEVBQUUsR0FBRyxTQUFTLG9CQUFvQjtZQUN2QyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2pDLFlBQVksRUFBRSx5QkFBWSxDQUFDLE1BQU07WUFDakMsV0FBVyxFQUFFO2dCQUNYLFVBQVUsRUFBRSxXQUFXLENBQUMsU0FBUztnQkFDakMsaUJBQWlCLEVBQUUsd0JBQXdCO2FBQzVDO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLDRDQUFpQixDQUFDLFdBQVcsRUFBRTtZQUM3RCxnQkFBZ0IsRUFBRSw2QkFBZ0IsQ0FBQyxZQUFZO1NBQ2hELENBQUMsQ0FBQyxDQUFBO1FBRUgsWUFBWSxDQUFDLGVBQWUsQ0FBQyxJQUFJLHlCQUFlLENBQUM7WUFDL0MsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGtCQUFrQixDQUFDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQztTQUNqQixDQUFDLENBQUMsQ0FBQTtRQUVILElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFO1lBQ25DLEtBQUssRUFBRSxXQUFXLENBQUMsU0FBUztTQUM3QixDQUFDLENBQUE7SUFDTCxDQUFDO0NBQ0g7QUFuREQsNENBbURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ2F3cy1jZGstbGliJztcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gJ2NvbnN0cnVjdHMnO1xuaW1wb3J0IHsgQXJjaGl0ZWN0dXJlLCBDb2RlLCBGdW5jdGlvbiwgUnVudGltZSwgU3RhcnRpbmdQb3NpdGlvbiB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEnO1xuaW1wb3J0IHsgQXR0cmlidXRlVHlwZSwgQmlsbGluZ01vZGUsIFN0cmVhbVZpZXdUeXBlLCBUYWJsZSB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1keW5hbW9kYic7XG5pbXBvcnQgeyBOb2RlanNGdW5jdGlvbiB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1sYW1iZGEtbm9kZWpzJztcbmltcG9ydCB7IER5bmFtb0V2ZW50U291cmNlIH0gZnJvbSAnYXdzLWNkay1saWIvYXdzLWxhbWJkYS1ldmVudC1zb3VyY2VzJztcbmltcG9ydCB7IFBvbGljeVN0YXRlbWVudCB9IGZyb20gJ2F3cy1jZGstbGliL2F3cy1pYW0nO1xuXG5leHBvcnQgY2xhc3MgU29mdHVuaURlbW9TdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcblxuICAgIC8vIFRoZSBjb2RlIHRoYXQgZGVmaW5lcyB5b3VyIHN0YWNrIGdvZXMgaGVyZVxuXG4gIC8vICAgY29uc3QgZXhhbXBsZUJ1Y2tldCA9IG5ldyBCdWNrZXQodGhpcywgXCJwbGFtZW4tdGVzdC1jZGstYnVja2V0XCIpXG5cbiAgICBjb25zdCBkeW5hbW9UYWJsZSA9IG5ldyBUYWJsZSh0aGlzLCAnaG9tZXdvcmstY2RrLXRhYmxlJywge1xuICAgICAgICBwYXJ0aXRpb25LZXk6IHtcbiAgICAgICAgICBuYW1lOiAnUEsnLFxuICAgICAgICAgIHR5cGU6IEF0dHJpYnV0ZVR5cGUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIHNvcnRLZXk6IHtcbiAgICAgICAgICBuYW1lOiAnU0snLFxuICAgICAgICAgIHR5cGU6IEF0dHJpYnV0ZVR5cGUuU1RSSU5HXG4gICAgICAgIH0sXG4gICAgICAgIGJpbGxpbmdNb2RlOiBCaWxsaW5nTW9kZS5QQVlfUEVSX1JFUVVFU1QsXG4gICAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXG4gICAgICAgIHN0cmVhbTogU3RyZWFtVmlld1R5cGUuTkVXX0lNQUdFXG4gICAgfSlcblxuICAvLyAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsIFwiYnVja2V0TmFtZVwiLCB7XG4gIC8vICAgICB2YWx1ZTogZXhhbXBsZUJ1Y2tldC5idWNrZXROYW1lXG4gIC8vICAgfSlcblxuICAgICAgY29uc3QgYmFzZUZ1bmN0aW9uID0gbmV3IE5vZGVqc0Z1bmN0aW9uKHRoaXMsICdob21ld29yay1zZW5kLWVtYWlsLWxhbWJkYScsIHtcbiAgICAgICAgcnVudGltZTogUnVudGltZS5OT0RFSlNfMjBfWCxcbiAgICAgICAgaGFuZGxlcjogJ2hhbmRsZXInLFxuICAgICAgICBlbnRyeTogYCR7X19kaXJuYW1lfS8uLi9zcmMvZ2VuZXJpYy50c2AsXG4gICAgICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDEwKSxcbiAgICAgICAgYXJjaGl0ZWN0dXJlOiBBcmNoaXRlY3R1cmUuQVJNXzY0LFxuICAgICAgICBlbnZpcm9ubWVudDoge1xuICAgICAgICAgIFRBQkxFX05BTUU6IGR5bmFtb1RhYmxlLnRhYmxlTmFtZSxcbiAgICAgICAgICBTRVNfRU1BSUxfQUREUkVTUzogJ3BtcGV0a292MTk4M0BnbWFpbC5jb20nXG4gICAgICAgIH1cbiAgICAgIH0pXG5cbiAgICAgIGJhc2VGdW5jdGlvbi5hZGRFdmVudFNvdXJjZShuZXcgRHluYW1vRXZlbnRTb3VyY2UoZHluYW1vVGFibGUsIHtcbiAgICAgICAgc3RhcnRpbmdQb3NpdGlvbjogU3RhcnRpbmdQb3NpdGlvbi5UUklNX0hPUklaT05cbiAgICAgIH0pKVxuXG4gICAgICBiYXNlRnVuY3Rpb24uYWRkVG9Sb2xlUG9saWN5KG5ldyBQb2xpY3lTdGF0ZW1lbnQoe1xuICAgICAgICBhY3Rpb25zOiBbJ3NlczpTZW5kRW1haWwnLCAnc2VzOlNlbmRSYXdFbWFpbCddLFxuICAgICAgICByZXNvdXJjZXM6IFsnKiddLFxuICAgICAgfSkpXG5cbiAgICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICd0YWJsZU5hbWUnLCB7XG4gICAgICAgIHZhbHVlOiBkeW5hbW9UYWJsZS50YWJsZU5hbWVcbiAgICAgIH0pXG4gICB9XG59XG4iXX0=