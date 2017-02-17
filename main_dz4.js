
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

  //домашка, dz1

/*function rand(startNum, endNum) {
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
*/

/*http://license-server.tk:1017/*/

//домашка, dz3

function rand(startNum, endNum) {
  return Math.floor(startNum + Math.random() * ((endNum + 1) - startNum));
}

var startNum=0;
var endNum =100;

var arrDz = [];
    arrDz.length=10;
  for (var i =0; i<arrDz.length; i++) {
     arrDz[i]=[];
       for (var y=0; y<arrDz.length; y++) {
         var num = rand(startNum,endNum);   
          arrDz[i].push(num);
       }  
  }
console.table (arrDz);

var topSide =arrDz[0].slice();
console.log(topSide);

var rightSide =[];
var lastIndex=arrDz.length-1;
  for (var i = 1; i < arrDz.length; i++) {
       rightSide.push(arrDz[i][lastIndex]);
  }

  console.log(rightSide);

var diagonal=[];

 /*for (var i = (arrDz.length-2); i >=1 ; i--) {   // прикольно получилось, сама не ожидала
         for (y=1; y <(arrDz.length-2); y++) {     // надо оставить )

        diagonal.push(arrDz[i][lastIndex-y]); 

       }
       
 }
 console.log(diagonal);*/

  var count=1;
  for (var i = (arrDz.length-2); i >=1 ; i--) {  
        diagonal.push(arrDz[i][lastIndex-count]); 
        count++;  
 }
 console.log(diagonal);

 var resaltArrDz=topSide.concat(rightSide,diagonal);
 console.log(resaltArrDz);
