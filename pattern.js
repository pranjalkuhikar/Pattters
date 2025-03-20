let n = 5;

// Question: Print a right-angled triangle pattern of stars.
// Output:
// *
// **
// ***
// ****
// *****
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print an inverted right-angled triangle pattern of stars.
// Output:
// *****
// ****
// ***
// **
// *
// for (let i = 0; i < n; i++) {
//   for (let j = n; j > i; j--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print a right-aligned triangle pattern of stars.
// Output:
//     *
//    **
//   ***
//  ****
// *****
// for (let i = 0; i < n; i++) {
//   for (let j = n - 1; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print an inverted right-aligned triangle pattern of stars.
// Output:
// *****
//  ****
//   ***
//    **
//     *
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = n; k > i; k--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print a pyramid pattern of stars.
// Output:
//     *
//    **
//   ***
//  ****
// *****
//  ****
//   ***
//    **
//     *
// for (let i = 0; i < n; i++) {
//   for (let j = n - 1; j >= i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k < i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = n; k > i; k--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print a pyramid pattern of stars.
// Output:
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = n - 1; j > i; j--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print a centered pyramid pattern with spaces and stars.
// Output:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
// for (let i = 0; i < n; i++) {
//   for (let j = n; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Question: Print an inverted centered pyramid pattern with spaces and stars.
// Output:
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = n; k > i; k--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Question: Print a diamond pattern of stars.
// Output:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *
// for (let i = 0; i < n; i++) {
//   for (let j = n; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k < i; k++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = n; k > i; k--) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }

// Question: Print a centered pyramid pattern with spaces and stars.
// Output:
//     *
//    ***
//   *****
//  *******
// *********
// for (let i = 0; i < n; i++) {
//   for (let j = n - 1; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= 2 * i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print an inverted centered pyramid pattern with spaces and stars.
// Output:
// *********
//  *******
//   *****
//    ***
//     *
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = 2 * n - 1; k > 2 * i; k--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

// Question: Print a diamond pattern of stars.
// Output:
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
// for (let i = 0; i < n; i++) {
//   for (let j = n - 1; j > i; j--) {
//     process.stdout.write(" ");
//   }
//   for (let k = 0; k <= 2 * i; k++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j <= i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let k = n; k >= 2 * i - 1; k--) {
//     process.stdout.write("*");
//   }
//   console.log();
// }

for (let i = 0; i < n; i++) {}
