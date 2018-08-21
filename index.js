var katzDeliLine = [];

function takeANumber(lineOfPeople, newName) {
    lineOfPeople.push(newName);
    return "Welcome, " + newName + ". You are number " + lineOfPeople.length + " in line."

}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  var customer = katzDeliLine.shift();
  return "Currently serving " + customer + ".";
}

function currentLine(lineOfPeople) {
	var lineDescription = "This line is currently:";
	for (var i = 0; i < lineOfPeople.length; i++) {
		var person = lineOfPeople[i];
		lineDescription = lineDescription + (i + 1) + ". " + person;
	}
	return lineDescription;

}
