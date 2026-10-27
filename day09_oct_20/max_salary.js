let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];

//   function findMaxSalary(emp_array) {
//     let max_salary = emp_array[0].sal;
//     for(let i=1; i<emp_array.length; i++) {
//         if(emp_array[i].sal > max_salary) {
//             max_salary = emp_array[i].sal;
//         }
//     }
//     return max_salary;
//   }
        let max_sal = Math.max(...employees.map(emp => emp.sal));

        let rich_emp = employees.find(emp => emp.sal === max_sal);


  console.log(rich_emp);
  