/*A simple function which get the day today and compares with the input value, if the result is under 18, so returns false in order to make the input field invalid. In other wise if the comparisson is more the 18 or equal, so returns true and makes the input field valid*/
export function bornValidation(input){
    let valid = false;
    const today = new Date();
    const date = new Date(input.value)
    const adultLife = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());
    if(adultLife < today){
        valid = true;
    }
    return valid;
}