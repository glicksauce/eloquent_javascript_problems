/*
A list
Objects, as generic blobs of values, can be used to build all sorts of data structures. A common data structure is the list (not to be confused with array). A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on.

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
1
let list = {
2
  value: 1,
3
  rest: {
4
    value: 2,
5
    rest: {
6
      value: 3,
7
      rest: null
8
    }
9
  }
10
};
*/

/*
A nice thing about lists is that they can share parts of their structure. For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, but they share the structure that makes up their last three elements. The original list is also still a valid three-element list.

Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.
*/

//Chapter 4
//Deep Comparison
/*
The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (use the === operator for that) or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/

/*
const deepEqual = (val1, val2) => {
	if (val1 === val2){
		return true;
	} else if (typeof val1 == 'object' && typeof val2 =='object' && val1 !=null && val2 != null){
		if (Object.keys(val1).length == Object.keys(val2).length){
			for (let element of Object.keys(val1)) {
        if val1.
				console.log("test", element, val1.element);
			}
		}
	} else {
		return false;
	}
}
*/

const deepEqual = (val1, val2) => {
	if (val1 === val2){
    return true;
    
  //check if deep comparison is needed
	} else if (typeof val1 == 'object' && typeof val2 =='object' && val1 !=null && val2 != null){
    let deepTest = false;
      for (let keys in val1){
        //console.log(val1[keys], val2[keys]);
        deepTest = deepEqual(val1[keys], val2[keys]);
        if (deepTest == false){
          return false;
        }
      }
      return deepTest;
	} 
  return false;

}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual({here: {is: null}, object: 2}, {here: {is: null}, object: 2}));

//------------------------------------
//Chapter 5 Exercises
//Flattening
//Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3, 2, 1], [4, 5], [6]];

//.recuce has these 4 parameters:
const reducer = (accumulator, currentValue, idx, src) => {
  return accumulator.concat(currentValue);
}

const arrFlatten = (arr) => {
  let returnString = '';
  //for (let element of arr){;
    returnString = (arr.reduce(reducer));
  //}
  return returnString;
}


console.log(arrFlatten(arrays));

//Your Own Loop
//Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. Finally, it calls the update function to create a new value and starts from the beginning.

const loop = (iteration, testFunction, updateFunction, bodyFunction) => {
  if (!testFunction(iteration)) {
    return false;
  }

  while (testFunction(iteration)){
    bodyFunction(iteration);
    iteration = updateFunction(iteration)
  }
}


const testEval = (value) => {
  console.log(value, func);
}

loop(3, n => n > 0, n => n -1, console.log)
loop(10, n => n > 0, n => n -2, console.log)

//Everything
//Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

//Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

const every = (array, test) => {
  for (let element of array){
    if (!test(element)){
      return false
    }
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));

//Dominant writing direction
//Write a function that computes the dominant writing direction in a string of text. Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).

//The dominant direction is the direction of a majority of the characters that have a script associated with them. The characterScript and countBy functions defined earlier in the chapter are probably useful here.

const dominantDirection = text => {
  console.log(text);
}