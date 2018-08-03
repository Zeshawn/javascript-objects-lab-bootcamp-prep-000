var recipes = {};


function updateObjectWithKeyAndValue(obj, key, val){
 return Object.assign({}, obj,{[key]: val} )
  
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}