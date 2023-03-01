interface Person{
    name: string;
}

interface PersonDetails{
    age: number;
    gender: string;

}
interface Employee extends PersonDetails, Person{
    salary: number;
}

let empcode = <Employee>{};
empcode.age = 78;
empcode.gender = "male";
empcode.salary = 100000

console.log(empcode.name);
console.log(empcode.age);
console.log(empcode.gender);
console.log(empcode.salary);
