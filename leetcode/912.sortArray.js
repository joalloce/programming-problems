/**
 * 912. Sort an Array
 */
var sortArray = function (nums) {
  nums = mergeSort(nums);
  return nums;
};

const mergeSort = (array) => {
  const merge = (array, temp, left, right, rightEndIndex) => {
    let leftEndIndex = right - 1;
    let tempIndex = left;
    let elementNumber = rightEndIndex - left + 1;

    while (left <= leftEndIndex && right <= rightEndIndex) {
      if (array[left] <= array[right]) {
        temp[tempIndex++] = array[left++];
      } else {
        temp[tempIndex++] = array[right++];
      }
    }

    while (left <= leftEndIndex) {
      temp[tempIndex++] = array[left++];
    }
    while (right <= rightEndIndex) {
      temp[tempIndex++] = array[right++];
    }
    for (let i = 0; i < elementNumber; i++) {
      array[rightEndIndex] = temp[rightEndIndex];
      rightEndIndex--;
    }
  };

  const ms = (array, temp, left, right) => {
    if (left < right) {
      let center = parseInt((left + right) / 2);
      ms(array, temp, left, center);
      ms(array, temp, center + 1, right);
      merge(array, temp, left, center + 1, right);
    }
  };

  const sort = (array) => {
    let temp = new Array(array.length);
    ms(array, temp, 0, array.length - 1);
    return array;
  };

  return sort(array);
};
