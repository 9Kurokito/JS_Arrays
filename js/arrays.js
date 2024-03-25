function task1(){
    let arr = Array.from(Array(10), () => {return Math.round(Math.random() * 20)});
    console.log(arr.toString());
    let sum = arr.filter(index => index % 2 == 0).reduce((sum, elem) => sum + Math.sqrt(elem), 0);
    console.log(sum);
}

function task2(){
    function getElem(elem){
        if (elem >= 0 && elem <= 10){
            return true;
        }
        else{
            return false;
        }
    }
    arr = [3, 32, 1, 59, 4, 100, 11, 10, 0, 2];
    newArr = arr.filter(getElem).reduce((sum, elem) => sum + elem, 0);
    console.log(newArr);
}

function task3(){
    function isNumberEven(arr){
        return arr.every(elem => elem % 2 == 0);
    }
    arrMain = [1, 234, 342, 223, 22, 5, 17];
    if (isNumberEven(arrMain)){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
