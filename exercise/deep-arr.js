const isContainsArray = (arr) => {
    for (const item of arr) {
        if (item instanceof Array) {
            return true
        }
    }
    return false;
  }
  
  const getArr = (arr) => {
    const newArr = []
    for (const item of arr) {
        if (item instanceof Array){
         for(const it of item)
         newArr.push(it);
        }
    }
    return newArr;
  }
  
  const len = (arr) => {
    const ll = arr.length;
    if (arr instanceof Array && !isContainsArray(arr)) {
      return arr.length;
    }
    return ll + len(getArr(arr));
  }
  console.log(len([1, 2, [3]]));
  