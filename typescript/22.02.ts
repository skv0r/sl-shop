let a: number = 4;
let b = "5";
let c = true;

let d: string[] = ["2", "1"];

let e: any = 3;

function returnNumber(a: number): number | string {
    return a;
}

const leaa = (a: number): number => {return 1};

d = d.map((x: string) => x.toLocaleLowerCase());

function countCoord(coord: {lat: number, long?: number}): void {
    return;
}

function printIt(id: number | string) {
    if (typeof id === 'number') {
        console.log(id.toString);
    }
    if (typeof id === 'string') {
        console.log(id.length)
    }
}

function getSum(a: number | number[]): number {
    if (Array.isArray(a)) {
        return 5;
    } else {return 10}
}

const x: undefined = undefined;
const z: null = null;

type Point = {
    x: number,
    y: number
};

interface IPoint {
    x: number,
    y: number
};



type stringOrNumber = string | number;

function printCoords( coord: IPoint) {

};  

interface I3DPoint extends IPoint {
    z: number;
}

type D3Point = Point & {
    z: number;
};

interface ITest {
    a: number;
}

interface ITest {
    b: number;
}

const cc = (point: IPoint) => {
    const d: I3DPoint = point as I3DPoint;
} 

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;

let ccc: 'test' = 'test'; //literally type

type actionType = 'up' | 'down';

interface IComplexAction {
    s: string;
}

function performAction(action: actionType | IComplexAction): actionType | 1  {
    switch (action) {
        case "up":
            return 1
        case "down":
            return "down";
        default:
            return "up";
    }
}

enum Direction {
    Up = 1,
    Down, //2
    Left, //3
    Right //4
}

enum Decision {
    Yes = 1,
    No = calcEnum()
}

function calcEnum() {
    return 2
}

function runEnum(obj: {Up: string}) {

}

enum Test {
    A
}

let testing = Test.A;
let nameA = Test[testing] //A 

const enum ConstEnum {
    A,
    B,
}

let cccc = ConstEnum.A;

enum Dice {
    One = 1,
    Two,
    Three
}

function ruDice (dice: Dice) {
    switch( dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        case Dice.Three:
            return 'три'
        default:
            const evernever:never = dice;
    }
}

const aa: [number, string, number ] = [0, "a", 1]; //кортеж


const [c1, d1, f1] = aa;

const [ccccc, ...rest] = aa; //деструктизация

//generics

function logTime<T>(num: T): T {
    console.log(new Date());
    return num;
}

function logTime2<T>(num: T): T {
    if (typeof num == 'string') {
        num.toLocaleLowerCase();
    }
    return num;
}

logTime<number>(1)

interface MyInterface {
    transform: <T, F>(a: T) => F;
}

class MyGenClass<T> {
    constructor(value: T) {
        this.value = value;
    }

    value: T
    
}

const anm = new MyGenClass<number>(1);


interface ITimeStamp {
    stamp: number;
}

function logTimeStamp<T extends ITimeStamp>(num: T): T {
    console.log(num.stamp)
    return num;
}



