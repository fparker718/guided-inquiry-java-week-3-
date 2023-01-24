class person1 {
    constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
    this.exercise = function () {
    console.log("Running is fun! - said no one ever")
    }
    this.fetchJob = function () {
    console.log(`${name} is a ${job}`)
    }
    }
    
    }
    class programmer1 extends person1 {
    constructor(name, job, age, languages, busy = true) {
    super(name, job, age,)
    this.languages = languages;
    this.busy = busy;
    }
    completeTask() {
    this.busy = false;
    }
    acceptNewtask() {
    this.busy = true;
    }
    offerNewtask() {
    if (this.busy === true) {
    console.log(`${this.name} can't accept any new tasks right now.`)
    } else {
    console.log(`${this.name} would love to take on a new responsibility`)
    
    }
    }
    learnLanguage() {
    for (let i = 0; i < arguments.length; i++) {
    this.languages.push(arguments[i]);
    }
    }
    listLanguages() {
    console.log(`${this.name} knows the following languages: ${this.languages.join(", ")}`)
    }
    }
    const techProgrammer1 = new programmer1('Iman', 'Apprentice', 23, ['Html', 'Css', 'Javascript', 'French', 'English']);
    const techProgrammer2 = new programmer1('Gaelle', 'Nurse', 24, ['Css', 'Javascript', 'Html', 'React'], false);
    techProgrammer1.offerNewtask(); // busy
    techProgrammer2.offerNewtask(); // not busy
    techProgrammer1.completeTask();
    techProgrammer2.completeTask();
    techProgrammer1.offerNewtask(); // show now accept a task
    techProgrammer2.offerNewtask(); // should be no change because they were already not busy
    techProgrammer1.listLanguages(); // should have no languages
    techProgrammer2.listLanguages(); // should have languages
    techProgrammer1.learnLanguage("Spanish", "French", "German");
    techProgrammer1.listLanguages();
    techProgrammer2.listLanguages();