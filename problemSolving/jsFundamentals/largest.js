// Find largest and second largest in array
let nums = [2,3,4,5,6,6,39,5]

//largest
//brute force - sort and return last element
// linear scan

function largest(nums){
    let max = nums[0];
    for(let num of nums){
        if(num>max){
            max = num;
        }
    }
    return max;
}

//second largest
//brute force - sort and check elements from last return the second largest //Nlogn + n


function secondLargest(nums){
     nums.sort();
     return nums[nums.length-2];
 }

//linear scan - n+n = 2n
function secondLargest(nums){
    let firstlargest = largest(nums);
    let secondLargest = -Infinity;
    for(let num of nums){
        if(num>secondLargest && num!=firstlargest){
            secondLargest = num;
        }
    }
}

//linear scan - n
function secondLargest(nums){
    let firstmax = nums[0];
    let secondmax = -Infinity;
    for(let num of nums){
        if(num>firstmax){
            secondmax = firstmax;
            firstmax = num;
        }
        else if(num!=firstmax &&num>secondmax){
            secondmax = num;
        }
    }
    return secondmax;
}


//kth largest
//brute force - sort and return [k-1]
//min heap
//count sort

console.log(largest(nums));
console.log(secondLargest(nums));
