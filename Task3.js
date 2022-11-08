function Power(a,b){
 
let x = Math.pow(a,b);
return x;

}

function Round(a){
   let x= Math.round(a);
   return x;
}

function Ceiling(a){
   let x= Math.ceil(a);
   return x;
}

module.exports.Power=Power;
module.exports.Round=Round;
module.exports.Ceiling=Ceiling;