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

katzDeliLine = ["tom", "dick", "harry"]

function currentLine(line) {
  var i = line.length;
  // var place = line.indexOf()
  var place

  var counter ="The line is currently: ";
  for (place = 0; place < i ; place++) {
    var name = line[place]
    console.log(place)
    counter = counter + (place+1) + ". " + name;
    console.log(counter)
    return counter
    }
    if (i==0) {
      console.log("The line is currently empty.")
      return "The line is currently empty."
  }

  // var counter = line.join(`, ` + line.indexOf(name) + ` `);
//   var counter = line.join(`, ` + line.indexOf(name) + ` `);
//   if (i>0) {
//   var wholeMessage = `The line is currently: 1. ${counter}`;
//   // console.log(wholeMessage)
//   // return wholeMessage
// } else {
//   return "The line is currently empty."
// }
}

currentLine(katzDeliLine)
