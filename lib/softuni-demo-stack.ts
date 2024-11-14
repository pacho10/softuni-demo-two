import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { Architecture, Code, Function, Runtime, StartingPosition } from 'aws-cdk-lib/aws-lambda';
import { AttributeType, BillingMode, StreamViewType, Table } from 'aws-cdk-lib/aws-dynamodb';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { DynamoEventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

export class SoftuniDemoStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

  //   const exampleBucket = new Bucket(this, "plamen-test-cdk-bucket")

    const dynamoTable = new Table(this, 'homework-cdk-table', {
        partitionKey: {
          name: 'PK',
          type: AttributeType.STRING
        },
        sortKey: {
          name: 'SK',
          type: AttributeType.STRING
        },
        billingMode: BillingMode.PAY_PER_REQUEST,
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        stream: StreamViewType.NEW_IMAGE
    })

  //   new cdk.CfnOutput(this, "bucketName", {
  //     value: exampleBucket.bucketName
  //   })

      const baseFunction = new NodejsFunction(this, 'homework-send-email-lambda', {
        runtime: Runtime.NODEJS_20_X,
        handler: 'handler',
        entry: `${__dirname}/../src/generic.ts`,
        timeout: cdk.Duration.seconds(10),
        architecture: Architecture.ARM_64,
        environment: {
          TABLE_NAME: dynamoTable.tableName,
          SES_EMAIL_ADDRESS: 'pmpetkov1983@gmail.com'
        }
      })

      baseFunction.addEventSource(new DynamoEventSource(dynamoTable, {
        startingPosition: StartingPosition.TRIM_HORIZON
      }))

      baseFunction.addToRolePolicy(new PolicyStatement({
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],
        resources: ['*'],
      }))

      new cdk.CfnOutput(this, 'tableName', {
        value: dynamoTable.tableName
      })
   }
}
