"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cdk = require("aws-cdk-lib");
const SoftuniDemo = require("../lib/softuni-demo-stack");
require("jest-cdk-snapshot");
// example test. To run these tests, uncomment this file along with the
// example resource in lib/softuni-demo-stack.ts
test('Stack created', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SoftuniDemo.SoftuniDemoStack(app, 'MyTestStack');
    // THEN
    expect(stack).toMatchCdkSnapshot();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdHVuaS1kZW1vLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzb2Z0dW5pLWRlbW8udGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUVuQyx5REFBeUQ7QUFDekQsNkJBQTJCO0FBRTNCLHVFQUF1RTtBQUN2RSxnREFBZ0Q7QUFDaEQsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLEVBQUU7SUFDekIsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEIsT0FBTztJQUNULE1BQU0sS0FBSyxHQUFHLElBQUksV0FBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUNqRSxPQUFPO0lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGtCQUFrQixFQUFFLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnYXdzLWNkay1saWInO1xuaW1wb3J0IHsgVGVtcGxhdGUgfSBmcm9tICdhd3MtY2RrLWxpYi9hc3NlcnRpb25zJztcbmltcG9ydCAqIGFzIFNvZnR1bmlEZW1vIGZyb20gJy4uL2xpYi9zb2Z0dW5pLWRlbW8tc3RhY2snO1xuaW1wb3J0ICdqZXN0LWNkay1zbmFwc2hvdCc7XG5cbi8vIGV4YW1wbGUgdGVzdC4gVG8gcnVuIHRoZXNlIHRlc3RzLCB1bmNvbW1lbnQgdGhpcyBmaWxlIGFsb25nIHdpdGggdGhlXG4vLyBleGFtcGxlIHJlc291cmNlIGluIGxpYi9zb2Z0dW5pLWRlbW8tc3RhY2sudHNcbnRlc3QoJ1N0YWNrIGNyZWF0ZWQnLCAoKSA9PiB7XG4gIGNvbnN0IGFwcCA9IG5ldyBjZGsuQXBwKCk7XG4gICAgLy8gV0hFTlxuICBjb25zdCBzdGFjayA9IG5ldyBTb2Z0dW5pRGVtby5Tb2Z0dW5pRGVtb1N0YWNrKGFwcCwgJ015VGVzdFN0YWNrJyk7XG4gICAgLy8gVEhFTlxuICBleHBlY3Qoc3RhY2spLnRvTWF0Y2hDZGtTbmFwc2hvdCgpO1xufSk7XG4iXX0=