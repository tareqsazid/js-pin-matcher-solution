function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4){
        return pin;
    } else{
        // console.log('pin not 4', pin)
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
   
})


document.getElementById('calculator').addEventListener('click', function(event){
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.vaue = pin;
})

document.getElementById('calculator').addEventListener('click', function(event){
    const number  = event.target.innerText;
    const typedNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typedNumberField.value;

    if (isNaN(number)){
        if(number === "C"){
            typedNumberField.value = '';
        }
        else if (number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else{
        const neweTypedNumber = previousTypedNumber + number;
        typedNumberField.value = neweTypedNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click', function(){
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');

    if (typedNumber === currentPin){
      
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
       const pinFailureMessage = document.getElementById('pin-failure');
       pinFailureMessage.style.display = 'block';
       pinSuccessMessage.style.display = 'none';
    }

})
