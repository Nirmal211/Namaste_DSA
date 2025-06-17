// make a function to find the second largest value from an array

    let arr = [4,9,0,2,8, 9, 7,1];
    // let arr = [];


    function secondLargest (arr) {
        let largestValue = -Infinity;
        let secondLargestValue;

        if(arr.length == 0 || arr.length == 1) {
            secondLargestValue = null;
            return null;
        }

        for(let i = 0; i<arr.length ; i++) {
            if(arr[i] > largestValue) {
                secondLargestValue = largestValue;
                largestValue = arr[i];
            } else if(arr[i] > secondLargestValue && arr[i] !== largestValue) {
                secondLargestValue = arr[i]
            }
        }
        return secondLargestValue;
    }


    const ans = secondLargest(arr)
    console.log("second Largest Value is " , ans);