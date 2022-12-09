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

