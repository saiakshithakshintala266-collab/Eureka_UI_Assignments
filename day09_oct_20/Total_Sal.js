let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

  // function findTotalSalary(emp_array) {
  //   let total_Sal = 0;
  //   for(let i=0; i<emp_array.length; i++) {
  //       total_Sal += emp_array[i].sal;
  //   }
  //   return total_Sal;
  // }

  let total_sal = employees.reduce((sum, emp) => {
    return sum + emp.sal;
  }, 0)

  console.log("Total Salary of All employees: ", total_sal);