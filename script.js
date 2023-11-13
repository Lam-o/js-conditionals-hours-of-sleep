var hoursOfSleep = Number(
  prompt("How many hours of sleep did you get last night ?(0-12)")
);

if (hoursOfSleep > 12) {
  console.log("Don`t lie, it`s not polite !!");
} else if (hoursOfSleep >= 8) {
  console.log("You`re a sleep boss !!");
} else if (hoursOfSleep >= 5) {
  console.log("Not bad, but try to get to bed a bit earlier ?");
} else {
  console.log("Wake UP, you`re asleep at the weel !!");
}
