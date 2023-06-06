// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

/**
 * testing sayHello() function
 */
describe('sayHello', function(){
    describe('is', function(){
        it("a defined function", function () {
            expect(typeof sayHello).toBe("function");
        });
    });
    describe("should", function(){
        it("return a string", function (){
            expect(typeof sayHello()).toBe("string");
        });
        it("return Hello, Jane!", function (){
            expect(sayHello("Jane")).toBe("Hello, Jane!");
        });
        it("return Hello, Alex!", function (){
            expect(sayHello("Alex")).toBe("Hello, Alex!");
        });
        it("return Hello, Pat!", function (){
            expect(sayHello("Pat")).toBe("Hello, Pat!");
        });
        it("return Hello, World! when nothing is passed in", function (){
            expect(sayHello()).toBe("Hello, World!");
        });
        it("return Hello, World! when passed the boolean true", function (){
            expect(sayHello(true)).toBe("Hello, World!");
        });
        it("return Hello, World! when passed the boolean false", function (){
            expect(sayHello(false)).toBe("Hello, World!");
        });
        it("return Hello, World! when passing in null", function (){
            expect(sayHello(null)).toBe("Hello, World!");
        });
        it("return Hello, World! when passed 2.5", function (){
            expect(sayHello(2.5)).toBe("Hello, World!");
        });
        it("return Hello, World! when passed an empty string", function (){
            expect(sayHello("")).toBe("Hello, World!");
        });
        it("return Hello, World! when passed the number 5 as a string", function (){
            expect(sayHello("5")).toBe("Hello, World!");
        });
    });
});

/**
 * testing isFive() function
 */
describe('isFive', function() {
    describe('is', function () {
        it("a defined function", function () {
            expect(typeof isFive).toBe("function");
        });
    });
    describe("should", function(){
        it("return a boolean", function (){
            expect(typeof isFive()).toBe("boolean");
        });
        it("return true when passed 5", function (){
            expect(isFive(5)).toBe(true);
        });
    });
    describe("should not", function(){
        for(let i = 0; i < 5; i++){
            let randomNumber = Math.floor(Math.random()*25) + 6;
            it(`return true when passed ${randomNumber}`, function (){
                expect(isFive(randomNumber)).toBe(false);
            });
        }
        for(let i = 0; i < 5; i++){
            let randomNumber = Math.floor(Math.random()*(-25));
            it(`return true when passed ${randomNumber}`, function (){
                expect(isFive(randomNumber)).toBe(false);
            });
        }
        it("return true when passed true", function(){
            expect(isFive(true)).toBe(false);
        });
        it("return true when passed false", function(){
            expect(isFive(false)).toBe(false);
        });
        it("return true when passed a string", function(){
            expect(isFive("hello")).toBe(false);
        });
    });
});

/**
 * testing isEven() function
 */
describe('isEven', function() {
    describe('is', function () {
        it("a defined function", function () {
            expect(typeof isEven).toBe("function");
        });
    });
    describe("should", function(){
        it("return a boolean", function (){
            expect(typeof isEven()).toBe("boolean");
        });
        it("return true when passed 2", function (){
            expect(isEven(2)).toBe(true);
        });
        it("return true when passed -4", function (){
            expect(isEven(-4)).toBe(true);
        });
        it("return true when passed 8", function (){
            expect(isEven(8)).toBe(true);
        });
        it("return true when passed the string of 8", function (){
            expect(isEven("8")).toBe(true);
        });
        for(let i = 0; i < 5; i++){
            let randomNumber = Math.floor(Math.random()*25) + 6;
            if(randomNumber % 2 === 0){
                it(`return true when passed ${randomNumber}`, function (){
                    expect(isEven(randomNumber)).toBe(true);
                });
            } else {
                it(`return false when passed ${randomNumber}`, function (){
                    expect(isEven(randomNumber)).toBe(false);
                });
            }
        }
        for(let i = 0; i < 5; i++){
            let randomNumber = Math.floor(Math.random()*(-25));
            if(randomNumber % 2 === 0){
                it(`return true when passed ${randomNumber}`, function (){
                    expect(isEven(randomNumber)).toBe(true);
                });
            } else {
                it(`return false when passed ${randomNumber}`, function (){
                    expect(isEven(randomNumber)).toBe(false);
                });
            }
        }
    });
    describe("should not", function(){
        it("return true when passed true", function(){
            expect(isEven(true)).toBe(false);
        });
        it("return true when passed false", function(){
            expect(isEven(false)).toBe(false);
        });
        it("return true when passed a string", function(){
            expect(isEven("hello")).toBe(false);
        });
        it("return true when passed Infinity", function(){
            expect(isEven(Infinity)).toBe(false);
        });
        it("return true when nothing is passed in", function(){
            expect(isEven()).toBe(false);
        });
    });
});

/**
 * testing isVowel() function
 */
describe('isVowel', function(){
    describe('is', function(){
        it("a defined function", function () {
            expect(typeof isVowel).toBe("function");
        });
    });
    describe("should", function(){
        it("return a boolean", function (){
            expect(typeof isVowel()).toBe("boolean");
        });
        let vowelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
        for(let i = 0; i < vowelArr.length; i++) {
            it(`return true when passed ${vowelArr[i]}`, function () {
                expect(isVowel(vowelArr[i])).toBe(true);
            });
        }
    });
    describe("should not", function(){
        it("return true when passed eeee", function (){
            expect(isVowel("eeee")).toBe(false);
        });
        it("return true when passed true", function (){
            expect(isVowel(true)).toBe(false);
        });
        it("return true when passed false", function (){
            expect(isVowel(false)).toBe(false);
        });
        it("return true when nothing is passed in", function (){
            expect(isVowel()).toBe(false);
        });
    });
});

/**
 * testing add() function
 */
describe('add', function () {
    describe("is", function () {
        it("a defined function", function(){
            expect(typeof add).toBe("function");
        });
    });
    describe("should", function(){
        it("return a number", function (){
            expect(typeof add()).toBe("number");
        });
        it("return NaN when nothing is passed in", function (){
            expect(add()).not.toBe(Number);
        });
        for(let i = 0; i < 10; i++) {
            let randomNum1 = Math.floor(Math.random() * 100) - 50;
            let randomNum2 = Math.floor(Math.random() * 100) - 50;
            let sum = result(randomNum1,randomNum2);
            it(`return ${sum} when passed ${randomNum1} and ${randomNum2}`, function () {
                expect(add(randomNum1, randomNum2)).toBe(sum);
            });
        }
    });
    describe("should not", function(){
        it('return a number when passing in one NaN string', function () {
            expect(add("5", "hello")).not.toBe(Number);
        });
        it('return a number when passing in two NaN strings', function () {
            expect(add("world", "hello")).not.toBe(Number);
        });
        it('return a number when passing in one boolean', function () {
            expect(add(true, 6)).not.toBe(Number);
        });
        it('return a number when passing in two booleans', function () {
            expect(add(true, false)).not.toBe(Number);
        });
        it('return a number when if only one argument is passed in', function () {
            expect(add(5)).not.toBe(Number);
        });
    });
});

/**
 * Helper function for testing the add() function.
 * @param a
 * @param b
 * @returns {*}
 */
function result(a,b){
    return a+b;
}
