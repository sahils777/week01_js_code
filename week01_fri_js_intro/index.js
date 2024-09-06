console.log('Hello, Sahil!');
a=10
var a = 10


let b = 20
b = 100
b = "Hello"

//object literal
var student ={
    100: 'Hundreds',
    studentId: 1,
    studentName: "John",
    studentAge: 20,
    city: "New York"
}
console.log(student)
console.log(student.studentName)
console.log(student[100])
console.log(student["studentId"])
console.log(student.studentAge)
console.log(typeof student)

// for (let key in student) {
//    console.log(key)
//    console.log(student[key])
// }

for (let key in student){
    console.log(`${key} -> ${student}`)
}

var emp ={
    empId: 1,
    empName: "Sahil",
    empAge: 20,
    empCity: "New York"
}

//object destructuring
var {empId, empAge, empCity, empName} = emp
var result = "Pass"
console.log(empId)

var newEmp = {
    empId,
    empAge,
    empCity,
    empName,
    result
}

console.log(newEmp)

var emp1 = {
    ...emp,
    result
}
console.log(emp1)