export default class CALCULATOR {
    private x: number = 0;
    private y: number =0;

    // GETTERS AND SETTERS
    setX = (n:number):void => {this.x = n;}
    setY = (n:number):void => {this.y = n;}
    getX = ():number => this.x;
    getY = ():number => this.y;

    //OPERATIONS
    Add = ():number =>  this.x+this.y;
    Sub = ():number =>  this.x-this.y;
    Devide = ():number =>  this.x/this.y;
    Mul = ():number =>  this.x*this.y;
    Empty = (n:number):boolean => { 
        if(n != 0) return false;
        return true
     }
    Percent = ():number => this.x / 100
    Signing = ():number => this.x * -1
}
