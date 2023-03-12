const keys0 = ["la#", "re#", "sol#", "do#", "fa#", "si", "mi", "la", "re", "sol", "do", "fa", "sib", "mib", "lab", "Do#", "Fa#", "Si", "Mi", "La", "Re", "Sol", "Do", "Fa", "Sib", "Mib", "Lab", "Reb", "Solb", "Dob"];
const keys1 = ["la#\n(7#)", "re#\n(6#)", "sol#\n(5#)", "do#\n(4#)", "fa#\n(3#)", "si\n(2#)", "mi\n(1#)", "la", "re\n(1b)", "sol\n(2b)", "do\n(3b)", "fa\n(4b)", "sib\n(5b)", "mib\n(6b)", "lab\n(7b)", "Do#\n(7#)", "Fa#\n(6#)", "Si\n(5#)", "Mi\n(4#)", "La\n(3#)", "Re\n(2#)", "Sol\n(1#)", "Do", "Fa\n(1b)", "Sib\n(2b)", "Mib\n(3b)", "Lab\n(4b)", "Reb\n(5b)", "Solb\n(6b)", "Dob\n(7b)"];
const colors = ["rgb(204, 255, 204)", "rgb(255, 255, 204)", "rgb(255, 230, 204)", "rgb(255, 204, 204)"];

const buttonWidth = 2.5;
const buttonHeight = 2.5;
const buttonBorderRadius = 1;
const radius = 6;
const buttonDistance = 3;
const spiralDifference = 3.5;
const bottomMargin = 1.5;
const rightMargin = 1.5;
const mapSize = 30;

document.body.style.margin = "0rem";
document.body.style.userSelect = "none";

function EnterMenu()
{
    let container = document.createElement("div");

    let header = document.createElement("div");
    header.style.width = mapSize + "rem";
    header.style.padding = "0.5rem 0rem 0.5rem 0rem";
    header.style.margin = "auto";
    header.style.backgroundColor = "lightskyblue";
    header.style.textAlign = "center";
    header.textContent = "Meniu";
    container.appendChild(header);

    let list = document.createElement("div");
    list.style.width = "30rem";
    list.style.margin = "auto";
    list.style.backgroundColor = "rgb(242, 250, 255)";
    container.appendChild(list);

    function CreateListItem(name, func)
    {
        let li = document.createElement("div");
        li.textContent = name;
        li.style.padding = "0.5rem 0rem 0.5rem 1rem";
        li.style.borderBottom = "0.1rem solid rgb(230, 230, 230)";
        li.style.cursor = "pointer";
        li.onclick = func;
        list.appendChild(li);
    }

    CreateListItem("Joc Nou", function()
    {
        container.remove(); 
        ChoseDificulty();
    });

    CreateListItem("Cadranul Tonal", function()
    {
        container.remove();
        EnterFind();
    });

    CreateListItem("Clasament", function()
    {
        container.remove();
        EnterRanking();
    });

    document.body.appendChild(container);
}

EnterMenu();

function ChoseDificulty()
{
    let container = document.createElement("div");

    let header = document.createElement("div");
    header.style.width = mapSize + "rem";
    header.style.margin = "auto";
    header.style.padding = "0.5rem 0rem 0.5rem 0rem";
    header.style.backgroundColor = "lightskyblue";
    header.style.textAlign = "center";
    header.style.cursor = "default";
    header.textContent = "Alege Dificultatea";
    container.appendChild(header);

    let menu = document.createElement("div");
    menu.style.position = "absolute";
    menu.style.transform = "translate(0%, -100%)";
    menu.style.padding = "0rem 1rem 0rem 1rem";
    menu.style.cursor = "pointer";
    menu.textContent = "< Meniu";
    menu.onclick = function()
    {
        container.remove();
        EnterMenu();
    };
    header.appendChild(menu);

    let list = document.createElement("div");
    list.style.width = "30rem";
    list.style.margin = "auto";
    list.style.backgroundColor = "rgb(242, 250, 255)";
    container.appendChild(list);

    function CreateListItem(name, func, textColor)
    {
        let li = document.createElement("div");
        li.textContent = name;
        li.style.padding = "0.5rem 0rem 0.5rem 1rem";
        li.style.borderBottom = "0.1rem solid rgb(230, 230, 230)";
        li.style.color = textColor;
        li.style.cursor = "pointer";
        li.onclick = func;
        list.appendChild(li);
    }

    CreateListItem("Ușor: până la 2 alterații.", function()
    {
        container.remove(); 
        EnterGame();
    }, "rgb(0, 170, 0)");

    CreateListItem("Mediu: până la 4 alterații.", function()
    {
        container.remove(); 
        EnterGame();
    }, "rgb(170, 170, 0)");

    CreateListItem("Greu: până la 7 alterații.", function()
    {
        container.remove(); 
        EnterGame();
    }, "rgb(170, 0, 0)");

    CreateListItem("*Nivelul de dificultate nu este disponibil momentan.", function(){}, "rgb(170, 170, 170)");

    document.body.appendChild(container);
}

