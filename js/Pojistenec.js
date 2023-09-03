'use strict'

class Pojistenec {
    constructor(name, surname, age, phone) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.phone = phone;
      
    }
  
    toString() {
      return `${this.name} ${this.surname}`;
    }

    toStringAge(){
      return this.age;
    }

    toStringPhone(){
      return this.phone
    }
  }
