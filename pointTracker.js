// 2. create team area (team name, total points, buttons, remove points) on submit i.e., javascript,

// Create Team and relevant elements
function createTeam(){
    var pointValue = 0;
    var teamObject = document.createElement("h2");
    var teamPoints = document.createElement("h3");

    var redButton = document.createElement("button");
    var blueButton = document.createElement("button");
    var greenButton = document.createElement("button");
  
    redButton.innerText = "RED";
    blueButton.innerText = "BLUE";
    greenButton.innerText = "GREEN";

    redButton.addEventListener("click", function(e){
        e.preventDefault();
        increaseRed(this);
        alert(this.type);

        return false;
    });
    blueButton.addEventListener("click", increaseBlue);
    greenButton.addEventListener("click", increaseGreen);

    var listButtons = [redButton, blueButton, greenButton];
    listButtons.forEach(element => {
        element.type = "button";
    });

    
    teamPoints.value = pointValue;
    teamPoints.innerHTML = teamPoints.value;
    teamPoints.setAttribute("id", "points");


    var teamID = document.getElementById("teamName").value;
    teamObject.innerHTML = teamID;
    teamObject.appendChild(teamPoints);

    teamPoints.appendChild(greenButton);
    teamPoints.appendChild(blueButton);
    teamPoints.appendChild(redButton);



    document.body.appendChild(teamObject); // Makes team appear on-page

}

function increaseRed(e){
    alert(e.type);
    alert(e);
    alert(e.parentNode);
    alert(e.parentNode.value);
    var updatedPoints = e.parentNode.value + 3;
    e.parentNode.textContent = updatedPoints;
    // var x = this.parentNode
    // alert(x);
    // alert(this);
    
    // alert(this.parentNode.innerHTML);
    // alert(this.type);
    // var updatedPoints = this.parentNode.value += 3;
    // this.parentNode.innerText = updatedPoints;
    //alert(this.parentNode.value);
}

function increaseBlue(){
    this.pointValue += 2;
}

function increaseGreen(){
    this.pointValue += 1;
}