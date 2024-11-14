"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseFunction = void 0;
const aws_cdk_lib_1 = require("aws-cdk-lib");
const aws_lambda_1 = require("aws-cdk-lib/aws-lambda");
const aws_lambda_nodejs_1 = require("aws-cdk-lib/aws-lambda-nodejs");
class BaseFunction extends aws_lambda_nodejs_1.NodejsFunction {
    constructor(scope, id, props) {
        super(scope, id, {
            ...props,
            runtime: aws_lambda_1.Runtime.NODEJS_20_X,
            handler: 'handler',
            entry: `${__dirname}/../src/${props.handlerLocation}.ts`,
            timeout: aws_cdk_lib_1.Duration.seconds(10),
            architecture: aws_lambda_1.Architecture.ARM_64,
            environment: {
                TABLE_NAME: props.tableName
            }
        });
    }
}
exports.BaseFunction = BaseFunction;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVuY3Rpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZnVuY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUF1QztBQUN2Qyx1REFBK0Q7QUFDL0QscUVBQStEO0FBUS9ELE1BQWEsWUFBYSxTQUFRLGtDQUFjO0lBQzVDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBVTtRQUNoRCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNiLEdBQUcsS0FBSztZQUNSLE9BQU8sRUFBRSxvQkFBTyxDQUFDLFdBQVc7WUFDNUIsT0FBTyxFQUFFLFNBQVM7WUFDbEIsS0FBSyxFQUFFLEdBQUcsU0FBUyxXQUFXLEtBQUssQ0FBQyxlQUFlLEtBQUs7WUFDeEQsT0FBTyxFQUFFLHNCQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUM3QixZQUFZLEVBQUUseUJBQVksQ0FBQyxNQUFNO1lBQ2pDLFdBQVcsRUFBRTtnQkFDVCxVQUFVLEVBQUUsS0FBSyxDQUFDLFNBQVM7YUFDOUI7U0FDSixDQUFDLENBQUE7SUFDTixDQUFDO0NBQ0o7QUFkRCxvQ0FjQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcImF3cy1jZGstbGliXCI7XG5pbXBvcnQgeyBBcmNoaXRlY3R1cmUsIFJ1bnRpbWUgfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYVwiO1xuaW1wb3J0IHsgTm9kZWpzRnVuY3Rpb24gfSBmcm9tIFwiYXdzLWNkay1saWIvYXdzLWxhbWJkYS1ub2RlanNcIjtcbmltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5cbmludGVyZmFjZSBCYXNlRnVuY3Rpb25Qcm9wcyB7XG4gICAgdGFibGVOYW1lOiBzdHJpbmcsXG4gICAgaGFuZGxlckxvY2F0aW9uOnN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgQmFzZUZ1bmN0aW9uIGV4dGVuZHMgTm9kZWpzRnVuY3Rpb24ge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBhbnkpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICAgICAgICAuLi5wcm9wcyxcbiAgICAgICAgICAgIHJ1bnRpbWU6IFJ1bnRpbWUuTk9ERUpTXzIwX1gsXG4gICAgICAgICAgICBoYW5kbGVyOiAnaGFuZGxlcicsXG4gICAgICAgICAgICBlbnRyeTogYCR7X19kaXJuYW1lfS8uLi9zcmMvJHtwcm9wcy5oYW5kbGVyTG9jYXRpb259LnRzYCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IER1cmF0aW9uLnNlY29uZHMoMTApLFxuICAgICAgICAgICAgYXJjaGl0ZWN0dXJlOiBBcmNoaXRlY3R1cmUuQVJNXzY0LFxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IHtcbiAgICAgICAgICAgICAgICBUQUJMRV9OQU1FOiBwcm9wcy50YWJsZU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59Il19