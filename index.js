
// Clonator (30 mins)

// Write a function that can create a deep copy of anything
// it gets passed. The generated copy should have the same own
// enumerable properties as the source, but modifying
// the copy should not affect the source in any way.

function clonator (source) {

  // let newArray = [];
  let newObj = {};

  if (Array.isArray(source)) {
    return source.map(function (item) {
      return clonator(item);
    });
    // source.forEach(function (element) {
    //   newArray.push(element);
    // });
    // return newArray;
  } else if (typeof source === 'object' && source !== null) {
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        newObj[key] = clonator(source[key]); 
      }
    }
    return newObj;
  }
  return source;
}

module.exports = clonator;
