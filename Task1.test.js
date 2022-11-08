const check = require("./Task1")



test ("Testing the sum", ()=>{

expect(check.Sum(2,2)).toBe(4);

} );



test("Testing the Divison function ",()=>{
    expect(check.Div(1,1)).toBe(1);
});

test("Testing the Divison function ",()=>{
    expect(check.Div(0,0)).toBe('@@');
});


test("Testing the Multiply function ", ()=>{
    expect(check.Mul(1,2)).toBe(2);
});


test("Testing the Subtraction function", ()=>{

     expect(check.Sub(2,1)).toBe(1);
});



test("Testing the Subtraction function", ()=>{

    expect(check.Sub(3,1)).toBe(2);
});