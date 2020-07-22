let arr = [3, 2, 5, 15, 6, 2, 8, 9, 4 , 4, 3, 5, 2, 5, 31, 2, 14, 15];

let tmp = [];
for (let i = 0; i < arr.length;i++){
    for (let j = i + 1; j < arr.length; j++){
        if (arr[i] > arr[j]) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
};

console.log(arr);

function unique (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr
}
unique(arr);
console.log(arr);