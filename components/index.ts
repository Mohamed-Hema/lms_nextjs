let channel: string = "Simple Arab Code";
let isSuccess: boolean = true;
let id: number = 5;
let x: any = 5;
x = "hema";

let ids: number[] = [1, 2, 3, 4];
let strArr: string[] = ["ahmed", "hema", "mohamed"];
let arrMix: any[] = [1, "hema", true];

let person: [number, string, boolean] = [1, "ahmed", true];

let employee: [number, string][] = [
  [1, "ahmed"],
  [2, "mohamed"],
  [3, "ali"],
];

let pId: number | string | boolean = 5;

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let uId: any = 5;
let userId = uId as number;

function sum(x: number, y: number) {
  return x + y;
}

sum(3, 4);
console.log(sum);

function sayHello(name: string): string {
  return `Hello ${name}`;
}

sayHello("hema");
function log(message: string): void {
  console.log(message);
}
log("This is a message");
