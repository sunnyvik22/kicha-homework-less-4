


/*function sumTo(n) {                        // через рекурсию
  if (n>1) {
    return n + sumTo(n-1);
  }
  else {
    return n;
  }
}

console.log(sumTo(50));
*/


/*function sumTo(n) {                   // через цикл 
 
 var  result=n;
 for (var i=1; i<n; i++) {
   result+= n -(n-i);
 }
 return result;
}*/

/*function factorial(n) {                      // факториал через рекурсию
  if (n>1) {
    return n*factorial(n-1);
  } else {
    return n;
  }
}
console.log(factorial(5));


function fib(n) {                                   // числа фибоначчи
  if (n>1) {
   return n = fib(n-1)+fib(n-2);
  } else {
    return n;
  }
}

console.log(fib(10));

*/



/*setInterval  ( function () {     //dz6, ex1 
  console.clear();
  var date = new Date();
  var timer = date.getHours()+ ":"+ date.getMinutes()+":"+date.getSeconds(); 
  console.log (timer);

}, 1000);*/




var i=10;                                        //dz6 ex2 
var timeId=setInterval (function () {
  console.clear();
    console.log("До взрыва осталось:"+i+"секунд");
   i --;
   if (i<=0){
   clearInterval(timeId);
   console.log("BOOM");
   }
}, 1000);



 /*                                      //dz6 ex3
var arr=[];
for (var i = 0; i <= 10; i++) {
  (function (count) {
    arr.push(function(){
       console.log(count);   
    });
  }) (i);
}
console.log(arr);

console.log(arr[i]);*/


//scheme

/*var scheme1 = {
        name: 'gate',
        type: 'XOR',
        children: [
        {
            name: 'gate',
            type: 'AND',
            children: [
            {
                name: 'switch',
                type: 'ON',
                state: 1
            },
            {
                name: 'switch',
                type: 'OFF',
                state: 0
            }
            ]
        }, {
            name: 'gate',
            type: 'NOT',
            children: [
            {
                name: 'switch',
                type: 'ON',
                state: 1
            }
            ]
        }
        ]
    },


var actions = {
    OR: function (a,b) {
        return a || b;
    },
    AND: function (a,b) {
        return a && b;
    },
    XOR: function (a,b) {
        return a ^ b;
    },
    NOT: function (a) {
        return !a;
    }
};*/

/*function bulbStatment (obj) {
 if (actions in obj) {
     return actions;

 } 
 if (obj.children&&obj.children.lendth) {
   for (var i=0; i<obj.children.lendth; i++) {
    bulbStatment(obj.children[i]);
    if (obj.children[i].state=1) {
      return a} else {
        return b;
      }
    }
   }
 }*/

/*}*/

// нерабочая фигня, наброски

/*function bulbStatment (obj) {

 for ("type" in obj); 
  for ("type" in obj[i]);
    for (var z in obj[i][y])

 {
  if (scheme1.children[i].children[i].state) {
    
  }
}
}


  if (scheme1.children[i].children[y].state)

*/