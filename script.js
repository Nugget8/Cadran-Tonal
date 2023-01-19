document.body.style.margin = "0px";

const keys0 = ["Reb", "sib", "Solb", "mib", "Dob", "lab", "Mi", "do#", "La", "fa#", "Re", "si", "Sol", "mi", "Do", "la", "Fa", "re", "Sib", "sol", "Mib", "do", "Lab", "fa"];

const signatures0 = ["Major, 5b", "minor, 5b", "Major, 6b", "minor, 6b", "Major, 7b", "minor, 7b", "Major, 4#", "minor, 4#", "Major, 3#", "minor, 3#", "Major, 2#", "minor, 2#", "Major, 1#", "minor, 1#", "Major, 0", "minor, 0", "Major, 1b", "minor, 1b", "Major, 2b", "minor, 2b", "Major, 3b", "minor, 3b", "Major, 4b", "minor, 4b"];

const keys1 = ["Do#", "la#", "Fa#", "re#", "Si", "sol#"];

const signatures1 = ["Major, 7#", "minor, 7#", "Major, 6#", "minor, 6#", "Major, 5#", "minor, 5#"];

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

const rights = document.createElement("div");
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
wrongs.appendChild(wrongsT);


function createButton(parent, id, array)
{
    const button = document.createElement("button");
    button.style.width = buttonWidth;
    button.style.height = buttonHeight;
    button.style.borderRadius = buttonBorderRadius;

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
            r++;
            rightsN.textContent = r;

            if (r == 1)
            {
                rightsT.textContent = " răspuns corect";
            }
            else
            {
                rightsT.textContent = " răspunsuri corecte";
            }
        }
        else
        {
            w++;
            wrongsN.textContent = w;

            if (w == 1)
            {
                wrongsT.textContent = " răspuns greșit";
            }
            else
            {
                wrongsT.textContent = " răspunsuri greșite";
            }
        }

        q++;
        requirementT1.textContent = signatures[q];
    }

    parent.appendChild(button);
}

const radius = 11;
const numButtons = 12;

for (let i = -1; i < numButtons - 1; i++)
{
    let x = radius * Math.sin(Math.PI * 2 * i / numButtons) + radius + (30 - radius * 2) / 2;
    let y = (radius * Math.cos(Math.PI * 2 * i / numButtons) + radius + (30 - radius * 2) / 2);

    const holder = document.createElement("div");
    holder.style.position = "absolute";
    holder.style.transform = "translate(-50%, -50%)";
    holder.style.marginLeft = x + "rem";
    holder.style.marginTop = y + "rem";
    map.appendChild(holder);

    const table = document.createElement("table");
    holder.appendChild(table);

    const r0 = document.createElement("tr");
    table.appendChild(r0);

    const r1 = document.createElement("tr");
    table.appendChild(r1);

    const d0 = document.createElement("td");
    d0.style.padding = "0px";
    r0.appendChild(d0);
    createButton(d0, (i + 1) * 2, 0);

    const d1 = document.createElement("td");
    d1.style.padding = "0px";
    r1.appendChild(d1);
    createButton(d1, (i + 1) * 2 + 1, 0);

    if (i < 2)
    {
        const d2 = document.createElement("td");
        d2.style.padding = "0px";
        r0.appendChild(d2);
        createButton(d2, (i + 1) * 2, 1);

        const d3 = document.createElement("td");
        d3.style.padding = "0px";
        r1.appendChild(d3);
        createButton(d3, (i + 1) * 2 + 1, 1);
    }
}