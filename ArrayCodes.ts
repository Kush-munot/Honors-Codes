let students:string[] =['Naman','Raman','Rihan'];

console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
let nums:number[] =[1,2,3.4];

console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]);

let arr:string[] = ['Let us C','Y.Kanhetkar','520'];
let i:any;
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

/* For in Loop */
for(i in arr) {
    console.log(arr[i]);
}