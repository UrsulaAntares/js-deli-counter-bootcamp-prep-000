var katzDeliLine = ["Early Bird"]
function takeANumber(line, name) {
  var line = new Array();
  line.push(name)
  console.log(line)
  return line
}


takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent");
