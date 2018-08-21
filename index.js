var katzDeliLine = [];

function takeANumber(lineOfPeople, newName) {
    lineOfPeople.push(newName);
    return "Welcome, " + newName + ". You are number " + lineOfPeople.length + " in line."

}

takeANumber(katzDeliLine, "Ada");
takeANumber(katzDeliLine, "Grace");
takeANumber(katzDeliLine, "Kent");

function nowServing(lineOfPeople) {
	if (lineOfPeople.length > 0) {
		return "Currently serving " + lineOfPeople.shift();
	} else {
		return "There is nobody waiting to be served!";
	}
}

function currentLine(lineOfPeople) {
	var lineDescription = "This line is currently:";
	for (var i = 0; i < lineOfPeople.length; i++) {
		var person = lineOfPeople[i];
		lineDescription = lineDescription + (i + 1) + ". " + person;
	}
	return lineDescription;

}
