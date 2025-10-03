// ===========================
// TypeScript Employee Management System
// ===========================

// 1. Enum for Employee Roles
enum Role {
  Developer,
  Designer,
  Manager,
  Tester
}

// 2. Tuple for Employee ID and Name
type EmployeeID = [number, string]; // [ID, Name]

// 3. Object Type for Employee
type Employee = {
  id: EmployeeID;        // Tuple
  role: Role;            // Enum
  skills: string[];      // Array of skills
  experience?: number;   // Optional property in years
};

// 4. Array of Employees
let employees: Employee[] = [
  { id: [101, "Lekhaa"], role: Role.Developer, skills: ["TypeScript", "React"], experience: 2 },
  { id: [102, "Ravali"], role: Role.Designer, skills: ["Figma", "Photoshop"] },
  { id: [103, "Anshu"], role: Role.Manager, skills: ["Leadership", "Planning"], experience: 5 }
];

// 5. Function to Display Employees
function displayEmployees(empList: Employee[]) {
  empList.forEach(emp => {
    const [empId, empName] = emp.id; // Destructure tuple
    console.log(`ID: ${empId}, Name: ${empName}`);
    console.log(`Role: ${Role[emp.role]}`);
    console.log(`Skills: ${emp.skills.join(", ")}`);
    console.log(`Experience: ${emp.experience ?? "Not specified"} years`);
    console.log("----------");
  });
}

// 6. Function to Add a New Employee
function addEmployee(emp: Employee) {
  employees.push(emp);
  console.log(`Employee ${emp.id[1]} added successfully!`);
}

// 7. Function to Update Skills of an Employee
function addSkill(empId: number, skill: string) {
  const emp = employees.find(e => e.id[0] === empId);
  if (emp) {
    emp.skills.push(skill);
    console.log(`Skill "${skill}" added to ${emp.id[1]}`);
  } else {
    console.log(`Employee with ID ${empId} not found`);
  }
}

// 8. Display Current Employees
console.log("=== Current Employees ===");
displayEmployees(employees);

// 9. Add a New Employee
const newEmployee: Employee = {
  id: [104, "Vennela"],
  role: Role.Tester,
  skills: ["Manual Testing", "Automation"]
};
addEmployee(newEmployee);

// 10. Update Skills
addSkill(101, "Node.js");
addSkill(104, "Selenium");

// 11. Display Updated Employees
console.log("=== Updated Employees ===");
displayEmployees(employees);
