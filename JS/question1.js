/***** Question 1  *****/
var nestedObject = {
    data: {
      info: {
        stuff: {
          thing: {
            moreStuff: {
              magicNumber: 44,
              something: 'foo2'
            }
          }
        }
      }
    }
  };
  
  
  function contains(obj, val) {
    for(let value in obj) {
      if(typeof obj[value] === 'object' && obj[value]!= null) {
        if(contains(obj[value], val))
          return true;
      } else if(obj[value] === val) {
        return true;
      }
    }
    return false;
  }
  
  // console.log(contains(nestedObject, 44)); // true
  // console.log(conatins(nestedObject, "foo")); // false
  // console.log(contains(nestedObject,'foo1'));