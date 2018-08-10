/** Transducers
 * bcuz this is stupid:
 * [1,2,3,4,5,6].filter(isEven).map(doubleThisJawn) // [4,8,12]
 * 
 * looping through the array twice? why?
 */
const baseArray = [1,2,3,4,5,6,7,8,9]
 /* this is really what reducers & predicates do
 const reduce = (a, b) => a.concat(b)
 const predicate = value => value === 'some condition'
*/
 
/** Transformation Fns */
const doubleThisJawn = number => number * 2
const isEven = number => !(number % 2)


/* = Ex. Simple reducer */
const simpleTransform = array => array.map(doubleThisJawn)
console.log("Simple Transform (double)", simpleTransform(baseArray));

/* = Ex. Simple Predicate */
const simplePredicate = array => array.filter(isEven)
console.log('Simple Predicate (isEven)', simplePredicate(baseArray))

/* = Ex. Simple Compose */
const doubleTwice = number => doubleThisJawn(doubleThisJawn(number))
const simpleCompose = array => array.map(doubleTwice)
console.log("Simple Compse (double twice)", simpleCompose(baseArray));

/* = Ex. Missmatch Signature */
const misMatch = number => doubleThisJawn(isEven(number))
const watchThisMess= array => array.map(misMatch)
console.log("Mismatch Signature, transform and predicate (incorrect)", watchThisMess(baseArray))