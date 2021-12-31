import { bornValidation } from "./bornValidation.js";
import { cepValidation } from "./cepApi.js";
import { cpfValidation } from "./cpfValidation.js";
import { errorObject, errorTypes } from "./errorObject.js";

/*CUSTOMIZED ERRORS SYSTEM: each function gona return true or false to verify function, if its true thew field is ok, so if it's false the field is invalid. EXCEPTION the cepValidation, which one always return true and the error menage is made inside the function directly, it\s here just to be called by the verify*/
const customValidity = {
    born:input=> bornValidation(input),
    cpf:input => cpfValidation(input),
    cep:input => cepValidation(input)
}


export function verify(input){
    const inputType = input.dataset.type;
    classError(inputType, input)
    /* At first if the commom error is false, so goes to custom errors, because inside the archive errorObject.js is an array which is read for the function "throwMessage" and the last error gona be showen in the screen, and that\s not our goal, we want to show the suit error  in the input invalidation, in order to orientate the user*/
    if (customValidity[inputType] && (!input.validity.valueMissing && !input.validity.badInput && !input.validity.typeMismatch)){
        const validation = customValidity[inputType](input);
        console.log(validation)
        if(validation){
            input.setCustomValidity("");
            classError(inputType, input);
        }else{
            input.setCustomValidity(errorObject[inputType]["customError"])
            classError(inputType, input)
        } 
    }
}

/*This function gona insert in the HTML the class necessary to transform the input area if it\s invalid and call the function thowMessage*/
export function classError(inputType, input){
    if(!input.validity.valid){
        input.classList.add("info--error");
        input.parentElement.querySelector("[data-type ='errorMessage']").innerHTML = throwMessage(inputType, input);
    }else{
        input.classList.remove("info--error");
        input.parentElement.querySelector("[data-type = 'errorMessage']").innerHTML = "";
    }
}


/*this function use the object with custom error messages for each error based by the data-type in the html and return the message to the function which call*/
function throwMessage(inputType, input){
    let message = ""

    errorTypes.forEach(errorType => {
        if (input.validity[errorType]){
            message = errorObject[inputType][errorType]
        }
    })
    return message;
}