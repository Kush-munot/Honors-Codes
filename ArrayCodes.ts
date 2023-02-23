let students:string[] =['Naman','Raman','Rihan'];

/* console.log(students[0]);
console.log(students[1]);
console.log(students[2]); */
let nums:number[] =[1,2,3.4];

/* console.log(nums[0]);
console.log(nums[1]);
console.log(nums[2]); */

let arr:string[] = ['Let us C','Y.Kanhetkar','520'];
let i:any;
/* for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} */

/* For in Loop */
/* for(i in arr) {
    console.log(arr[i]);
} */

let arr1:string[] = new Array('Let us C','Y.Kanhetkar','520')
/* for(i in arr1) {
    console.log(arr1[i]);
} */

let arr2:string[] = new Array('Let us C','Y.Kanhetkar','520')

/* function print_arr2(arr:string[]){
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
} */

/* print_arr2(arr2); */

let copyArr = [...arr]
/* console.log(copyArr); */

let mergedArr = [...copyArr,2,3,4,5,6,7,...arr1];
/* console.log(mergedArr); */

let [a,b,c] = ['Kush', 'Gunendra','Mohan'];
/* console.log(a,b,c); */