function EnterGame(difficulty)
{
    let container = document.createElement("div");

    let header = document.createElement("div");
    header.style.display = "flex";
    header.style.alignItems = "center";
    header.style.width = mapSize + "rem";
    header.style.margin = "auto";
    header.style.padding = "0.5rem 0rem 0.5rem 0rem";
    header.style.backgroundColor = "lightskyblue";
    container.appendChild(header);

    let map = document.createElement("div");
    map.style.width = mapSize + "rem";
    map.style.height = mapSize + "rem";
    map.style.margin = "auto";
    map.style.backgroundColor = "rgb(230, 230, 230)";
    container.appendChild(map);

    let canPlay = true;
    let menu = document.createElement("div");
    menu.style.display = "inline-block";
    menu.style.padding = "0rem 1rem 0rem 1rem";
    menu.style.cursor = "pointer";
    menu.textContent = "< Meniu";
    menu.onclick = function()
    {
        if (canPlay)
        {
            canPlay = false;

            let overlay = document.createElement("div");
            overlay.style.position = "absolute";
            overlay.style.width = mapSize + "rem";
            overlay.style.height = mapSize + "rem";
    
            let div = document.createElement("div");
            div.style.position = "absolute";
            div.style.marginTop = mapSize / 2 + "rem";
            div.style.marginLeft = mapSize / 2 + "rem";
            div.style.transform = "translate(-50%, -50%)";
            div.style.backgroundColor = "rgb(242, 250, 255)";
            div.style.borderRadius = "1rem";
            div.style.cursor = "default";
    
            let divText = document.createElement("div");
            divText.style.padding = "1rem";
            divText.textContent = "Sigur dorești să părăsești acest joc?"
            div.appendChild(divText);
    
            let divButtons = document.createElement("div");
            divButtons.style.display = "flex";
            div.appendChild(divButtons);
    
            let yesButton = document.createElement("div");
            yesButton.style.display = "inline-block";
            yesButton.style.flexGrow = "1";
            yesButton.style.textAlign = "center";
            yesButton.style.padding = "0.5rem 0rem 0.5rem 0rem";
            yesButton.style.backgroundColor = "rgb(255, 170, 170)";
            yesButton.style.borderBottomLeftRadius = "1rem";
            yesButton.style.cursor = "pointer";
            yesButton.textContent = "Da";
            yesButton.onclick = function()
            {
                container.remove();
                EnterMenu();
            };
            divButtons.appendChild(yesButton);
    
            let noButton = document.createElement("div");
            noButton.style.display = "inline-block";
            noButton.style.flexGrow = "1";
            noButton.style.textAlign = "center";
            noButton.style.padding = "0.5rem 0rem 0.5rem 0rem";
            noButton.style.backgroundColor = "rgb(242, 242, 242)";
            noButton.style.borderBottomRightRadius = "1rem";
            noButton.style.cursor = "pointer";
            noButton.textContent = "Nu";
            noButton.onclick = function()
            {
                canPlay = true;
                div.remove();
                overlay.remove();
            };
            divButtons.appendChild(noButton);
    
            map.appendChild(overlay);
            map.appendChild(div);
        }
    };
    header.appendChild(menu);

    let info = document.createElement("div");
    info.style.display = "inline-flex";
    info.style.flexGrow = "1";
    info.style.alignItems = "center";
    info.style.justifyContent = "space-around";
    header.appendChild(info);

    let q = 0;
    let keys = [...keys0];
    keys.sort(() => Math.random() - 0.5);

    let requirement = document.createElement("div");
    requirement.style.cursor = "default";
    requirement.textContent = "Selectează: " + keys[q];
    info.appendChild(requirement);

    let rights = 0;
    let total = 0;
    let wrongStreak = 0;

    let accuracy = document.createElement("div");
    accuracy.style.cursor = "default";
    accuracy.textContent = "Acuratețe: 0%";
    info.appendChild(accuracy);

    let seconds = 0;

    let time = document.createElement("div");
    time.style.cursor = "default";
    time.textContent = "Timp: 00:00";
    info.appendChild(time);

    let timeHandler = setInterval(function()
    {
        seconds++;
        let minutes =  Math.floor(seconds / 60);
        let seconds1 = seconds - minutes * 60;
        time.textContent = "Timp: " + Math.floor(minutes / 10) + "" + minutes % 10 + ":" + Math.floor(seconds1 / 10) + "" + seconds1 % 10;
    }, 1000);

    let hintHandler;
    let hint = false;
    let buttons = [];
    let previous = [];

    function createButton(x, y, id)
    {
        let button = document.createElement("div");
        button.style.width = buttonWidth + "rem";
        button.style.height = buttonHeight + "rem";
        button.style.borderRadius = buttonBorderRadius + "rem";
        button.style.position = "absolute";
        button.style.transform = "translate(-50%, -50%)";
        button.style.marginLeft = x + "rem";
        button.style.marginTop = y + "rem";
        button.style.display = "flex";
        button.style.justifyContent = "center";
        button.style.alignItems = "center";
        button.style.textAlign = "center";
        button.style.backgroundColor = "white";
        button.style.cursor = "pointer";
        button.id = id;

        buttons.push(button);

        button.onclick = function()
        {
            if (canPlay)
            {

                if (keys[q] == keys0[button.id])
                {
                    button.textContent = keys1[button.id];
    
                    button.style.pointerEvents = "none";
                    previous = [];
                    hint = false;
                    clearInterval(hintHandler);
                    button.style.backgroundColor = colors[Math.min(wrongStreak, 3)];
    
                    if (wrongStreak < 3)
                    {
                        rights++;
                    }
                    wrongStreak = 0;
    
                    q++;
                    requirement.textContent = "Selectează: " + keys[q];
    
                    if (q == keys.length)
                    {
                        clearInterval(timeHandler);
                        requirement.remove();
                    }
    
                    total++;
                }
                else
                {
                    if (!previous.includes(button.id))
                    {
                        previous.push(button.id);
                        wrongStreak++;
                        total++;
                    }
    
                    button.textContent = keys1[button.id];
                    button.style.backgroundColor = colors[3];
                    setTimeout(function(){button.style.backgroundColor = "white"; button.textContent = "";}, 1000);
    
                    if (wrongStreak > 2 && !hint)
                    {
                        hint = true;
    
                        let hintButton;
                        for (let i = 0; i < buttons.length; i++)
                        {
                            if (keys[q] == keys0[buttons[i].id])
                            {
                                hintButton = buttons[i];
                                hintButton.textContent = keys1[hintButton.id];
                                hintButton.style.backgroundColor = colors[3];
                                break;
                            }
                        }
    
                        let t = false;
                        hintHandler = setInterval(function()
                        {
                            if (t)
                            {
                                t = false;
                                hintButton.style.backgroundColor = colors[3];
                            }
                            else
                            {
                                t = true;
                                hintButton.style.backgroundColor = "white";
                            }
                        }, 500);
                    }
                }
    
                accuracy.textContent = "Acuratețe: " + Math.round(rights / total * 100) + "%";
            }
        }

        map.appendChild(button);
    }

    for (let i = 0; i < 2; i++)
    {
        for (let j = -1, k = 0; j < 14; j++, k++)
        {
            let r = radius + (i + 1) * buttonDistance + Lerp(spiralDifference, -spiralDifference, k / 14);
            let x = r * Math.sin(Math.PI * 2 * j / 12) + r + (mapSize - r * 2) / 2;
            let y = r * Math.cos(Math.PI * 2 * j / 12) + r + (mapSize - r * 2) / 2;
            createButton(x - rightMargin, y - bottomMargin, i * 15 + j + 1);
        }
    }

    document.body.appendChild(container);
}

