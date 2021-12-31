import { classError } from "./verify.js";

/*This function use HTTP request by fetch to GET the address information by the VIACEP API, if everything goes ok, so call the function to insert the value in the input fields, but if the request fails, so a custom erros is setted in the input and the function classError is called to change the class in the html and shows to the user the custom error. This function always returns true to the verify functions, in order to avoid incongruity in the input class and the input validity*/
export function cepValidation(input){
    const cep = input.value;
    const url = `https://viacep.com.br/ws/${cep}/json/`
    const info = {
        method: "GET",
        mode: "cors",
        Headers:{
            "Content-type":"application/json"
        }
    }

    fetch(url, info)
    .then(response => {response.json()
        .then(data => completeInputs(data))
    })
    .catch( () => {
        const inputType = input.dataset.type;
        input.setCustomValidity("erro")
        classError(inputType, input)
    })
    return true
}

/*This functions just get the HTTPS request informations, and use it to inser value in the input field, which ones are only read*/
function completeInputs(response){
    const street = document.querySelector("[data-type='street']");
    const city = document.querySelector("[data-type='city']");
    const state = document.querySelector("[data-type='state']");
    const neighborhood = document.querySelector("[data-type='neighborhood']");
    

    street.value = response.logradouro;
    neighborhood.value = response.bairro;
    city.value = response.localidade;
    state.value = response.uf;
}