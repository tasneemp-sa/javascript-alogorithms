const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const bubble = (arr) => {
    let i = arr.length - 1;
    while (i >= 0) {
        if (arr[i] < arr[i - 1]) {
            swap(arr, i, i - 1);
        }
        i--;
    }
}

const bubbleSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        bubble(arr);
    }
    return arr;
}

const unsorted = [50, 25, 17, 100, 82, 7, 16, 1, 0, 250, 549];
console.log(bubbleSort(unsorted));