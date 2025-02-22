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