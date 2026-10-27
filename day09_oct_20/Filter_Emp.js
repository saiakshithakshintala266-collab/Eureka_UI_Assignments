let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

//   function filterEmployeesBySal(emp_array) {
//     const min_sal = 6000;
//     const max_sal = 8000;
//     for(let i=0; i<emp_array.length; i++) {
//         if(!(emp_array[i].sal >= min_sal && emp_array[i].sal <= max_sal)) {
//             emp_array.
//         }
//     }

let mid_salary_employees = employees.filter((emp) => emp.sal >= 6000 && emp.sal <= 8000);
console.log("Employees with salary between 6000 and 8000: ", mid_salary_employees);
