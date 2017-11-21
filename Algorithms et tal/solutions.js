

function first(array) {
    let emp = {};
  for(let i=0; i < array.length; i++){
    if (typeof(emp[array[i]]) !== "undefined"){
        return array[i];
    }
    else{
        emp[array[i]] = "";
    }
  }
  return -1
}

first([0,2,6,3,3,2]);