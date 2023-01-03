let arr = [1,2,3,4,5,6,7,8,9];
let index = +prompt("Input index");
function tryRemoveFromArray(arr,index){
    for(let i = 0; i < arr.length; i++){
        if( index < 0 || index > arr.length){
            alert(arr);
        } else{
            arr.splice(index,1);
            alert(arr)
        }
    }
}
tryRemoveFromArray(arr,index);