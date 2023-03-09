export default class CALCULATOR {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.setX = (n) => { this.x = n; };
        this.setY = (n) => { this.y = n; };
        this.getX = () => this.x;
        this.getY = () => this.y;
        this.Add = () => this.x + this.y;
        this.Sub = () => this.x - this.y;
        this.Devide = () => this.x / this.y;
        this.Mul = () => this.x * this.y;
        this.Empty = (n) => {
            if (n != 0)
                return false;
            return true;
        };
        this.Percent = () => this.x / 100;
        this.Signing = () => this.x * -1;
    }
}
//# sourceMappingURL=Calculator.class.js.map