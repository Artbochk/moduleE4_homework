function keyCheck(str, obj){
    let result = false
    for(let key in obj){
        if(key == str){
        result = true;
        break
      }
    }
    return result
}
  
let student = {
    name: 'Ivan',
    age: 22
}
  
console.log(keyCheck('name', student))
console.log(keyCheck('city', student))
