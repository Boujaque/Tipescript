//Type Aliases
function combine(input1, input2, 
//  resultConversion: string
resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if(resultConversion === 'as-number'){
    //   // return parseFloat(result);
    //   return +result;
    // }else {
    //   return result.toString();
    // }
    return result;
}
var combinedAges = combine(39, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine(39, 26, 'as-text');
console.log(combinedStringAges);
var combinedNames = combine("max", "Ana", 'as-text');
console.log(combinedNames);
