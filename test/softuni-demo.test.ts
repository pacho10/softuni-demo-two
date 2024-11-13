import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as SoftuniDemo from '../lib/softuni-demo-stack';
import 'jest-cdk-snapshot';

// example test. To run these tests, uncomment this file along with the
// example resource in lib/softuni-demo-stack.ts
test('SQS Queue Created', () => {
  const app = new cdk.App();
    // WHEN
  const stack = new SoftuniDemo.SoftuniDemoStack(app, 'MyTestStack');
    // THEN
  expect(stack).toMatchCdkSnapshot();
});
