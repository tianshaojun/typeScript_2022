// function add(first: number, second: number): number {
//   return first + second;
// }

// const total = add(1,2);

// function sayHello(): void {
//   console.log('hello');
// }

// function errorEmitter(): never {
//   while(true) {}
// }

function add(
  { first, second }: { first: number, second: number}
): number {
  return first + second;
}
const total = add({ first: 1, second: 2});

function getNumber({ first } : {first: number}) {
  return first;
}
const count = getNumber({ first: 1});

