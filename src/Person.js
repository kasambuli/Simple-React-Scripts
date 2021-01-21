class Student {
    constructor(name) {
        this.name = name;
    }
    punchLine() {
        console.log(`Hit it ${this.name}`)
    }
}

class Track extends Student {
    constructor(name, module) {
        super(name);
        this.module = module;
    }
    punchLine() {
        console.log(`Hit it ${this.name} from ${this.module}`)
    }
}

const first = new Student("Beth");
const second = new Track("Harmon", "9th Grade");
const third = new Track("Jolene", "10th Grade")

third.punchLine();
third.punchLine = () => console.log("You have to be Strong!");
first.punchLine();
second.punchLine()
third.punchLine();