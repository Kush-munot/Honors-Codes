interface Person{
    fname: string,
    lname: string,
    age: number,
    getFullName() : string;
    getAge() : number;
}

class Student implements Person {
    fname: string;
    lname: string;
    age: number;

    constructor(fname: string, lname: string, age: number) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    getFullName() {
        return `${this.fname} ${this.lname}`;
    }
    getAge() {
        return this.age;
    }
}

let student = new Student("Kush", "Munot", 22);
console(student.getFullName())