/*
Valid Time

Check if the given string is a correct time representation of the 24-hour clock
  
Example

For time = '13:58' the output should be validTime(time) = true
For time = '25:51' the output should be validTime(time) = false
For time = '02:76' the output should be validTime(time) = false
*/

function validTime(str) {
  const timeArr = str.split(":");
  return timeArr[0] < 24 && timeArr[1] < 60 ? true : false;
}
