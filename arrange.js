function arrangeArray() {
    let arr = [1, 2, 3, 4, 5, 6];
    let number = 0;

    for (let i = 0; i < (arr.length) / 2; i++) {
        number = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = number;

    }
    document.write('Mang sau sap xep ' + arr);
}