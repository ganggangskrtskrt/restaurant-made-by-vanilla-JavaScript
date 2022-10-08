import {content, footer, createFooter, changeButtonColor, headdivs} from './index.js';
export {contactFunction, mainContact};
let maindivs = [];
const contactFunction = () => {
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
        for(let i=0; i<4; i++)
        {
        document.getElementsByTagName("main")[0].appendChild(document.createElement("div"));
        maindivs[i]=document.getElementsByTagName("div")[i+4];
        }
    }
}
let mainContact = document.getElementsByTagName("main");
const createContent2 = (maindivs) =>{
let h3 = [];
let p = [];
let img = [];
    for (let i=0; i<4; i++)
    {
        if (i !== 0)
        {
            maindivs[i].appendChild(document.createElement("h3"));
            maindivs[i].appendChild(document.createElement("p"));
            maindivs[i].appendChild(document.createElement("img"));
        }
    }
    for (let i=0; i<4; i++)
    {
        h3[i] = document.getElementsByTagName("h3")[i];
        p[i] = document.getElementsByTagName("p")[i];  
        img[i] = document.getElementsByTagName("img")[i];            
    }
    for (let i=1; i<3; i++)
    {
        maindivs[i].style = "white-space: pre;"
    }
maindivs[0].className = "title";
maindivs[0].appendChild(document.createTextNode("Contact"));
// Thor
h3[0].appendChild(document.createTextNode("Thor"));
p[0].appendChild(document.createTextNode("CEO\n036 966 6666\nsongocut02@gmail.com"));
img[0].src = "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/22/Thor_in_LoveAndThunder_Poster.jpg/revision/latest?cb=20220615195810";
// Songoku
h3[1].appendChild(document.createTextNode("Songoku"));
p[1].appendChild(document.createTextNode("Chef\n037 202 8668\nluyenmt@gmail.com"));
img[1].src = "https://demoda.vn/wp-content/uploads/2022/02/tai-anh-songoku-ban-nang-vo-cuc.jpg";
// Iron man
h3[2].appendChild(document.createTextNode("Iron man"));
p[2].appendChild(document.createTextNode("Waiter\n035 875 8888\nDolph@believer.com"));
img[2].src = "https://data.whicdn.com/images/322107495/original.jpg";
}; 