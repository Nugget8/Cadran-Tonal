document.body.style.margin = "0px";

const keys0 = ["sib", "re#", "sol#", "do#", "fa#", "si", "mi", "la", "re", "sol", "do", "fa", "Reb", "Fa#", "Si", "Mi", "La", "Re", "Sol", "Do", "Fa", "Sib", "Mib", "Lab"];

const signatures0 = ["minor, 5b", "minor, 6#", "minor, 5#", "minor, 4#", "minor, 3#", "minor, 2#", "minor, 1#", "minor, 0#/b", "minor, 1b", "minor, 2b", "minor, 3b", "minor, 4b", "Major, 5b", "Major, 6#", "Major, 5#", "Major, 4#", "Major, 3#", "Major, 2#", "Major, 1#", "Major, 0#/b", "Major, 1b", "Major, 2b", "Major, 3b", "Major, 4b"];

const keys1 = ["la#", "mib", "lab", "Do#", "Solb", "Dob"];

const signatures1 = ["minor, 7#", "minor, 6b", "minor, 7b", "Major, 7#", "Major, 6b", "Major, 7b"];

const buttonWidth = "2.5rem";
const buttonHeight = "2.5rem";
const buttonBorderRadius = "1rem";

const bar = document.createElement("div");
bar.style.display = "flex";
bar.style.flexWrap = "nowrap";
bar.style.alignItems = "center";
bar.style.justifyContent = "space-around";
bar.style.width = "30rem";
bar.style.margin = "auto";
bar.style.marginBottom = "0.5rem";
document.body.appendChild(bar);

const map = document.createElement("div");
map.style.display = "block";
map.style.width = "30rem";
map.style.height = "30rem";
map.style.margin = "auto";
map.style.backgroundColor = "gray";
document.body.appendChild(map);

let signatures = signatures0.concat(signatures1);
signatures.sort(() => Math.random() - 0.5);

const requirement = document.createElement("div");
bar.appendChild(requirement);

const requirementT0 = document.createElement("div");
requirementT0.style.display = "inline";
requirementT0.textContent = "Alege: ";
requirement.appendChild(requirementT0);

let q = 0;
const requirementT1 = document.createElement("div");
requirementT1.style.display = "inline";
requirementT1.textContent = signatures[q];
requirement.appendChild(requirementT1);

/*const rights = document.createElement("div");
bar.appendChild(rights);

let r = 0;
const rightsN = document.createElement("div");
rightsN.style.display = "inline";
rightsN.style.color = "green";
rightsN.textContent = r;
rights.appendChild(rightsN);

const rightsT = document.createElement("div");
rightsT.style.display = "inline";
rightsT.textContent = " răspunsuri corecte";
rights.appendChild(rightsT);

const wrongs = document.createElement("div");
bar.appendChild(wrongs);

let w = 0;
const wrongsN = document.createElement("div");
wrongsN.style.display = "inline";
wrongsN.style.color = "red";
wrongsN.textContent = w;
wrongs.appendChild(wrongsN);

const wrongsT = document.createElement("div");
wrongsT.style.display = "inline";
wrongsT.textContent = " răspunsuri greșite";
wrongs.appendChild(wrongsT);*/


function createButton(x, y, id, array)
{
    const button = document.createElement("button");
    button.style.width = buttonWidth;
    button.style.height = buttonHeight;
    button.style.borderRadius = buttonBorderRadius;
    button.style.position = "absolute";
    button.style.transform = "translate(-50%, -50%)";
    button.style.marginLeft = x + "rem";
    button.style.marginTop = y + "rem";

    let signature;

    if (array == 0)
    {
        button.textContent = keys0[id];
        signature = signatures0[id];
    }
    else
    {
        button.textContent = keys1[id];
        signature = signatures1[id];
    }

    button.onclick = function()
    {
        if (signatures[q] == signature)
        {
            button.style.backgroundColor = "green";
            setTimeout(function(){button.style.backgroundColor = "white"}, 500);
            q = (q + 1) % signatures.length;
        }
        else
        {
            button.style.backgroundColor = "red";
            setTimeout(function(){button.style.backgroundColor = "white"}, 500);
        }

        requirementT1.textContent = signatures[q];
    }

    map.appendChild(button);
}

const radius = 6;
const width = 2.8;
const marginDifference = 1.4;
const numButtons = 12;

for (let i = 0; i < 2; i++)
{
    for (let j = -1; j < numButtons - 1; j++)
    {
        let r = radius + (i + 1) * width;
        let x = r * Math.sin(Math.PI * 2 * j / numButtons) + r + (30 - r * 2) / 2;
        let y = r * Math.cos(Math.PI * 2 * j / numButtons) + r + (30 - r * 2) / 2;
        createButton(x, y - marginDifference, i * numButtons + j + 1, 0);
    }
}

for (let i = 0; i < 2; i++)
{
    for (let j = -1; j < 2; j++)
    {
        let r = radius + i * width * 3;
        let x = r * Math.sin(Math.PI * 2 * j / numButtons) + r + (30 - r * 2) / 2;
        let y = r * Math.cos(Math.PI * 2 * j / numButtons) + r + (30 - r * 2) / 2;
        createButton(x, y - marginDifference, i * 3 + j + 1, 1);
    }
}
