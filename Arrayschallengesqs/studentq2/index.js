// Here's I'm trying to create a TypeScript type alias for a student with the name property and a grades property, which is an array of numbers.
/*Define a TypeScript type alias named Student to represent a student with the
following properties:
• name (string): The name of the student.
• grades (number[ ]): An array of grades for different subjects.

2. Create an array named students containing at least three student objects. Each student
object should include a name and an array of grades.
3. Implement a function named calculateAverageGrade that takes a student's grades as
input and returns the average grade for that student.
4. Display each student's name and average grade. Iterate through the students array,
calculate the average grade for each student using the calculateAverageGrade
function, and print their name and average grade.*/
var students = [
    {
        name: "Miraal",
        grades: [22, 35, 43, 56]
    },
    {
        name: "Naila",
        grades: [37, 58, 82, 90],
    },
    {
        name: "Hurrain fatima",
        grades: [15, 95, 57, 82]
    }
];
// Here's the function that calculates the average grade of students.
function calculateAverageGrade(studentGrade) {
    var average = studentGrade.reduce(function (a, b) { return a + b; }) / studentGrade.length;
    return Math.floor(average);
}
// The reduce() method is used to calculate the sum of all the elements in the array.
// The length property is used to calculate the total number of elements in the array.
// The Math.floor() method is used to round the average to the nearest integer.
// Now iterating the array to print the name and average grades of each student.
// The forEach() method is used to iterate over the array and call the calculateAverageGrade function on each student.
students.forEach(function (student) {
    console.log("Student Name: ".concat(student.name, ", Average Grade: ").concat(calculateAverageGrade(student.grades)));
});
