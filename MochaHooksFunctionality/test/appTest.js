const assert = require("assert");
const appRef = require("../src/app");

describe("Mocha Hook Example", () => {

    before(() => {
        console.log("This function call before all it - only once");
    })

    beforeEach(() => {
        console.log("This function call before each it - again and again");
    })

    it("First test function", () => {
        appRef.firstFunction();
    })

    it("Second test function", () => {
        appRef.secondFunction();
    })

    afterEach(() => {
        console.log("This function call after each it - again and again");
    })

    after(() => {
        console.log("This function call after all it - only once");
    })

})