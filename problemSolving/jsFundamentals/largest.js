// Find largest and second largest in array
let nums = [2,3,4,5,6,6,39,5]
function largest(nums){
    let max = nums[0];
    for(let num of nums){
        if(num>max){
            max = num;
        }
    }
    return max;
}

function secondLargest(nums){
    nums.sort();
    return nums[nums.length-2];
}
console.log(largest(nums));
console.log(secondLargest(nums));
