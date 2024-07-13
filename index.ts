function sum(a: number, b: number): number {
    return a + b;
}

let arr: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 2, 3]
let arr3: [number, string, boolean] = [1, 'a', false];
let arr4: (number | string | boolean)[] = [1, 'a', false];

function returnval(arg: any): any {
    return arg;
}

// fonction générique qui peut prendre et retourner un type bizarre
function returnval2<T>(arg: T): T {
    return arg;
}
console.log(returnval(1))
console.log(returnval2<number>(1))
console.log(returnval2<string>("1"))
console.log(returnval2<boolean>(false))