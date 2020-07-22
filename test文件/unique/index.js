const Arr = [21, 21, 32, 21, 2, 32, 1, 23, 2, 1, 32, 1, 23, 21.2, 3, 2, 21, 2, 2, 1, 23, 2.12, 3];


function unique1 (arr) {
    for (var i=0; i < arr.length; i++){
        for (var j = i + 1; j < arr.length; j++){
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
                j--;
            }
        }
    }
    // return arr;
};
unique1(Arr);
console.log(Arr);

function unique2 (arr) {
    return Array.from(new Set(arr));
};


console.log(unique1(Arr));

// 返回值也会一种学问；