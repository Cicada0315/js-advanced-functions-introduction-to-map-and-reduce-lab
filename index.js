// Your code here
function mapToNegativize(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] *= (-1);
    }
    return arr;
}
function mapToNoChange(arr){
    let newarr=[];
    for(let i=0; i<arr.length; i++){
        newarr[i] =arr[i] * (-1);
    }
    return arr;
}

function mapToDouble(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] *=2;
    }
    return arr;
}

function mapToSquare(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] *=arr[i];
    }
    return arr;
}

function reduceToTotal(arr, total=0){
    for(let i=0; i<arr.length; i++){
        total+=arr[i]
    }
    return total;
}

function reduceToAllTrue(arr){
    for(let i=0; i<arr.length; i++){
        if (!arr[i]){
            return false;
        }
    }
    return true;
}

function reduceToAnyTrue(arr){
    for(let i=0; i<arr.length; i++){
        if (arr[i]){
            return true;
        }
    }
    return false;
}