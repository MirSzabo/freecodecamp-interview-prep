//Bubble Sort’s time complexity is O(n2).

function bubbleSort(array) {
    function swap(array, idx1, idx2) {
    let temp = array[idx1];     // save a copy of the first ele
    array[idx1] = array[idx2];  // overwrite the first ele with the second ele
    array[idx2] = temp;         // overwrite the second ele with the first ele copy
  }
  
    let swapped = true; // this variable will be used to track whether or not
                        // we made a swap on the previous pass. If we did not make any
                        // swap on the previous pass, then the array must already be sorted
  
    // this while will keep doing passes if a swap was made on the previous pass
    while(swapped) {
      swapped = false;  // reset to swap to false
  
      // this for will perform a single pass
      for (let i = 0; i < array.length; i++) {  
        if (array[i] > array[i+1]) {  // if the two eles are not ordered...
  
          swap(array, i, i+1);          // swap them.
  
          swapped = true;               // since we made a swap, remember that we did so
                                        // b/c we should perform another pass after this one
        }
      }
    }
  
    return array;
  }
  
  bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  