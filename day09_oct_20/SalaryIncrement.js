let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];
function IncrementSalary(emp_array){
    let incremented_sal = emp_array.map(emp => emp.sal * 1.1);
    return incremented_sal;
}

console.log("Employees Object array after salary increment is : ", IncrementSalary(employees));
