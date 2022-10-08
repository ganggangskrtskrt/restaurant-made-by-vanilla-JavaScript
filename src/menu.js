import {content, mainHome, footer, createFooter, changeButtonColor, headdivs} from './index.js';
export {menuFunction, mainMenu};
let maindivs = [];
const menuFunction = () => {
    content.removeChild(document.getElementsByTagName("main")[0]);
    createContent(maindivs);
    createContent2(maindivs);
    content.removeChild(footer);
    createFooter(footer);
    changeButtonColor(headdivs);
}
const createContent = (maindivs) =>{
    {
        content.appendChild(document.createElement("main"));
        for(let i=0; i<10; i++)
        {
        document.getElementsByTagName("main")[0].appendChild(document.createElement("div"));
        maindivs[i]=document.getElementsByTagName("div")[i+4];
        }
    }
}

let mainMenu = document.getElementsByTagName("main")[0];

const createContent2 = (maindivs) =>{
let h3 = [];
let h4 = [];
let p = [];
let img = [];
    for (let i=0; i<10; i++)
    {
        if (i !== 0 && i !==1 && i!==4 && i!==7)
        {
            maindivs[i].appendChild(document.createElement("h3"));
            maindivs[i].appendChild(document.createElement("p"));
            maindivs[i].appendChild(document.createElement("h4"));
            maindivs[i].appendChild(document.createElement("img"));
        }
    }
    for (let i=0; i<6; i++)
    {
        h3[i] = document.getElementsByTagName("h3")[i];
        p[i] = document.getElementsByTagName("p")[i];
        h4[i] = document.getElementsByTagName("h4")[i];  
        img[i] = document.getElementsByTagName("img")[i];            
    }
maindivs[0].className = "title";
maindivs[0].appendChild(document.createTextNode("Menu"));
maindivs[1].appendChild(document.createTextNode("Beverages"));
maindivs[4].appendChild(document.createTextNode("Main Courses"));
maindivs[7].appendChild(document.createTextNode("Desserts"));
// cocacola
h3[0].appendChild(document.createTextNode("Cocacola"));
p[0].appendChild(document.createTextNode("Cocacola is the best softdrink in the world, and of course we serve it for you"));
h4[0].appendChild(document.createTextNode("$2"));
img[0].src = "https://64.media.tumblr.com/f8f9342ffccbf8889388e5c65248ff40/tumblr_pzofx95YUM1ys7o03o1_1280.jpg";
// beer
h3[1].appendChild(document.createTextNode("Beer"));
p[1].appendChild(document.createTextNode("Let's drink some beer and enjoy the space - The best experiment in a life"));
h4[1].appendChild(document.createTextNode("$4"));
img[1].src = "https://m.media-amazon.com/images/I/81zm9tKLsxL._AC_SL1170_.jpg";
// rice
h3[2].appendChild(document.createTextNode("Rice"));
p[2].appendChild(document.createTextNode("We serve the best rice in space, with the most reasonable price"));
h4[2].appendChild(document.createTextNode("$10"));
img[2].src = "https://food-contact-surfaces.com/wp-content/uploads/2019/07/rockets_and_meals.jpg";
//hamburger
h3[3].appendChild(document.createTextNode("Hamburger"));
p[3].appendChild(document.createTextNode("Zinger from KFC can fit the landscape really well, you must try it!"));
h4[3].appendChild(document.createTextNode("$15"));
img[3].src = "https://cdn.geekwire.com/wp-content/uploads/2017/06/170629-zinger.jpg";
//space cake
h3[4].appendChild(document.createTextNode("Space cookies"));
p[4].appendChild(document.createTextNode("Cookies made from the space, and the favour is really delicious"));
h4[4].appendChild(document.createTextNode("$6/ piece"));
img[4].src = "https://i.dailymail.co.uk/i/pix/2016/06/26/04/35ACDF9C00000578-3660323-French_macaroons_have_also_gotten_the_space_makeover_with_one_In-a-41_1466912253665.jpg";
//
h3[5].appendChild(document.createTextNode("Tiny Jupiter"));
p[5].appendChild(document.createTextNode("The most strange dessert in the world, let's take a look and try it"));
h4[5].appendChild(document.createTextNode("$10/ planet"));
img[5].src = "https://i1.wp.com/blog.potterybarn.com/wp-content/uploads/2013/09/PlanetaryCakes21.jpg?fit=618%2C309&ssl=1";
} 

