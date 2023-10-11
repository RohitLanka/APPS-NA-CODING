//varibles in typescript
let firstName: string = "Rohit";
firstName = "lanka";
let option: boolean;
option=true;

//arrays in typescript
const names: string[] = [];
names.push("sai"); 

//tuples in typescript
let ourTuple: [number, boolean, string];
console.log(firstName);

//functions in typescipt
function getTime(): number {
    return new Date().getTime();
  }

  //functions with arguments in typescript
  function multiply(a: number, b: number) {
    return a * b;
  }

  //optional function with arguments in typescript 
  function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
  }

  //classes & methods in typescript
  class Person {

    private name: string;

    public constructor(name: string) {
        this.name = name;
      }
    public getName(): string {
        return this.name;
      }
  }
  
  const person = new Person("Rohit Lanka");
  console.log(person.getName());