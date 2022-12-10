//Challenge 1: Age in days

function ageInDays(){
    var birthyear = prompt("Enter your birth year");
    var age_in_days = (2022 - birthyear)*365;    
    var textAnswer = document.createTextNode("You are "+age_in_days+" days old");
    var h1 = document.createElement("h1");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);

}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat()
{
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src", "https://edgecats.net/?"+"hash="+performance.now());

    document.getElementById("catcontainer").appendChild(imgtag);
}

function removeCat()
{
    var element = document.getElementById("catcontainer");
    var count = element.childElementCount;
    if(count > 0)
        element.removeChild(element.lastChild);
}

function generateRockPaperScissors()
{
    let x = Math.floor(Math.random()*3.0);
    return['rock','paper','scissors'][x];
}


const rpsGameChoices = {
    rock: {scissors:1, rock:0, paper:-1}, 
    paper:{rock:1, paper:0, scissors:-1},
    scissors:{paper:1, scissors:0, rock:-1}
};

function runRPSGame(userpick)
{   
    console.log(userpick.id);
    var botChoice = generateRockPaperScissors();
    var userChoice = userpick.id;
    console.log(botChoice);

    var winner = rpsGameChoices[userChoice][botChoice];
    var message = getMessage(winner, userChoice, botChoice);

    console.log(winner); 
    console.log(message);

    displayGameState(userChoice,botChoice,message);


}
function displayGameState(userChoice, botChoice, message)
{
    var rockImg = document.getElementById("rock");
    var paperImg = document.getElementById("paper");
    var scissorsImg = document.getElementById("scissors");

    var images = {
        rock: rockImg.src,
        paper: paperImg.src,
        scissors: scissorsImg.src
    };

    rockImg.remove();
    paperImg.remove();
    scissorsImg.remove();

    var container = document.getElementById("rpsgamecontainer");

    var imgElementUser = document.createElement("img")
    imgElementUser.src = images[userChoice];
    imgElementUser.width=rockImg.width;
    imgElementUser.height=rockImg.height;
    imgElementUser.onclick = function(){resetContainer(rockImg,paperImg,scissorsImg)};
    imgElementUser.style="box-shadow:0px 10px 50px rgba(0,0,255,50)";
    
    container.appendChild(imgElementUser);

    var botElementUser = document.createElement("img")
    botElementUser.src = images[botChoice];
    botElementUser.width=rockImg.width;
    botElementUser.height=rockImg.height;
    botElementUser.onclick = function(){resetContainer(rockImg,paperImg,scissorsImg)};

    botElementUser.style="box-shadow:0px 10px 50px rgba(255,0,0,50)";

    var textDiv = document.createElement("textDiv");

    var text = document.createElement("h2");
    text.style.color= message.color;
    text.innerText = message.message;

    textDiv.appendChild(text);

    container.appendChild(textDiv);
    container.appendChild(botElementUser);

}

function resetContainer(rockImg,paperImg,scissorsImg)
{
    console.log("Resetting Container");
    container = document.getElementById("rpsgamecontainer");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    container.appendChild(rockImg);
    container.appendChild(paperImg);
    container.appendChild(scissorsImg);
}

function getMessage(winner, userChoice, botChoice)
{
    var message = {message: null, color: null};

    if(winner == 1)
    {   message["message"] = "You Won! "+userChoice+" beats "+botChoice;
        message['color'] = "green";
    }
    else if(winner == -1)
    {   message["message"] = "You Lost! "+userChoice+" lost to "+botChoice;
        message['color'] = "red";
    }
    else
    {
        message["message"] = "Draw! "+"both picked "+userChoice;
        message['color'] = "blue";
    }
    return message;
} 
