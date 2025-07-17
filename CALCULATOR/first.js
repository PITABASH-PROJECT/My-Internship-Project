


let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let isResultShown = false; // Flag to check if result was just displayed

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const btnText = e.target.innerText;

        if (btnText === "AC") {
            string = "";
            input.value = "";
            isResultShown = false;
        }
        else if (btnText === "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else if (btnText === "=") {
            try {
                string = eval(string).toString();
                input.value = string;
                isResultShown = true;
            } catch {
                input.value = "Error";
                string = "";
                isResultShown = false;
            }
        }
        else {
            // If result was shown and now new input is given, reset string
            if (isResultShown) {
                // If number or dot entered, start new expression
                if (!isNaN(btnText) || btnText === '.') {
                    string = btnText;
                } 
                // If operator entered, continue with result
                else {
                    string += btnText;
                }
                isResultShown = false;
            } else {
                string += btnText;
            }
            input.value = string;
        }
    });
});



























