const Task3 = require("./Task3")
test("Testing Function Power ",()=>{
    expect(Task3.Power(2,2)).toBe(4);
 });
 
 test(" Testing the Function Round ",()=>{
     expect(Task3.Round(2.6)).toBe(3);
 })
 
 test(" Testing the Function Ceiling ",()=>{
 
      expect(Task3.Ceiling(2.4)).toBe(3);
 });


 test(" Testing Function Ceiling ",()=>{
 
    expect(Task3.Ceiling(3.2)).toBe(4);
});


test(" Testing Function Ceiling ",()=>{
 
    expect(Task3.Ceiling(5.1)).toBe(6);
});