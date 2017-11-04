printReverse([1, 2, 3, 4]);
printReverse(["a", "b", "c"]);

isUniform([1, 1, 1, 1]);
isUniform([2, 1, , 1, 1]);
isUniform(["a", "b", "p"]);
isUniform(["b", "b", "b"]);

sumArray([1, 2, 3]);
sumArray([10, 3, 10, 4]);
sumArray([-5, 100])

max([1, 2, 3]);
max([10, 3, 10, 4]);
max([-5, 100]);

firstReocurrence([3, 2, 6, 7, 6, 3, 0]);
firstReocurrence([33, 25, 27, 47, 33]);
firstReocurrence([2, 3, 3, 1, 5, 2]);
firstReocurrence([2,1,5,6,3,7,8])

function firstReocurrence(array) {
    let emp = [];
    emp.push(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (emp.indexOf(array[i]) === -1) {
            emp.push(array[i]);
        } else {
            return array[i];
        }
    }
    return -1
}
//WORK IN PROGRESS, USING AN OBJECT
function firstReocurrence(array) {
    let emp = {};
    for (let i = 1; i < array.length; i++) {
        if (typeof emp[''] === null) {
            emp.push(array[i]);
        } else {
            return array[i];
        }
    }
    return -1
}

function max(array) {
    var num = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > num) {
            num = array[i];
        }
    }
    return num;
}

function sumArray(array) {
    var result = 0
    array.forEach(function (item) {
        result = item + result
    })
    console.log(result)
}

function isUniform(array) {
    var other = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] !== other) {
            return false;
        }
    }
    return true;
}

function printReverse(array) {
    for (let i = array.length - 1; i >= 0; i--)
        console.log(array[i])
}


