// Primitives: number, string, boolean
// arrays, objects
// Function types, parameters

//primitives

let age: number;    //declaring a variable

age = 12.5;         // we can assign even float

let age1: number = 15;

let userName: string;

userName = "Suresh";

let isStudent: boolean;

isStudent = true;

let names: string[];

names = ['suresh','sures','sure'];

let objVar: {name: string, rollno: number};

objVar = {name: 'suresh', rollno: 6716873};

let strVar = "This is a string";


//creating union type

let unionVariable: string | number ;

unionVariable = 15;
unionVariable = "suresh";

//creating type aliase

type Person = {
    name: string;
    rollno: number;
}

let people: Person;

//functions & types

function add(a: number, b: number){ //function type is auto inferred
    return a+b;
}

function prnt(value: any){ //takes any parameter and return type is inferred as void since the function is not returning anything
    console.log(value);
}


// generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];

const updatedArray = insertAtBeginning(demoArray, -1);

// classes

class Student {
    // firstName: string;
    // lastName: string;
    // rollno: number;
    // private courses: string[];

    constructor(public first: string, public last: string, public rollno: number, private courses: string[]){
        // this.firstName = first;
        // this.lastName =  last;
        // this.rollno = rollno;
        // this.courses = courses;
    }

    enrol(courseName: string){
        this.courses.push(courseName);
    }

    listCourses(){
        return this.courses.slice();
    }
}

const student = new Student('suresh','kesani',6716873,['Angular','spring']);
student.enrol('javascript');

// Interfaces

interface Human {
    firstName: string;
    age: number;

    greet: () => void;
}


let suresh: Human;

suresh = {
    firstName: 'Suresh',
    age: 31,
    greet() {
        console.log('Hello!');
    },
}

class Instructor implements Human {
    firstName: string;
    age: number;
    
    greet() {
        console.log("Hello...");
    }
}



