class Person {
   
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
 
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  

    setEmail(newEmail) {
      this.email = newEmail;
    }
  }

  const johnDoe = new Person("John", "Doe", 30, "john.doe@example.com");
  

  console.log("Full Name:", johnDoe.getFullName());
  console.log("Age:", johnDoe.getAge());
  console.log("Email:", johnDoe.getEmail());
  
  johnDoe.setEmail("john.doe.updated@example.com");
  console.log("Updated Email:", johnDoe.getEmail());
  