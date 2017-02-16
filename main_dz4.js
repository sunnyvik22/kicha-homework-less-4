
/* function rand(min, max) {  
  return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}
 
 var ARR_SIZE=5;
 var MIN_RANDOM_VALUE=0;
 var MAX_RANDOM_VALUE=100;
  
 var matrix=[];
 for (var i=0; i<ARR_SIZE;i++) {
  matrix[i]=[];
   for (var j=0; j<ARR_SIZE;j++) {
    var num=rand(MIN_RANDOM_VALUE,MAX_RANDOM_VALUE);
    matrix[i].push(num);
   }
 }
 console.table(matrix);
  */

function rand(startNum, endNum) {
  return Math.floor(startNum + Math.random() * ((endNum + 1) - startNum));
}
var ARR_SIZE2=10;
var startNum=0;
var endNum=100;


var arr=[];
for (var i = 0; i<ARR_SIZE2; i++) {
  arr[i]=[];
   for (var y = 0; y<ARR_SIZE2; y++) {
     arr[i][y]=rand(startNum,endNum);
   }
}
console.table(arr);


var topSide =arr[0].slice();
console.log(topSide);

var rightSide=[];
var indexOfLast=ARR_SIZE2-1;

for (var i = 1; i < (ARR_SIZE2-1); i++) {
     rightSide.push(arr[i][indexOfLast]);
    }   
 console.log(rightSide);


var bottomSide=arr[9].slice().reverse();
console.log(bottomSide);


var leftSide=[];
var indexOfFirst=ARR_SIZE2-ARR_SIZE2;

for (var i = (ARR_SIZE2-2); i >=1 ; i--) {
     leftSide.push(arr[i][indexOfFirst]);
  } 
console.log(leftSide);

var resaltArr=topSide.concat(rightSide,bottomSide,leftSide);
console.log(resaltArr);
