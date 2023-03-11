document.body.style.margin = "0px";

const keys0 = ["la#", "re#", "sol#", "do#", "fa#", "si", "mi", "la", "re", "sol", "do", "fa", "sib", "mib", "lab", "Do#", "Fa#", "Si", "Mi", "La", "Re", "Sol", "Do", "Fa", "Sib", "Mib", "Lab", "Reb", "Solb", "Dob"];

const keys1 = ["la#\n(7#)", "re#\n(6#)", "sol#\n(5#)", "do#\n(4#)", "fa#\n(3#)", "si\n(2#)", "mi\n(1#)", "la", "re\n(1b)", "sol\n(2b)", "do\n(3b)", "fa\n(4b)", "sib\n(5b)", "mib\n(6b)", "lab\n(7b)", "Do#\n(7#)", "Fa#\n(6#)", "Si\n(5#)", "Mi\n(4#)", "La\n(3#)", "Re\n(2#)", "Sol\n(1#)", "Do", "Fa\n(1b)", "Sib\n(2b)", "Mib\n(3b)", "Lab\n(4b)", "Reb\n(5b)", "Solb\n(6b)", "Dob\n(7b)"];

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

let q = 0;
let keys = [...keys0];
keys.sort(() => Math.random() - 0.5);

const requirement = document.createElement("div");
requirement.textContent = "Selectează: " + keys[q];
bar.appendChild(requirement);

let rights = 0;
let total = 0;

const accuracy = document.createElement("div");
accuracy.textContent = "Acuratețe: 0%";
bar.appendChild(accuracy);

let seconds = 0;

const time = document.createElement("div");
time.textContent = "Timp: 00:00";
bar.appendChild(time);

let timeHandler = setInterval(function()
{
    seconds++;
    let minutes =  Math.floor(seconds / 60);
    let seconds1 = seconds - minutes * 60;
    time.textContent = "Timp: " + Math.floor(minutes / 10) + "" + minutes % 10 + ":" + Math.floor(seconds1 / 10) + "" + seconds1 % 10;
}, 1000);

function createButton(x, y, id)
{
    const button = document.createElement("button");
    button.style.width = buttonWidth;
    button.style.height = buttonHeight;
    button.style.borderRadius = buttonBorderRadius;
    button.style.position = "absolute";
    button.style.transform = "translate(-50%, -50%)";
    button.style.marginLeft = x + "rem";
    button.style.marginTop = y + "rem";
    button.style.backgroundColor = "white";
    button.style.borderColor = "darkgrey";
    button.id = id;

    button.onclick = function()
    {
        if (keys[q] == keys0[button.id])
        {
            button.textContent = keys1[button.id];
            button.style.backgroundColor = "green";
            button.style.pointerEvents = "none";
            setTimeout(function(){button.style.backgroundColor = "white"}, 500);

            q++;
            requirement.textContent = "Selectează: " + keys[q];
            rights++;

            if (q == keys.length)
            {
                clearInterval(timeHandler);
                requirement.textContent = "*Refresh la pagină pentru a începe din nou."
                requirement.style.color = "gray";
            }
        }
        else
        {
            button.textContent = keys1[button.id];
            button.style.backgroundColor = "red";
            setTimeout(function(){button.style.backgroundColor = "white"; button.textContent = "";}, 500);
        }

        total++;
        accuracy.textContent = "Acuratețe: " + Math.round(rights / total * 100) + "%";
    }

    map.appendChild(button);
}

const radius = 6;
const buttonDistance = 2.8;
const spiralDifference = 3.6;
const bottomMargin = 1.5;
const rightMargin = 1.5;
const circumference = 12
const numMajorKeys = 15;

for (let i = 0; i < 2; i++)
{
    for (let j = -1, k = 0; j < numMajorKeys - 1; j++, k++)
    {
        let r = radius + (i + 1) * buttonDistance + Lerp(spiralDifference, -spiralDifference, k / (numMajorKeys - 1));
        let x = r * Math.sin(Math.PI * 2 * j / circumference) + r + (30 - r * 2) / 2;
        let y = r * Math.cos(Math.PI * 2 * j / circumference) + r + (30 - r * 2) / 2;
        createButton(x - rightMargin, y - bottomMargin, i * numMajorKeys + j + 1);
    }
}

function Lerp(a, b, t)
{
    return (1 - t) * a + t * b;
}