function EnterFind()
{
    let container = document.createElement("div");

    let header = document.createElement("div");
    header.style.width = mapSize + "rem";
    header.style.margin = "auto";
    header.style.padding = "0.5rem 0rem 0.5rem 0rem";
    header.style.backgroundColor = "lightskyblue";
    header.style.textAlign = "center";
    header.style.cursor = "default";
    header.textContent = "Cadranul Tonal";
    container.appendChild(header);

    let map = document.createElement("div");
    map.style.width = mapSize + "rem";
    map.style.height = mapSize + "rem";
    map.style.margin = "auto";
    map.style.backgroundColor = "rgb(230, 230, 230)";
    container.appendChild(map);

    let menu = document.createElement("div");
    menu.style.position = "absolute";
    menu.style.transform = "translate(0%, -100%)";
    menu.style.padding = "0rem 1rem 0rem 1rem";
    menu.style.cursor = "pointer";
    menu.textContent = "< Meniu";
    menu.onclick = function()
    {
        container.remove();
        EnterMenu();
    };
    header.appendChild(menu);

    function createButton(x, y, id)
    {
        let button = document.createElement("div");
        button.style.width = buttonWidth + "rem";
        button.style.height = buttonHeight + "rem";
        button.style.borderRadius = buttonBorderRadius + "rem";
        button.style.position = "absolute";
        button.style.transform = "translate(-50%, -50%)";
        button.style.marginLeft = x + "rem";
        button.style.marginTop = y + "rem";
        button.style.display = "flex";
        button.style.justifyContent = "center";
        button.style.alignItems = "center";
        button.style.textAlign = "center";
        button.style.backgroundColor = "white";
        button.style.cursor = "default";
        button.textContent = keys1[id];
        map.appendChild(button);
    }

    for (let i = 0; i < 2; i++)
    {
        for (let j = -1, k = 0; j < 14; j++, k++)
        {
            let r = radius + (i + 1) * buttonDistance + Lerp(spiralDifference, -spiralDifference, k / 14);
            let x = r * Math.sin(Math.PI * 2 * j / 12) + r + (mapSize - r * 2) / 2;
            let y = r * Math.cos(Math.PI * 2 * j / 12) + r + (mapSize - r * 2) / 2;
            createButton(x - rightMargin, y - bottomMargin, i * 15 + j + 1);
        }
    }

    document.body.appendChild(container);
}

