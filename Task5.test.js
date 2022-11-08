const Task5 = require("./Task5")


test(" Testing Search Fun ",()=>{
    expect(Task5.Search(5)).toBe(true);
         
   });



   test(" Testing Search Fun ",()=>{
    expect(Task5.Search(61)).toBe(false);
         
   });