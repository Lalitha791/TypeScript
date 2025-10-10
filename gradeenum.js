var Grade;
(function (Grade) {
    Grade["A"] = "Excellent";
    Grade["B"] = "Good";
    Grade["C"] = "Average";
    Grade["F"] = "Fail";
})(Grade || (Grade = {}));
function assignGrade(marks) {
    if (marks >= 90)
        return Grade.A;
    else if (marks >= 75)
        return Grade.B;
    else if (marks >= 50)
        return Grade.C;
    else
        return Grade.F;
}
var student1 = {
    name: "Adhya",
    marks: 88,
    grade: assignGrade(88)
};
console.log("".concat(student1.name, " got ").concat(student1.grade));
