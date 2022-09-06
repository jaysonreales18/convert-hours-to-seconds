function convert(data) {
    const userInput = document.getElementById('usrInpt').value;
    let seconds = (userInput * 60) * 60;

    if(userInput > 1){
        document.getElementById("canvas").innerHTML = userInput + " hours is " + seconds + " in seconds";
    } else if (userInput == 1){
        document.getElementById("canvas").innerHTML = userInput + " hour is " + seconds + " in seconds";
    } else {
        document.getElementById("canvas").innerHTML = "Please enter a valid number";

    }
    return seconds;
}
