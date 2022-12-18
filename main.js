const question = document.getElementById("second-text");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

let questionCount = 1;
let noCounter = 1;

yes.onclick = () => {
    console.log(questionCount);
    switch (questionCount) {
        case 1:
            question.textContent = "Gusto mo ng kasama?";

            no.onmouseenter = () => {
                message.style.visibility = "visible";
                message.textContent = "Hala gumagalaw";

                const nh = Math.floor(Math.random() * 500);
                const nw = Math.floor(Math.random() * 1001) - 500;

                no.style.top = nh + "px";
                no.style.left = nw + "px";
            };

            break;
        case 2:
            question.textContent = "Samahan kita?";
            let numOfMouseEnter = 0;

            no.removeAttribute("style");

            no.onmouseenter = () => {
                message.style.visibility = "visible";
                numOfMouseEnter += 1;

                switch (numOfMouseEnter) {
                    case 1:
                        message.textContent = "Don't event think about it...";
                        break;
                    case 2:
                        message.textContent = "Sabing wag e";
                        break;
                    case 3:
                        message.textContent = "Ay ang kulit mo talaga";
                        break;
                    case 4:
                        message.textContent = "Gusto mo sapak?";
                        break;
                    case 5:
                        message.textContent = "tsk tsk";
                        break;
                    case 6:
                        message.textContent = "no, bala ka diyan";
                        break;
                    case 7:
                        message.textContent = "no";
                        break;
                    default:
                        message.textContent += " no";
                        break;
                }
            };

            break;
        case 3:
            question.textContent = "Okay, kelan?";
            document.getElementsByClassName("container-answer")[0].remove();
            message.remove();
            break;
    }

    questionCount += 1;
    noCounter = 0;
    message.style.visibility = "hidden";
};

no.onclick = () => {
    switch (questionCount) {
        case 1:
            switch (noCounter) {
                case 1:
                    message.style.visibility = "visible";
                    message.textContent = "Di gumagana yan bee";
                    break;
                case 2:
                    message.style.visibility = "visible";
                    message.textContent = "Di nga gumagana aba";
                    break;
                case 3:
                    message.style.visibility = "visible";
                    message.innerHTML =
                        "<strong>Hint:</strong> Kulay green yung tamang sagot";
                    break;
            }

            noCounter += 1;
            break;
        case 2:
            message.style.visibility = "visible";
            message.textContent =
                "Kahit mahuli mo pa yan, isa lang pa din ang tamang sagot!!!";
            break;
        case 3:
            message.style.visibility = "visible";
            message.textContent = "Bawal no!!!";
            break;
    }
};

setTimeout(() => {
    const firstText = document.getElementById("first-text");
    firstText.textContent = "dali sagutin mo to";

    setTimeout(() => {
        const containers = document.getElementsByClassName("container");
        containers[0].remove();
        containers[0].removeAttribute("style");
    }, 5000);
}, 3000);
