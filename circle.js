class Circle {
    
    constructor(radius) {
      this.radius = radius;
    }
  
    getRadius() {
      return this.radius;
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    getDiameter() {
      return this.radius * 2;
    }
  
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  }
  
  
  const myCircle = new Circle(5);
  
 
  console.log("Radius:", myCircle.getRadius());
  console.log("Diameter:", myCircle.getDiameter());
  console.log("Circumference:", myCircle.getCircumference());
  console.log("Area:", myCircle.getArea());
  

  myCircle.setRadius(7);
  console.log("Updated Radius:", myCircle.getRadius());
  