enum Grade {
    A = "Excellent",
    B = "Good",
    C = "Average",
    F = "Fail"
  }
  
  type Student = {
    name: string;
    marks: number;
    grade: Grade;
  };
  
  function assignGrade(marks: number): Grade {
    if (marks >= 90) return Grade.A;
    else if (marks >= 75) return Grade.B;
    else if (marks >= 50) return Grade.C;
    else return Grade.F;
  }
  
  let student1: Student = {
    name: "Adhya",
    marks: 88,
    grade: assignGrade(88)
  };
  
  console.log(`${student1.name} got ${student1.grade}`);

  