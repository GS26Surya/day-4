// Annonymous function
 
console.log("task 1-a in annoymous function")
console.log('Print odd numbers in an array');
console.log('   ')

let arr=[1,2,3,4,5,6,7,8]
let odd = ""
const printodd = function (arr){
    for(i=0; i<arr.length; i++)
    {
        if (arr[i]%2 !=0)
        {
            odd += arr[i]+" "
        }
    }
console.log(odd.trim())
}

printodd(arr);

console.log('   ')
console.log("task 1-a in IIFE function")
console.log('Print odd numbers in an array');
console.log('   ');


(function (arr){
    let odd = ""
    for(i=0; i<arr.length; i++)
    {
        if (arr[i]%2 !=0)
        {
            odd += arr[i]+" "
        }
    }
console.log(odd.trim())
}
)([1,2,3,4,5,6,7,8])



console.log('   ')
console.log("task 1-b in annoymous  function")
console.log('Convert all the strings to title caps in a string array');
console.log('   ');


let ab=["hiii",'surya','welcome','lets','rock']

const tocaps = function (ab){
    for(i=0; i<ab.length; i++){
        let arra =ab[i] 
    
    let caps = ''

    for(j=0; j<arra.length;j++)
    {
        if(j==0){
            caps+= arra[j].toUpperCase()
        }
        else
        {
            caps+=arra[j]
        }
    }
    console.log(caps)
}
}
    tocaps(ab);


    console.log('   ')
console.log("task 1-b in IIFE  function")
console.log('Convert all the strings to title caps in a string array');
console.log('   ');


(function (ab){
    for(i=0; i<ab.length; i++){
        let arra =ab[i] 
    
    let caps = ''

    for(j=0; j<arra.length;j++)
    {
        if(j==0){
            caps+= arra[j].toUpperCase()
        }
        else
        {
            caps+=arra[j]
        }
    }
    console.log(caps)
}
})(["hiii",'surya','welcome','lets','rock'])


    console.log('   ')
    console.log("task 1-c in annoymous function")
    console.log('Sum of all numbers in an array')
    console.log('   ')

    const add = function (arr){

    let sum =0
    for (i=0; i<arr.length;i++){
        sum+= arr[i]
    }
    console.log(sum)
    }

    add(arr);

    console.log('   ')
    console.log("task 1-c in IIFE function")
    console.log('Sum of all numbers in an array')
    console.log('   ');


    ( function (arr){

        let sum =0
        for (i=0; i<arr.length;i++){
            sum+= arr[i]
        }
        console.log(sum)
        })([1,2,3,4,5,6,7,8]);


    console.log('   ')
    console.log("task 1-d in annoymous function")
    console.log('Return all the prime numbers in an array')
    console.log('   ')
    let checkprime = [1,2,3,4,5,6,7,8,9,10];

    const prime = function(arr) {
      let primenum = [];
    
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 1) {
          let num = true;
    
          for (let j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
              num = false;
              break;
            }
          }
    
          if (num) {
            primenum.push(arr[i]);
          }
        }
      }
    
      console.log(primenum);
    };
    
    prime(checkprime);

    console.log('   ')
    console.log("task 1-d in IIFE function")
    console.log('Return all the prime numbers in an array')
    console.log('   ');

  (function(arr) {
    let primenum = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 1) {
        let num = true;
  
        for (let j = 2; j < arr[i]; j++) {
          if (arr[i] % j === 0) {
            num = false;
            break;
          }
        }
  
        if (num) {
          primenum.push(arr[i]);
        }
      }
    }
  
    console.log(primenum);
  })( [1,2,3,4,5,6,7,8,9,10])




    console.log('   ')
    console.log("task 1-e in annoymous function")
    console.log("Return all the palindromes in an array")
    console.log('   ')

    let sample = ['hi', 'madam','mom','dad','anna','civic']
    const pallindrome = function (arr){
        for(i=0;i<arr.length;i++)
        {
          let reversed = arr[i].split('').reverse().join('')
            
          if (arr[i]=== reversed)
          {
            console.log(arr[i])
          }
         
        }
    }

    pallindrome(sample);
    console.log('   ')
    console.log("task 1-e in IIFE function")
    console.log("Return all the palindromes in an array")
    console.log('   ');

    (function (arr){
        for(i=0;i<arr.length;i++)
        {
          let reversed = arr[i].split('').reverse().join('')
            
          if (arr[i]=== reversed)
          {
            console.log(arr[i])
          }
         
        }
    }
)(['hi', 'madam','mom','dad','anna','civic'])


  console.log('   ')  
  console.log("task 1-f in annoymous function")
  console.log("Return median of two sorted arrays of the same size")
  console.log('   ')


  let a=[2,4,6,8];
  let b=[1,3,5,7];

  const median= function (arr1,arr2){

    let c= arr1.concat(arr2).sort()
    let d= c.length%2
    if (d===0)
    {
        let num1 = c[(c.length/2)-1]
        let num2 = c[c.length/2]
        let med= (num1+num2)/2
        console.log(med)

    }
    else{
        console.log( c[c.length/2])
    }
  }

  median(a,b);

  console.log('   ')  
  console.log("task 1-f in IIFE function")
  console.log("Return median of two sorted arrays of the same size")
  console.log('   ');

  (function (arr1,arr2){

    let c= arr1.concat(arr2).sort()
    let d= c.length%2
    if (d===0)
    {
        let num1 = c[(c.length/2)-1]
        let num2 = c[c.length/2]
        let med= (num1+num2)/2
        console.log(med)

    }
    else{
        console.log( c[c.length/2])
    }
  })([1,2,7],[5,8,9])



  console.log('   ')  
  console.log("task 1-g in annoymous function")
  console.log("Remove duplicates from an array")
  console.log('   ')

  let dup=[1,2,3,4,5,5,8,28,528,5,87,5,7,95,7,9,2,8,92,8,6,2,8,6,2,8,63,285,9,3]

  const unique = function (arr1){
    let fresh  = []
    for (let i = 0; i < arr1.length; i++) {
        if (fresh.indexOf(arr1[i]) === -1) {
          fresh.push(arr1[i]);
        }
      }
      console.log(fresh)
    }

    unique(dup)

    console.log('   ')  
    console.log("task 1-g in IIFE function")
    console.log("Remove duplicates from an array")
    console.log('   ');
    (function (arr1){
        let fresh  = []
        for (let i = 0; i < arr1.length; i++) {
            if (fresh.indexOf(arr1[i]) === -1) {
              fresh.push(arr1[i]);
            }
          }
          console.log(fresh)
        })([1,2,3,4,5,5,8,28,528,5,87,5,7,95,7,9,2,8,92,8,6,2,8,6,2,8,63,285,9,3])
  

  console.log('   ')  
  console.log("task 1-h in annoymous function")
  console.log("Rotate an array by k times")
  console.log('   ')




