// forEach

const doubleValues = (arr) => {
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val *2);
    });
    return newArr;
}

const onlyEvenValues = (arr) => {
    let newArr = [];
    arr.forEach(function(val){
        if(val%2 === 0){
            newArr.push(val);
        }
    });
    return newArr;
}

const showFirstAndLast = (arr) => {
    let newArr = [];
    arr.forEach(function(val){
        newArr.push(val[0] + val[val.length -1]);
    });
    return newArr;
}

const addKeyAndValue = (arr, key, value) => {
    arr.forEach(function(val){
        val[key] = value;
    });
    return arr;
}

const vowelCount = (str) => {
    let splitArr = str.split('');
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function(letter){
        let lowerCasedLetter = letter.toLowerCase();
        if (vowels.indexOf(lowerCasedLetter) !== -1){
            if(obj[lowerCasedLetter]){
                obj[lowerCasedLetter]++;
            }
            else{
                obj[lowerCasedLetter] = 1;
            }
        }
    });
    return obj;
}

//map

const doubleValuesWithMap = (arr) => {
    return arr.map(function(val){
        return val*2;
    });
}

const valTimesIndex = (arr) => {
    return arr.map(function(val, index){
        return val*index;
    });
}

const extractKey = (arr, key) => {
    return arr.map(function(val){
        return val[key];
    });
}

const extractFullName = (arr) => {
    return arr.map(function(val){
        return val.first + " "+ val.last;
    });
}

//filter

const filterByValue = (arr, key) => {
    return arr.filter(function(val){
        return val[key] !== undefined;
    });
}

const find = (arr, searchValue) => {
    return arr.filter(function(val){
        return val === searchValue;
    })[0];
}

const findInObj = (arr, key, searchValue) => {
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

const removeVowels = (str) => {
    const vowels = "aeiou";
    return str
    .toLowerCase()
    .split('')
    .filter(function(val){
        return vowels.indexOf(val) === -1;
    })
    .join('');
}

const doubleOddNumbers = (arr) => {
    return arr
    .filter(function(val){
        return val %2 !== 0;
    })
    .map(function(val){
        return val*2;
    });
}