//Temperature Converter by AdixSzef 06.08.2024

document.addEventListener("DOMContentLoaded", function() {
    const textBox = document.getElementById("TextBox");
    const toFahre = document.getElementById("toFahrenheit");
    const toCelcius = document.getElementById("toCelcius");
    const result = document.getElementById("result");

    result.textContent = "";

    function convert(){
        if (toFahre.checked) {
           temp = Number(textBox.value);
           temp = temp * 9 / 5 + 32;
           result.textContent = temp + "°F";

        } 
        else if(toCelcius.checked) {
            temp = Number(textBox.value);
            temp = (temp - 32) * (5/9);
            result.textContent = temp + "°C";

        } 
        else{
            result.textContent = "Please select a unit";
        }
    }

        window.convert = convert;

});

