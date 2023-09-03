console.log("task 2-a in Arrow function")
console.log('Print odd numbers in an array');
console.log('   ')

let arr=[1,2,3,4,5,6,7,8]
let odd = ""
const printodd =  (arr)=>{
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
console.log("task 2-b in Arrow  function")
console.log('Convert all the strings to title caps in a string array');
console.log('   ');


let ab=["hiii",'surya','welcome','lets','rock']

const tocaps =  (ab)=>{
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
    console.log("task 2-c in Arrow function")
    console.log('Sum of all numbers in an array')
    console.log('   ')

    const add = (arr)=>{

    let sum =0
    for (i=0; i<arr.length;i++){
        sum+= arr[i]
    }
    console.log(sum)
    }

    add(arr);


    
    console.log('   ')
    console.log("task 2-d in Arrow function")
    console.log('Return all the prime numbers in an array')
    console.log('   ')
    let checkprime = [1,2,3,4,5,6,7,8,9,10];

    const prime = (arr) => {
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
    console.log("task 2-e in Arrow function")
    console.log("Return all the palindromes in an array")
    console.log('   ')

    let sample = ['hi', 'madam','mom','dad','anna','civic']
    const pallindrome =  (arr)=>{
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