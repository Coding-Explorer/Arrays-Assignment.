// Solution of Assignment question of arrays.
// ----------Question no 01------------//.
var fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
// -----------Question no 02------------//.
var numbers = [10, 20, 30, 40];
console.log(numbers);
// ------------Question no 03------------//.
var thirdFruit = fruits[2];
console.log(fruits[2]);
// -------------Question no 04------------//.
numbers[1] = 25;
console.log(numbers);
// --------------Question no 05------------//.
fruits.push("grape"); // .push() method is used to push/add/include new item/element in the last of an array.
console.log(fruits);
// output would be fruits = ["apple" , "banana" , "mango" , "orange" , "grape"];
// --------------Question no 06-------------//.
var lastFruit = fruits.pop(); // The pop() method is used for the removal of last element/item from the array.
console.log(fruits);
// output would be like that lastFruit = ["apple" , "banana" , "mango" , "orange"];
// Here's a magic done the last element vanished.
// --------------Question no 07--------------//.
var firstFruit = fruits.shift(); // The shift() method is used for the removal of the starting/first element/item from the array.
console.log(fruits);
// output would appear like that fruits = ["banana" , "mango" , "orange"];
// --------------Question no 08--------------//.
fruits.unshift("kiwi"); // The unshift() method is used for the addition of the starting/first element/item from the array.
console.log(fruits);
// output will be like that fruits = ["kiwi" , "banana" , "mango" , "orange"];
// Here you can see the kiwi is successfully added at the beginning of the array. 
// --------------Question no 09--------------//.
fruits.splice(1, 2); // The splice() method is used for the removal of the specific element/item from the array.
console.log(fruits);
// output on execution would be fruits = ["kiwi" , "orange"];
// Here you can see the specified elements banana and mango are successfully removed from the array.
// --------------Question no 10--------------//.
fruits.splice(2, 0, "pineapple", "pear"); // The splice() method is also used for the addition of the specific element/item from the array.
console.log(fruits);
// output should be fruits = ["kiwi" , "orange" , "pineapple" , "pear"];
// Here you can see the specified name of elements are added efficiently.
// --------------Question no 11--------------//.
var citrusFruits = fruits.slice(0, 2); // The slice() method is used for the creation of the new array from the existing array.
console.log(citrusFruits);
// output will be citrusFruits = ["kiwi" , "orange"];
// --------------Question no 12--------------//.
var lastTwoFruits = fruits.slice(-2); // The slice() method is also used for the creation of the new array from the existing array.
console.log(lastTwoFruits);
// output on execution would be lastTwoFruits = ["pineapple" , "pear"];
