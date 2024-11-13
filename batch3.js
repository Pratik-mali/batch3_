let a = [1,4,8,10,12,15,16,20]  //5 7  
let num = 16

// for(let i = 0; i<= a.length;i++){
//     if(num == a[i]){
//         console.log(i)
//     }
// }

let start = 0
let end = a.length


while(start <= end){
let mid = parseInt((start+end)/2)   //12/2=  6

    if(a[mid] == num){
        console.log(mid)
        break;
    }
    else if(num < a[mid]){
        end = mid - 1 
    }

    else if(num > a[mid]){
        start = mid  + 1
    }
}

console.log("Pratik")