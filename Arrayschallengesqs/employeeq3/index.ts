// Here's I'm going to create a type alias for an employee object.
/*1. Define a type alias named Employee with the following properties:
• name (string): The name of the employee.
• hoursWorked (number): The number of hours the employee worked.
• hourlyRate (number): The hourly rate of the employee.
• salary (number): The base salary of the employee.
2. Define an array named employees containing employee objects. Each employee
object should include a name, hoursWorked, hourlyRate, and salary.
3. Implement a function named calculateSalary that calculates the salary for each
employee based on the hours worked and hourly rate.
4. If an employee has worked 20 hours or more, apply a 10% bonus to their salary.*/

// Here's the type alias/code.
type Employee={
    name: string,
    hoursWorked: number,
    hourlyRate : number,
    salary: number,
}
const employees: Employee[] = [
    {
        name: "Shabbir Hussain",
        hoursWorked: 7,
        hourlyRate: 54,
        salary: 0
    },
    {
        name: "Abdul Basit",
        hoursWorked: 14,
        hourlyRate: 60,
        salary: 0
    },
    {
        name: "Azam Ali",
        hoursWorked: 24,
        hourlyRate: 79,
        salary: 0
    }
]
// Here's the function,and the forEach method is used to iterate through the array.
function calculateSalary() {
    employees.forEach((employee) => {
        // Now calculating salary.
        employee.salary = employee.hourlyRate * employee.hoursWorked
        // Now incrementing/adding about 10% of bonus to the salary if employee worked for 20 hours or more.
        if (employee.hoursWorked >= 20) {
            let bonus = employee.salary * 0.1
            employee.salary += bonus
        }
     })
}
// Here's invoking the function.
calculateSalary()
// Now evaluating the Outcome/ results.
console.log(employees);