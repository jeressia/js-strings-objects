const iAmThursty = (num) => {
    if (num < 21) {
        return 'drink some water';
    } else if (num > 20 && num < 65){
        return 'drink a beer';
    } else {
        return 'take a nap';
    }
}

const printToDom = (divId, textToPrint) => {
     const selectedDiv=document.getElementById(divId);
     selectedDiv.innerHTML += textToPrint;
}

printToDom('thirsty',iAmThursty(55));
printToDom('thirsty',iAmThursty(7));
printToDom('thirsty',iAmThursty(90));
