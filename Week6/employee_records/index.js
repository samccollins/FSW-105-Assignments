const employees = [];

function Employee(name, job, salary, status = 'Full Time') {
    this.firstName = name;
    this.jobTitle = job;
    this.salary = salary;
    this.status = status;
    this.info = printEmployeeForm = () => {
        console.log('Name: ' + this.firstName + ' ' + 'Job Title: ' + this.jobTitle + ' ' + 'Salary: ' + this.salary + ' ' + 'Status: ' + this.status);
    }
}

const bobForm = new Employee('Bob', 'Manager', '$30,000/year');
printEmployeeForm(bobForm);
const maryForm = new Employee('Mary', 'Chef', '$25,000/year', 'Part Time');
printEmployeeForm(maryForm);
const joeForm = new Employee('Joe', 'Host', '$20,000/year', 'Contract');
printEmployeeForm(joeForm);

employees.push({ bobForm, maryForm, joeForm });
console.log(employees);

