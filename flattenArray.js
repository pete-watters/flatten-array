/*! flattenArray v0.0.1 - MIT license */
'use strict';

var inputArray =  [[1,2,[3]],4] ;

var flattenArray = function (inputArray) {
    const outputArray = [];
      if(inputArray){

        inputArray.forEach(inputArrayItem => {
          if (Array.isArray(inputArrayItem)) {
            outputArray.push(...flattenArray(inputArrayItem));
          } else {
            outputArray.push(inputArrayItem);
          }
        });

      return outputArray;
    }else{
      return "No input array";
    }
}

var finalOutput = flattenArray(inputArray);
console.log(finalOutput);
