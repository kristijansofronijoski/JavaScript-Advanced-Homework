class Shape{
    constructor(name, color, position){
        this.name = name;
        this.color = color;
        this.position = position;
    }

    set name(nameInput){
        !nameInput ? "no name" : this._name = nameInput;
    }

    get name(){
        console.log("we are getting the name...");
        return this._name;
    }

    set color(colorInput){
        !colorInput ? "no color" : this._color = colorInput;
    }

    get color(){
        console.log("we are getting the color...");
        return this._color;
    }

    getArea(){
        console.log("getArea has no concrete implementation");
    }

    getPerimeter(){
        console.log("getPerimeter has no concrete implementation");
    }

    checkPosition(shape) {
        if (shape instanceof Shape) { //checks if the object is an instance of a class
            //the most specific check (if condition) should alway go first (be on top)
            if (shape.position[0] > this.position[0] && shape.position[1] > this.position[1]) {
                console.log(`Shape ${shape.name} has both x and y coordinates in front of this object`);
                return;
            }
            if (shape.position[0] > this.position[0]) {
                console.log(`Shape ${shape.name} x coordinate is in front of this x coordinate`);
                return;
            }

            if (shape.position[1] > this.position[1]) {
                console.log(`Shape ${shape.name} y coordinate is in front of this y coordinate`);
                return;
            }

            console.log(`This has both x and y coordinates in front of ${shape.name} object`);
        } else {
            console.log("The input is not a Shape");
        }
    }

    static move(shape) {
        if (shape instanceof Shape) {
            console.log("Moving...");
            shape.position[0] += 5;
            shape.position[1] += 5;
        } else {
            console.log("The input is not a Shape");
        }
    }
}

let shape1 = new Shape("shape1", "red", [5,6]);
let shape2 = new Shape("shape2", "blue", [2,3]);
shape1.getArea();

shape1.checkPosition(shape2);//shape1 is this (the object we are working with) and shape2 is shape ( the object that we sent) 

class Rectangle extends Shape{
    constructor(name, color, position, sideA, sideB){
        super(name, color, position); //calls the parent constructotr
       //specific properties of rectangle
        this.sideA = sideA;
        this.sideB = sideB;
    }

    //override the methods with concrete implementation
    getArea(){
       return this.sideA * this.sideB;
    }

    getPerimeter(){
        return 2*this.sideA + 2*this.sideB;
    }
}

let rectangle = new Rectangle("rectangle", "blue", [2,3], 3, 5);
console.log(rectangle);
console.log(rectangle.getArea());

const pi = 3.14; //we are using const because we cannot change the value of pi
class Circle extends Shape{
    constructor(name, color, position, radius){
        super(name, color, position);
        this.radius = radius;
       // this.pi = 3.14;
    }
    //override the methods with concrete implementation
    getArea(){
        return this.radius * this.radius * pi;
    }

    getPerimeter(){
        return 2 * this.radius * pi;
    }
}

let circle = new Circle("circle", "red", [4,5], 5);
console.log(circle);
console.log(circle.getArea());