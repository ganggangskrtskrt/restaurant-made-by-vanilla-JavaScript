import { contactFunction} from './contact.js';
import {menuFunction} from './menu.js';
export {content, headdivs, maindivs, mainHome, footer};
export {createContent, createFooter, menuFunction, changeButtonColor};
let content = document.getElementById("content");
let header = document.createElement("header");
let headdivs = [];
let maindivs =[];
content.appendChild(header);
const createNav = (headdivs) => {
    for(let i =0; i<3; i++)
{
header.appendChild(document.createElement("div"));
headdivs[i]=document.getElementsByTagName("div")[i+1];
//make focus in css works using tabindex
headdivs[i].tabIndex = "1";
}
headdivs[0].appendChild(document.createTextNode("Home"));
headdivs[1].appendChild(document.createTextNode("Menu"));
headdivs[2].appendChild(document.createTextNode("Contact"));
}
createNav(headdivs);
// create Content
const createContent = (maindivs) => {
    content.appendChild(document.createElement("main"));
    for(let i=0; i<4; i++)
    {
    document.getElementsByTagName("main")[0].appendChild(document.createElement("div"));
    maindivs[i]=document.getElementsByTagName("div")[i+4];
    }
    maindivs[2].appendChild(document.createElement("div"));
    maindivs[3].appendChild(document.createElement("div"));
}
createContent(maindivs);
let mainHome = document.getElementsByTagName("main")[0];
const createContent1 = (maindivs) => {
    document.getElementsByTagName("div")[7].className = "hours";
        document.getElementsByTagName("div")[7].appendChild(document.createTextNode("Hours"));
        document.getElementsByTagName("div")[9].className = "location";
        document.getElementsByTagName("div")[9].appendChild(document.createTextNode("Location"));
        maindivs[0].className = "title";
        maindivs[0].appendChild(document.createTextNode("Space Bar"));
        maindivs[1].appendChild(document.createTextNode("Welcome to the galaxy. This is the first restaurant on this space, we serve a lot of mouth-watering foods, y'all can use meals while enjoying breath-taking view"));
        maindivs[2].appendChild(document.createTextNode(" Sunday: 8am - 8pm\n Monday: 6am - 6pm\n Tuesday: 6am - 6pm\n Wednesday: 6am - 6pm\n Thursday: 6am - 10pm\n Friday: 6am - 10pm\n Saturday: 8am - 10pm"));
        //make \n works
        maindivs[2].style = "white-space: pre;"
        maindivs[3].appendChild(document.createTextNode("Jupiter - Solar system - Milkyway, The Sixth Galaxy"));
}
createContent1(maindivs);
const homeFunction = () =>{
    content.removeChild(document.getElementsByTagName("main")[0]);
    createContent(maindivs);
    createContent1(maindivs);
    content.removeChild(footer);
    createFooter(footer);
    changeButtonColor(headdivs);
}
// change button color based on the current tab
const changeButtonColor = (headdivs)=>{
    if (document.getElementsByClassName("title")[0].textContent === "Space Bar")
    {
        headdivs[0].style = "background-color: aliceblue; color: black;"
        headdivs[1].style = "background-color: black; color: aliceblue;"
        headdivs[2].style = "background-color: black; color: aliceblue;"
    }
    else if (document.getElementsByClassName("title")[0].textContent === "Menu")
    {
        headdivs[1].style = "background-color: aliceblue; color: black;"
        headdivs[0].style = "background-color: black; color: aliceblue;"
        headdivs[2].style = "background-color: black; color: aliceblue;"
    }
    else if (document.getElementsByClassName("title")[0].textContent === "Contact")
    {
        headdivs[2].style = "background-color: aliceblue; color: black;"
        headdivs[0].style = "background-color: black; color: aliceblue;"
        headdivs[1].style = "background-color: black; color: aliceblue;"
    }
}
changeButtonColor(headdivs);
headdivs[0].addEventListener('click', homeFunction);
headdivs[1].addEventListener("click", menuFunction);
headdivs[2].addEventListener("click", contactFunction);
// headdivs[0].addEventListener('click', changeButtonColor);
// headdivs[1].addEventListener("click", changeButtonColor);
// headdivs[2].addEventListener("click", changeButtonColor);
let footer = document.createElement("footer");
const createFooter = (footer) =>{
    content.appendChild(footer);
    if (footer.textContent.length === 0)
    {
        footer.appendChild(document.createTextNode("© copyright all rights reserved"));
    }
}
createFooter(footer);


