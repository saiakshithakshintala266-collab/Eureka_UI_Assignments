var employees = [
    { eId: 101, name: "sanjay", sal: 5000, gender: "male" },
    { eId: 104, name: "reena", sal: 8000, gender: "female" }
]

  var departments = [
    { eId: 101, dept: "sales" },
    { eId: 104, dept: "marketing" }
]


let final_arr = employees.map((emp => {
    let dept_info = departments.find((dept) => dept.eId === emp.eId);
    return { ...emp, dept: dept_info.dept}
}))


console.log("The final array is : ", final_arr);