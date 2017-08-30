const fi = (function() {
  return{
    each: function(arr, iteratee){
      for(let i = 0; i < arr.length;i++){
        let element = arr[i]
        let index = i
        iteratee(element, index, arr)
      }
      return arr
    },
    map: function(arr, iteratee){
      let newArr = []
      for(let i = 0; i < arr.length;i++){
        let element = arr[i]
        let index = i
        newArr.push(iteratee(element, index, arr))
      }
      return newArr
    },
    filter: function(list,predicate){
      let newArr = []
      for(let i = 0; i < list.length;i++){
        let element = list[i]
        if (predicate(element)){
          newArr.push(element)
        }
      }
      return newArr
    },
    reduce: function(list, iteratee, memo){
      if (memo === undefined){
        memo = list[0]
        for(let i = 1; i < list.length;i++){
          let element = list[i]
          let index = i
          memo = iteratee(memo,element,index,list)
        }
        return memo
      }

      else{
        for(let i = 0; i < list.length;i++){
          let element = list[i]
          let index = i
          memo = iteratee(memo,element,index,list)
        }
        return memo
      }
    },
    find: function(list,predicate){
      for(let i = 0; i < list.length;i++){
        let element = list[i]
        if (predicate(element)){
          return element
        }
      }
    },
    sortBy: function(list,iteratee){
      let newArr = {}
      for (let i in list){
        let element = list[i]
        newArr[`${iteratee(list[i])}`] = element
      }

      keysArr = Object.keys(newArr).sort(function compareNumbers(a, b) {
        return a - b;
      })

      returnVals = []
      for(let i in keysArr){
        returnVals.push(newArr[keysArr[i]])
      }

      return returnVals
    },
    size: function(list){
      if(Array.isArray(list))
        return list.length
      else{
        let counter = 0
        for(let i in list){
          counter++
        }
        return counter
      }
    },
    first: function(array){
      if (array.length > 0){
        return array[0]
      }

    } ,
    last: function(array){
      if (array.length > 0){
        return array[array.length - 1]
      }
    } ,
    compact: function(array){
      let newArr = []
      for(let i = 0; i < array.length;i++){
        // debugger
        if (array[i]){
          newArr.push(array[i])
        }
      }
      return newArr
    },
    // flatten: flatten, // Bonus
    // uniq: uniq,
    // bind: bind,
    // keys: keys,
    // values:values,
    // functions: functions
  }
})()

var array = [1,2,3]
var roman = {
  name: "roman",
  fav_language: "ruby",
  school: "flatiron"
}


function roman(sum, num){
  return sum+ num
}

function isOne(n){
  return n === 1
}

function inc(n){
  m = n+1
  return m
}

function each(arr, iteratee){
  for(let i = 0; i < arr.length;i++){
    iteratee(arr[i])
  }
  return arr
}
