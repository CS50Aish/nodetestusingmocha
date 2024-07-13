// Change from require() to import()
import { assert } from "chai";
let name = "Aish";
let num = 100;

let result = true;
let array_num = [10, 20, 30, 40, 50, 60];

function chaiAssertion() {
  // Your function implementation here if needed
}

assert.isTrue(result);
assert.isArray(array_num);
assert.typeOf(name, "string");
assert.typeOf(num, "number");
assert.isFunction(chaiAssertion);
assert.equal(name, "Aish");
assert.lengthOf(name, 4);
assert.include(array_num, 10);
