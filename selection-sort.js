//Bubble Sort’s time complexity is O(n2).

function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        // the `j` loop will iterate through the unsorted region and find the index of the smallest element
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }

        // after we find the minIndex in the unsorted region,
        // swap that minIndex with the first index of the unsorted region
        swap(array, i, minIndex);
    }
  return array;
}

selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  