
/*this function is the main which returns true or false in order to make the input field valid or Not, it returns true only if all the three function called returns true also, if one of them returns false, so the function returns false also*/ 
export function cpfValidation(input){
    const array = input.value.split("")
    let valid = false;
    if (mathCPF(array, 10) && mathCPF(array, 11) && sameNumbers(array)){
        valid = true 
    }
    return valid;
}

/*This onme extract the mains numbers of the tax payer number and make the math operation, extract also the verifier digit and use both as params to the function called, if the function called returs false or true, the same result is returned by this function*/
function mathCPF(array, multiplier){
    let valid = false
    let count = multiplier
    let sum = 0;
    let numbers = array.slice(0, multiplier-1);
    let verifyingDigit = array[multiplier-1];
    for (let pos = 0; pos < numbers.length; pos++){
        sum += numbers[pos]*count;
        count--
    }
    if (digitVerifier(verifyingDigit, sum)){
        valid = true;
    }
    return valid
}

/*this function is called by the mathCPF and verify if the digit(first and second one) is real or fake, if its real so returns true, if it's fake returns false*/
function digitVerifier(verifyingDigit, sum){
    let valid = false;
    const leftOver = sum%11;
    if(leftOver < 2 && verifyingDigit == 0){
        valid = true
    }
    if(leftOver >= 2 && verifyingDigit == (11 - leftOver)){
        valid = true;
    }
    return valid
}

/*Besides the math calc in order to verify the CPF numbers, if the user input with repeatet numbers(as 00000000000 or 333333333333) the calc gone return true, but its not a valid CPF, so in order to prevent this value also this function uses the set to verify if all the values is repeated 11 times or not*/
function sameNumbers(array){
    let valid = false
    const set = new Set(array);
    if (set.size > 1){
        valid = true
    }
    return valid
}