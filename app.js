// For your weekend challenge, you will need to create an application that adds employee salaries so that
// a company knows how much they are spending each month in salary.

// The application should first have an input form that collects:
// The Employee's First and Last name
// The Employee's ID Number
// The Employee's Job Title
// The Employee's Salary (Yearly)
// The form should have a submit button that clears out the form and your logic should store that information.
// Then, that information should be appended to the DOM so that the user of the application can see the
// information they just entered.

// Finally, your logic should calculate all of the employee salaries and report back what the monthly cost
// of salaries is.

// Hard Mode
// Create a delete button that removes an employee from the form. Note that in hard mode, it need not remove
// that Employee's salary from the reported total.

// Pro Mode
// Once the employee is deleted, also update the total spend on salaries to discount the removed employee's
// salary. This will require that the logic knows which element was removed. You will need to stretch yourself
// for this one. I also recommend that you look into jQuery's .data() function to help complete this. Note,
// you will need to do something both when the employee is added and when they are deleted to make your
// application 'smart'.

// Email Kris and I when you are complete, make sure to include your GitHub Repo that contains the code as
// well

//create an empty array to put the employee information in
var employeeArray = [];
//create an empty variable to keep track of the total salary
var totalSalary = 0;
//create an empty variable to keep track of the monthly salary
var monthlyCost = 0;

$(document).ready(function(){
	//stopping the default browser response to the submit button being pressed
	$('#employeeinfo').submit(function(submit){
		submit.preventDefault();
		//creating an empty object to put the employee information in
		var values = {};
		//taking in the submit field information
		console.log($('#employeeinfo').serializeArray());
		$.each($("#employeeinfo").serializeArray(), function (i, field){
			values[field.name] = field.value;
		})
		//clearing the input boxes
		$('#employeeinfo').find('input[type=text]').val("");
		console.log(values);
		//adding to the empty array
		employeeArray.push(values);
		//putting the values object into a function to calculate total and monthly salary
		salaryMath(values);
		//displaying results to the DOM; this must come after the calculation
		toDom(values);
	})
// });

	$('#employeeinfo').on('click', '.deletebutton', function(){
		$('#employeecontainer').children().last().remove();
		console.log("Testing");
	});
});


//calculating the total and monthly salary
function salaryMath (salary) {
	var salaryIncrease = parseInt(salary.employeesalary);
	totalSalary += salaryIncrease;
	monthlyCost = Math.round(totalSalary / 12);
	//adds number to the end without removing earlier number 
	$('#salarytotal').append(totalSalary);
	$('#salarycost').append(monthlyCost);
	//console.log("Total salary is: ", totalSalary);
	//console.log("Monthly cost is: ", monthlyCost);

};
//function to display information to the DOM
function toDom	(employee){
	console.log(employee);
	$('#employeecontainer').append('<div class="employee"></div>');
	var $el = $('#employeecontainer').children().last();

	$el.append('<p>Employee name: ' + employee.employeename + '</p>');
	$el.append('<p> Employee number: ' + employee.employeenumber + '</p>');
	$el.append('<p> Employee title: ' + employee.employeetitle + '</p>');
	$el.append('<p> Yearly Salary: ' + employee.employeesalary + '</p>');
	$el.append('<p>Salary total: ' + totalSalary + '</p>');
	$el.append('<p>Monthly cost: ' + monthlyCost + '</p>');
};









