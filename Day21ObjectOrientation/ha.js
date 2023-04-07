class Job {
    constructor(name, industry, requiresDegree, field) {
        this.name = name;
        this.industry = industry;
        this.requiresDegree = requiresDegree;
        this.field = field;
    }
        getName ()  {
            return this.name;
        }
        getFieldAndIndustry () {
            return this.field + " "+ this.industry;
        }
}

class Workers extends Job {
    constructor(name, industry, requiresDegree, field, experience) {
        super(name, industry, requiresDegree, field); 
            this.experience = experience;
    }
        getAll () {
            return this.name + " "+ this.experience;
        }
}

const numOne = new Job('Lucky','wannabe','no', 'nothing');
const numTwo = new Job ('Joe', 'IT', 'No', 'Programmer');
const numThree = new Job('Jose', 'Medicine', 'Yes', 'Doctor')

const numOneWithExp = new Workers('Bob', 'Accounting', 'Yes','CPA', '20 years' );
const numTwoWithExp = new Workers('Hello Kitty', 'Fake', 'No', 'actress', '74 years')

console.log(numOne);
console.log(numTwo);
console.log(numThree);

console.log(numOne.getName());
console.log(numTwo.getName() + " "+ numTwo.getFieldAndIndustry());

console.log(numOneWithExp);
console.log(numTwoWithExp);
console.log(numTwoWithExp.getAll())