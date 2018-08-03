var recipes = {};


function updateObjectWithKeyAndValue(obj, key, val){
 return Object.assign({}, obj,{[key]: val} )
  
  }

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  return obj = key + value
}