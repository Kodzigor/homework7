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