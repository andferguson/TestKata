const { expect } = require("chai");
const wrap = require("./wrap");

describe("wrap", () => {
  it("Returns empty string if empty string was provided", () => {
    expect(wrap("", 10)).to.equal("");
  });
  it("returns string passed to it", () => {
    expect(wrap("hello", 10)).to.equal("hello");
  });
  it("wraps words to new line", () => {
    expect(wrap("Hello World", 7)).to.equal("Hello \nWorld");
  });

  it("wraps multiple words", () => {
    expect(wrap("Hello Hello Hello", 7)).to.equal("Hello \nHello \nHello");
  });

  it("only wraps when indexOf(\" \") < maxLen", () => {
    expect(wrap("Hello Hello Hello", 12)).to.equal("Hello Hello \nHello");
  });
});
