const collection = ['ivan', 'olga', 'vlad', 'dima'];
const collectionResult = [];
const tmpArrFirst = [];
const tmpArrSecond = [];


const addElem = (elem, index) => {

  for (let i = 0; i < index; i++) {
    tmpArrFirst[i] = collection[i];    
  }

  for (let i = index; i < collection.length; i++) {
    tmpArrSecond[tmpArrSecond.length] = collection[i];
  }

  for (let i = 0; i < tmpArrFirst.length; i++) {
    collectionResult[i] = tmpArrFirst[i];
  }

  collectionResult[collectionResult.length] = elem;
  
  for (let i = 0; i < tmpArrSecond.length; i++) {
    collectionResult[collectionResult.length] = tmpArrSecond[i];
  }
  
  return collectionResult;
  
};


console.log(addElem('boris', 1));


const myArr = [150, "true", 15, 1, 89, 150, 'Boss', true, 'Boss'];

const indexOf = (arr, elem) => {
    for (let index in arr) {
        if (arr[index] === elem) return index;
    }
};

let result = indexOf(myArr, 150);
console.log(result);


const lastIndexOf = (arr, elem) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === elem) {
            return i;
        }    
    }
    return -1;
};

let result2 = lastIndexOf(myArr, true);
console.log(result2);


const includes = (arr, elem) => {
    for (let index in arr) {
       if (arr[index] !== elem) continue;
     else if (arr[index] === elem) return true;
    }
  return false;
};

let result3 = includes(myArr, true);
console.log(result3);