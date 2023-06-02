var button = document.querySelector(".btn")
var result = document.querySelector(".result")


function czyPrzestepny() {
    input = document.getElementById("input").value

    if (input == "") {
        result.textContent = "Type a number"
    }
    else if (!isNaN(input)) {
        console.log(isNaN(input))
        if(((input)%4===0 && (input)%100!==0) || input%400 == 0) {
            result.textContent = "Year " + input + " is a leap year"
        }
        
        else {
            result.textContent = "Year " + input + " is not a leap year"
    }
    } else if (isNaN(input)) {result.textContent = "This is not a number :)"

    }  


       
}

button.addEventListener('click',czyPrzestepny)

