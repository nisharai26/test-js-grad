/**
 * LEVEL 1: Implement using Array.prototype.sort method and NPM packages (e.g.: check-types)
 *   - REQUIRED
 * LEVEL 2: Implement without using Array.prototype.sort method or libraries, without regard to efficiency
 *   - Not required, but bonus points awarded
 * LEVEL 3: Implement without using Array.prototype.sort method or libraries, efficiently
 *   - Not required, but major bonus points awarded
 */

// Average and worst case time complexity (Big-O) of my function is:
// Explain:

module.exports = function sortArray(arr) {
 
    const myArray = arr.filter(function (item) {
      return !(parseInt(item) == item);
    });
    if(myArray.length>0){
      throw new TypeError({'Invalid Token':'Invalid Token'});
    }
    if(arr.length==0){
        return arr;
    }
    arr.sort((a, b) => a - b);
    return arr;

};
