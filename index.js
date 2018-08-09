 var katzDeliLine = []

function takeANumber(line, name) {
  // var line = new Array();
  // var line = []
  var i = line.length;
  var welcome = `Welcome, ${name}. You are number ${i+1} in line.`
  line.push(name)
  console.log(line)
  console.log(welcome)
  return welcome
}


takeANumber(katzDeliLine, "Ada"); // "Welcome, Ada. You are number 1 in line."
takeANumber(katzDeliLine, "Grace"); // "Welcome, Grace. You are number 2 in line."
takeANumber(katzDeliLine, "Kent");

function nowServing(line) {
  var i = line.length;
  var firstPerson = line.shift();
  if (i==0) {
    var message = `There is nobody waiting to be served!`
    console.log(message)
    return message
  } else {
    var happyMessage = `Currently serving ${firstPerson}.`
    return happyMessage
  }
//  return line[0]
  // console.log(line[0]);
  console.log(firstPerson);
  //return line
}


nowServing(katzDeliLine)
nowServing(katzDeliLine)
nowServing(katzDeliLine)
nowServing(katzDeliLine)

function currentLine(line) {
  var i = line.length;
  return line.toString(`, ${i}: `)
}
