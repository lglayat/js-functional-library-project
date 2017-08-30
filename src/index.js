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
        if (array[i]){
          newArr.push(array[i])
        }
      }
      return newArr
    },
    // flatten: flatten, // Bonus
    uniq: function(array, isSorted, iteratee){
      if(!iteratee){
        iteratee = function identity(element){ return element }
      }
      if(!isSorted){
        let newArr = array.sort()
        let newNewArr = []
        let returnVals = []
        for(let i = 0; i < newArr.length;i++){
          if (newNewArr.includes(iteratee(newArr[i])) === false){
            // debugger
            newNewArr.push(iteratee(newArr[i]))
            returnVals.push(newArr[i])
          }
        }
        return returnVals
      } else {
        let newArr = []
        let returnVals = []
        for(let i = 0; i < array.length;i++){
          if (newArr.includes(iteratee(array[i])) === false){
            newArr.push(iteratee(array[i]))
            returnVals.push(array[i])
          }
        }
        return returnVals
      }
    },
    bind: function(funct ,object){
      return function(){
        return funct.apply(object, arguments)
      }
    },
    keys: function(object){
      returnVals = []
      for (let i in object){
        returnVals.push(i)
      }
      return returnVals
    },
    values: function(object){
      returnVals = []
      for (let i in object){
        returnVals.push(object[i])
      }
      return returnVals
    },
    functions: function(object){
      let returnVals = []
      for (let i in object){
        if(typeof object[i] === "function"){
          returnVals.push(i)
        }
      }
      returnVals.sort()
      return returnVals
    }
  }
})()

var people = [{name:'john',age:20},{name:'mary',age:31},{name:'kevin',age:20}]
var func = function(greeting){ return greeting + ': ' + this.name };

var array = [1,1,2,2,3]
var roman = {
  name: "roman",
  fav_language: "ruby",
  school: "flatiron"
}

function createPerson(name,language,school){
  return { name: name, language:language, school:school }
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
