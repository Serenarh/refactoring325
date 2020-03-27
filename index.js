function checkDrivingAge(age) {
  if (age >= 16) {
    return "You are old enough to drive.";
  }

  return "Sorry, you are not old enough to drive.";
}
let driver = 15;
console.log(checkDrivingAge(driver));
