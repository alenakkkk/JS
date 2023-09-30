let a = Math.floor(Math.random() * 100);

switch (true) {
  case (a > 10):
    if ((a > 10 ? a : a * 2) > 5) {
      console.log((2 * a) + 1);
    } 
    else {
      if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
        console.log(5);
      } 
      else {
        if (a % 2 == 0) {
          console.log(6);
        } 
        else {
          console.log(7);
        }
      }
    }
    break;
  default:
    if ((a < 3 ? 1 : 2 * (a - 2)) > 4) {
      console.log(5);
    } 
    else {
      if (a % 2 == 0) {
        console.log(6);
      } else {
        console.log(7);
      }
    }
}