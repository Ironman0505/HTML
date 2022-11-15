//sum of elements in an array

var a=[1,2,3,4,5]
let sum=0;
for(let i=0;i<a.length;i++){
sum+=a[i];
}
console.log("sum is ",sum)

// even numbers of array

var ar=[2,3,4,6,7,9,8,11,32,45,46]
var even_arr=[];

for(var i=0 ; i<ar.length ;i++){
    if((ar[i]%2)==0)
    even_arr.push(ar[i])

}
console.log("even array is : ",even_arr);



// prime numbers in given array

var smpl=[2,3,4,5,1,45,42,15,67,79,81]
var prime_arr=[]
maxx=smpl[0];
for(let i=0;i<smpl.length;i++){
if(smpl[i]>maxx)
maxx=smpl[i]
}
for(let i=0;i<smpl.length;i++){

    if(isPrime(smpl[i])){
        prime_arr.push(smpl[i]);
    }
}
  
    function isPrime(num) {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
              return false;
            }
          }
          return true;
        }

console.log("Prime numbers are :" ,prime_arr)







// min and max in an array

var arr=[23,33,48,83,99,1,104,264]
var min=arr[0];
var max=arr[arr.length-1];
for(let i=0 ;i<arr.length;i++){
if(arr[i]<min)
min=arr[i];
if(arr[i]>max)
max=arr[i]
}
console.log("The maximum value is ",max ," and Minimum value is ",min)



// Operations on array
var temp=[1,3,4,6]
temp.push(33);
temp.push(58)
temp.pop()
temp.shift();
temp.unshift(99)
temp[3]=60;
console.log("The array after all the operations is ",temp);

// concatenating 2 arrays
let ph=[1,2,33]
var tp=[58,1,4,3]
const c=ph.concat(tp);
console.log(c)