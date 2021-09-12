import Vue from "vue";
export function dotFormatNums(number){
  return String(number).split('').join('.')
}

export function calculateCost(list) {
  return list.map( item => {
    for (let key in item) {
      if(Array.isArray(item[key]) && item[key].length) {
        calculateCost(item[key])
      }
    }
    return item
  })
}

export function getByIdRecursive(listTable, id, plusMinus) {
  return listTable.map( item => {
    if(item.id === id) {
      if(!!plusMinus) {
        if(item.count <= 0 && plusMinus < 0){
          item.count = 0
        } else {
          item.count += plusMinus
        }
      } else {
        if(item.isOpen) Vue.set(item, 'isOpen', null)
        else Vue.set(item, 'isOpen', true)
      }

    } else if (Array.isArray(item.children) && item.children.length) {
      getByIdRecursive(item.children, id, plusMinus)
    }
    return item
  })
}
