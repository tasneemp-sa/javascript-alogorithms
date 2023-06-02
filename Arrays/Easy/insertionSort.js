const insertIth = (arr, i) => {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key;
}

const insertionSort = arr => {
    for (let i = 1; i < arr.length - 1; i++) {
        insertIth(arr, i);
    }
    return arr;
}

const unsorted = [80, 75, 100, 16, 5, 34, 76, 230, 1, 4, 900];
console.log(insertionSort(unsorted));