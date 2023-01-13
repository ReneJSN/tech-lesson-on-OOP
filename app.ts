//Encapsulation

// Encapsulation is the practice of grouping related properties and method and defining who has access to said members 
// through the use of modifiers 

//   Private modifiers - can ONLY be accessed by methods or properties of the same class. 
//   Protected modifies - can be accessed by methods or properties of the same class AND its subclasses. 
//   Public modifiers - can be accessed by any code.

// This practice helps reduce complexity and increase re-usability across the entire application. 
// This pillar allows us to create both private and public properties or methods.


// class race {
//     private _level: number;
//     private _skill: string;
//     public _shout: string;

//     contructor (level: number, skill: string, shout: string) {
//         this._level = level
//         this._skill = skill
//         this._shout = shout
//     }

//     public setLevel(level:number) {
//         this._level = level
//     }

//     public getShout():string {
//         return this._shout
//     }

//     public setSkill(skill:string) {
//         this._skill = skill
//     }
// }


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



// Abstraction & Inheretance 

/** 

Abstraction in object-oriented programming is the process of hiding the implementation details of a class and showing only the necessary information to the users of that class. 
It allows the user to interact with the class without needing to know how it works internally. 
This is achieved through the use of interfaces, abstract classes and encapsulation. 
The main advantage of abstraction is that it promotes code reusability and makes it easier to maintain and update the code. 
Abstract classes are meant to be sub classes. These types of classes define properties and methods but leave the implementation up to its sub classes.

**/

// abstract class shout {
//     constructor (protected shout:string) {
        
//     }
//     abstract getShout():string
// }

// class race extends shout {
//     private _level: number;
//     private _skill: string;


//     constructor(level: number, skill: string, shout: string) {
//         super(shout)
//         this._level = level
//         this._skill = skill
        
//     }

//     public setLevel(level:number) {
//         this._level = level
//     }

//     public getShout():string {
//         return this.shout
//     }

//     public setSkill(skill:string) {
//         this._skill = skill
//     }
// }

//In this example the race class is inhereting a method and property from the abstract shout class. 
// we can observe inheretance specifically through the use of the "extend" key word and the "super()" function.


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// Polymorphism 

/* 

Polymorphism allows for the use of a single function or method to operate on multiple types of objects, even if those objects are of different classes. 
It allows for the creation of a single interface that can be implemented by multiple classes, and for objects of different classes to be used interchangeably.

 */

// abstract class shout {
//     constructor (protected shout:string) {
        
//     }
//     abstract getShout():string
// }

// class race extends shout {
//     private _level: number;
//     private _skill: string;


//     constructor(level: number, skill: string, shout: string) {
//         super(shout)
//         this._level = level
//         this._skill = skill
        
//     }
    
//     // in the two lines below we are defining the setLevel method and we are allowing it to pass either a number or a string
//     // however we are not definig its implementation.
//     public setLevel(level:number):void;
//     public setLevel(level:string):void;
    
//     // In the code below we are definig the implementation of the setLevel function meaning we are definig what happens when you call the function setLevel
//     // In this case we run an if statement that first checks the data types and setLevel depending on what type it is.
//     public setLevel(level:number | string):void {
//         if(typeof level === "number") {
//             this._level = level
//         }else{
//             this._level = Number(level)
//         }
//     }

//     public getShout():string {
//         return this.shout
//     }

//     public setSkill(skill:string) {
//         this._skill = skill
//     }
// }

