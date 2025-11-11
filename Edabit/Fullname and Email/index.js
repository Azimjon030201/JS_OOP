class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname
		this.lastname = lastname
		// Complete the code!
        this.fullName = this.firstname + " " + this.lastname;
        this.email = this.firstname + "." + this.lastname + "@company.com";
	}
}
let emp1 = new Employee("John", "Smith")
console.log(emp1.fullName);


let emp2 = Employee("Mary",  "Sue")
console.log(emp2.email);


let emp3 = Employee("Antony", "Walker")
console.log(emp3.firstname);
