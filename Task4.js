function Reverse(str){

    var Stringnew = "";


    for (var i = str.length - 1; i >= 0; i--) { 
        Stringnew += str[i]; 
    }

    return Stringnew; 
}

module.exports.Reverse=Reverse;