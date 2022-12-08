// function testDecorator(flag: boolean) {
//   if (flag) {
//     return function (constructor: any) {
//       constructor.prototype.getName = () => {
//         console.log('dell');
//       };
//       console.log('decorator');
//     };
//   } else {
//     return function (constructor: any) {};
//   }
// }

// function testDecorator1(constructor: any) {
//   console.log('decorator1');
// }

// @testDecorator(true)
// @testDecorator1
// class Test {}

// const test = new Test();
// (test as any).getName();
