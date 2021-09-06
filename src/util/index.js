export function dotFormatNums(number){
  return String(number).split('').join('.')
}

export function calculateCost(list) {
  return list.map( item => {
    if(!Object.hasOwnProperty('cost')) {
      item.cost = item.price * item.count
      item = { ...item, ...item.cost }
    }
    for(let key in item) {
      if(Array.isArray(item[key]) && item[key].length) {
        calculateCost(item[key])
        return item
      }else {
        return item
      }
    }
  })
}


export function getByIdRecursive(listTable, id, decrease) {
  return listTable.map( item => {
    if(item.id === id) {
      if(item.count <= 0 && decrease < 0){
        item.count = 0
      } else {
        item.count = item.count + decrease
      }
    } else if (Array.isArray(item.children) && item.children.length) {
      getByIdRecursive(item.children, id, decrease)
    }
    return item
  })
}
