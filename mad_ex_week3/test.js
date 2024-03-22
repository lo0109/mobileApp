// const arr = [5,3,2,1,0];
// arr.sort((a,b)=>-a+b);

// console.log(arr)

const students = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    GPA: 6.5,
    hobbies: ["coding", "chess"],
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    GPA: 5.4,
    hobbies: ["running", "swiming"],
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    GPA: 4.8,
    hobbies: ["coding", "swimming"],
  },
  {
    id: 4,
    name: "Dave",
    email: "dave@example.com",
    GPA: 5.2,
    hobbies: ["coding"],
  },
  {
    id: 5,
    name: "Bill",
    email: "bill@example.com",
    GPA: 5.2,
    hobbies: ["coding", "swimming"],
  },
  {
    id: 6,
    name: "Alex",
    email: "alex@example.com",
    GPA: 6.2,
    hobbies: ["coding", "reading"],
  },
];
// function aggregateStudentData(students) {
//   // Your implementation here
//   const studentNum = students.length;
//   const studentAvgGPA = studentNum > 0? students.map(a=>a.GPA).reduce( (a,b)=> a+b,0)/studentNum : 0;
//   const codingStudent = students.filter(student => (student.hobbies && student.hobbies.includes('coding')));
//   const codingStudentNum = codingStudent.length;
//   const codingStudentGPA = codingStudentNum>0? codingStudent.map(a=>a.GPA).reduce( (a,b)=> a+b,0)/codingStudentNum : 0;
//   return {studentNum:studentNum, studentAvgGPA:+studentAvgGPA.toFixed(2), codingStudent:codingStudentNum, codingStudentGPA:+codingStudentGPA.toFixed(2)}
// }

// console.log(aggregateStudentData(students))

//   const filteredStudents1 = students
//     .filter(student => student.hobby && student.hobby.includes('coding')) // Check if hobby exists before calling includes()
//     .map(({ name, email }) => ({ name, email })); // Map to get only name and email
// const filteredStudents2 = [];
// students.forEach(student => {
//   if (student.hobby && student.hobby.includes('coding')) {
//     filteredStudents2.push({ name: student.name, email: student.email });
//   }
// });
// console.log(filteredStudents1);
// console.log(filteredStudents2);
// console.log(filteredStudents1.length);
// console.log(filteredStudents2.length);
// const studentNum = students.reduce((a)=>a+1,0);
// const studentAvgGPA = studentNum > 0? students.reduce( (a,{GPA})=> a+GPA,0): 0;
// const codingStudent = students.filter(student => (student.hobbies && student.hobbies.includes('coding')));
// const codingStudentNum = codingStudent.reduce((a)=>a+1,0);
// const codingStudentGPA = codingStudent>0? codingStudent.reduce( (a,b)=>a+b.GPA,0) /codingStudentNum: 0;
// console.log ({studentNum:studentNum, studentAvgGPA:studentAvgGPA, codingStudent:codingStudent, codingStudentGPA:+codingStudentGPA.toFixed(2)}
// )

function swapForm(input) {
  // Your implementation here
  let output =''
  if (input.split(' ').length ==1) {
    const words = input.split(/(?=[A-Z])/);
    output = words.length == 1? words : words.map(s=>s.toLowerCase()).join(' ');
  }
  else {
    const words = input.split(' ');
    output = words[0]+(words.slice(1).forEach(element => element.charAt(0).toUpperCase())).join('');
  }
  // const words = input.length == 1 ? input.split(/(?=[A-Z])/).map(s => s.toLowerCase()): input.split(' ').map((c => c[0].toUpperCase()).join();
  return output
}

const wordlist = ["open a bank account","complete validation", "openABankAccount", "refundAnOrder", "word"]
console.log(wordlist[2].split(/(?=[A-Z])/).map(s=>s.toLowerCase()).join(' '))
// wordlist.forEach(element => console.log(swapForm(element)))
// console.log(wordlist[0] + wordlist.slice(1).map(s=>s.toLowerCase()).join(' '))
// console.log( wordlist.map(s=>s.toLowerCase()).join(' '))