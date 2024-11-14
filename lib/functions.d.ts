import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
export declare class BaseFunction extends NodejsFunction {
    constructor(scope: Construct, id: string, props: any);
}