function EnterRanking()
{
    let container = document.createElement("div");

    let header = document.createElement("div");
    header.style.width = mapSize + "rem";
    header.style.margin = "auto";
    header.style.padding = "0.5rem 0rem 0.5rem 0rem";
    header.style.backgroundColor = "lightskyblue";
    header.style.textAlign = "center";
    header.style.cursor = "default";
    header.textContent = "Clasament";
    container.appendChild(header);

    let menu = document.createElement("div");
    menu.style.position = "absolute";
    menu.style.transform = "translate(0%, -100%)";
    menu.style.padding = "0rem 1rem 0rem 1rem";
    menu.style.cursor = "pointer";
    menu.textContent = "< Meniu";
    menu.onclick = function()
    {
        container.remove();
        EnterMenu();
    };
    header.appendChild(menu);

    let list = document.createElement("div");
    list.style.width = "30rem";
    list.style.margin = "auto";
    list.style.backgroundColor = "rgb(242, 250, 255)";
    container.appendChild(list);

    function CreateListItem(name, textColor)
    {
        let li = document.createElement("div");
        li.textContent = name;
        li.style.padding = "0.5rem 0rem 0.5rem 1rem";
        li.style.borderBottom = "0.1rem solid rgb(230, 230, 230)";
        li.style.color = textColor;
        li.style.cursor = "default";
        list.appendChild(li);
    }

    CreateListItem("*Nu există înscrieri în clasament.", "rgb(170, 170, 170)");

    document.body.appendChild(container);
}

function Lerp(a, b, t)
{
    return (1 - t) * a + t * b;
}
