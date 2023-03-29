// Primitives: number, string, boolean
// arrays, objects
// Function types, parameters
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//primitives
var age; //declaring a variable
age = 12.5; // we can assign even float
var age1 = 15;
var userName;
userName = "Suresh";
var isStudent;
isStudent = true;
var names;
names = ['suresh', 'sures', 'sure'];
var objVar;
objVar = { name: 'suresh', rollno: 6716873 };
var strVar = "This is a string";
//creating union type
var unionVariable;
unionVariable = 15;
unionVariable = "suresh";
var people;
//functions & types
function add(a, b) {
    return a + b;
}
function prnt(value) {
    console.log(value);
}
// generics
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demoArray = [1, 2, 3];
var updatedArray = insertAtBeginning(demoArray, -1);
// classes
var Student = /** @class */ (function () {
    // firstName: string;
    // lastName: string;
    // rollno: number;
    // private courses: string[];
    function Student(first, last, rollno, courses) {
        this.first = first;
        this.last = last;
        this.rollno = rollno;
        this.courses = courses;
        // this.firstName = first;
        // this.lastName =  last;
        // this.rollno = rollno;
        // this.courses = courses;
    }
    Student.prototype.enrol = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourses = function () {
        return this.courses.slice();
    };
    return Student;
}());
var student = new Student('suresh', 'kesani', 6716873, ['Angular', 'spring']);
student.enrol('javascript');
var suresh;
suresh = {
    firstName: 'Suresh',
    age: 31,
    greet: function () {
        console.log('Hello!');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    Instructor.prototype.greet = function () {
        console.log("Hello...");
    };
    return Instructor;
}());
