// make a function to find the second largest value from an array

    let arr = [4,9,0,2,8,7,1];

    function secondLargest (arr) {
        let largestValue = -Infinity;
        let secondLargestValue;

        for(let i = 0; i<arr.length ; i++) {
            if(arr[i] > largestValue) {
                secondLargestValue = largestValue;
                largestValue = arr[i];
            } else if(arr[i] > secondLargestValue) {
                secondLargestValue = arr[i]
            }
        }
        return secondLargestValue;
    }


    const ans = secondLargest(arr)
    console.log("second Largest Value is " , ans);