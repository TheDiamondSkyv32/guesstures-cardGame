// 2. create team area (team name, total points, buttons, remove points) on submit i.e., javascript,

// Create Team and relevant elements
function createTeam(){
    var teamObject = document.createElement("h2");
    var teamPoints = document.createElement("h3");

    teamObject.setAttribute("class", "grid");
    teamPoints.setAttribute("class", "grid");

    var redButton = document.createElement("button");
    var blueButton = document.createElement("button");
    var greenButton = document.createElement("button");
  
    redButton.setAttribute("id", "redButton");
    blueButton.setAttribute("id", "blueButton");
    greenButton.setAttribute("id", "greenButton");
    
    redButton.innerText = "RED";
    blueButton.innerText = "BLUE";
    greenButton.innerText = "GREEN";

    redButton.addEventListener("click", increaseRed);
    blueButton.addEventListener("click", increaseBlue);
    greenButton.addEventListener("click", increaseGreen);

    var listButtons = [greenButton, blueButton, redButton];
    listButtons.forEach(element => {
        element.type = "button";
        element.setAttribute("class", "buttons");
    });

    teamPoints.value = 0;
    teamPoints.innerHTML = teamPoints.value;

    var teamID = document.getElementById("teamName").value;
    teamObject.innerHTML = teamID;
    teamObject.appendChild(teamPoints);
    teamPoints.appendChild(greenButton);
    teamPoints.appendChild(blueButton);
    teamPoints.appendChild(redButton);

    document.body.appendChild(teamObject); // Makes team appear on-page

}


// increase team points by three
function increaseRed(){

    this.parentNode.value += 3;
    var newPoints = this.parentNode.value;
    var oldPointNode = this.parentNode;
    var pointUpdate = oldPointNode.childNodes[0];
    pointUpdate.nodeValue = newPoints;
}

// increase team points by two
function increaseBlue(){
    this.parentNode.value += 2;
    var newPoints = this.parentNode.value;
    var oldPointNode = this.parentNode;
    var pointUpdate = oldPointNode.childNodes[0];
    pointUpdate.nodeValue = newPoints;
}

// increase team points by one
function increaseGreen(){
    this.parentNode.value += 1;
    var newPoints = this.parentNode.value;
    var oldPointNode = this.parentNode;
    var pointUpdate = oldPointNode.childNodes[0];
    pointUpdate.nodeValue = newPoints;
}