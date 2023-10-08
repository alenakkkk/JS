let a = Math.floor(Math.random() * 100);
let result;

if (a > 10) {
  result = a;
} else {
  result = a * 2;
}

if (result > 5) {
  console.log(2 * a + 1);
} else {
  let innerResult;

  if (a < 3) {
    innerResult = 1;
  } else {
    innerResult = 2 * (a - 2);
  }

  if (innerResult > 4) {
    console.log(5);
  } else {
    console.log(a % 2 === 0 ? 6 : 7);
  }
}
