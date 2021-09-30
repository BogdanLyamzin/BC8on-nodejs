/*
1. Получает целое положительное число больше 41.
2. Возвращает true, если год высокосный.
3. Возвращает false, если год невысокосный.

- делится без остатка на 4;
- не делится без остатка на 100;
- может делится без остатка на 400;

2008 - true
2003 - false
2000 - true
1900 - false

41 - ошибка с текстом "Год не может быть меньше 42"
2008.4 - ошибка с текстом "Год должен быть целым числом"
() - ошибка с текстом "Нужно указать год"
"2008" - ошибка с текстом "Год должен быть number"
null - ошибка с текстом "Год должен быть number"
true - ошибка с текстом "Год должен быть number"
false - ошибка с текстом "Год должен быть number"
()=>{} - ошибка с текстом "Год должен быть number"
{} - ошибка с текстом "Год должен быть number"
[] - ошибка с текстом "Год должен быть number"
*/

const isLeapYear = require("./isLeapYear");

describe("Test isLeapYear function", ()=>{
    beforeAll(()=> console.log("Before all tests"));
    beforeEach(()=> console.log("Before each test"));
    afterAll(()=> console.log("After all tests"));
    afterEach(()=> console.log("After each test"));
    
    test("2008 - leap year", ()=>{
        expect(isLeapYear(2008)).toBe(true);
        /*
        const result = isLeapYear(2008);
        const checkObject = expect(result);
        if(checkObject.toBe(true)){ // result === true
            console.log("2008 - leap year passed")
        }
        else {
            console.log("2008 - leap year failed")
        }        
        */ 
    });

    test("2003 - not leap year", ()=>{
        expect(isLeapYear(2003)).toBe(false);
    });

    test("2000 - leap year", ()=>{
        expect(isLeapYear(2000)).toBe(true);
    });

    test("1900 - not leap year", ()=>{
        expect(isLeapYear(1900)).toBe(false);
    });

    test("41 - year must be at least 42", ()=>{
        expect(()=>isLeapYear(41)).toThrow("Год не может быть меньше 42")
    });

    test("2008.4 - year must be integer", ()=>{
        expect(()=>isLeapYear(2008.4)).toThrow("Год должен быть целым числом")
    });

    test(" - year must be exist", ()=>{
        expect(()=>isLeapYear()).toThrow("Нужно указать год")
    });

    test("'2008' - year must be number", ()=>{
        expect(()=>isLeapYear("2008")).toThrow("Год должен быть number")
    });

    test("null - year must be number", ()=>{
        expect(()=>isLeapYear(null)).toThrow("Год должен быть number")
    });

    test("true - year must be number", ()=>{
        expect(()=>isLeapYear(true)).toThrow("Год должен быть number")
    });

    test("false - year must be number", ()=>{
        expect(()=>isLeapYear(false)).toThrow("Год должен быть number")
    });

    test("()=>{} - year must be number", ()=>{
        expect(()=>isLeapYear(()=>{})).toThrow("Год должен быть number")
    });

    test("{} - year must be number", ()=>{
        expect(()=>isLeapYear({})).toThrow("Год должен быть number")
    });

    it("[] - year must be number", ()=>{
        expect(()=>isLeapYear([])).toThrow("Год должен быть number")
    });

    // test("1900 - not leap year", ()=>{
    //     const result = getProduct();
    //     expect(result.name).toBe();
    //     expect(typeof result.name).toBe("string");
    // });
})