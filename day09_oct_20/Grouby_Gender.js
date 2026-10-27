let employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'sameer', sal: 7000, gender: 'male' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'female' },
	{ eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
  ];


   let genderised_arr = employees.reduce((obj, emp) => {
    if(!obj[emp.gender])
    {
        obj[emp.gender] = [];
    }
     obj[emp.gender].push(emp);
     return obj;
   }, {})

   console.log(genderised_arr);
