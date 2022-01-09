# <h1 align = "center">ABOUT THE FORM VALIDATION</h1>

## GENERAL CONTEXT
It's a simple form that I used as a way to demonstrate some hard-skills mainly in JavaScript. In the begginig some premises must be addressed.

At the first, I'm not a skilled designer, but I can achieve what a professional designer can imagine. Furthermore, the main idea of this repository is to draw attention to code writing patterns, such as the BEM standard, creation in CSS, document organization in JS dividing the responsibilities of functions and files, modularization of them, in addition to the logic itself programming to calculate the age of majority, tax payer number and use of API to automatically fill in the postal code fields.

The second premise is, this form follow the brazilian system of identification, as the tax payer number pattern, the zip-code, the full-name in the same field, the laber text content in Portuguese, etc. So, if you are a foreigner, during this readme I will give you examples of values to be filled in while I explain how this form works.

<strong>IF YOU WOULD LIKE TO SEE IT WORKING, GOES TO http://dogs.sipione.tech/register.html AND ENJOY IT ;)</strong>


## THE HTML OF THE FIELDS
<img src="https://user-images.githubusercontent.com/90251018/148097166-beb71414-0f2f-49ab-ad78-4ae073b6441f.png" align="left" height="80" width="80">
Form validation cannot ignore the tools present in the HTML, in addition to the correct tags for accessibility and a better user experience, as well as the browser's understanding of what each block of information is about. 

In this treadmill, the item name was of the "text" type, of the e-mail type "email", the date of birth was of the "date" type so that input information could be easily received, in addition to the ease of filling in for the user . To avoid failures the CPF and CEP fields were created with the type "number". All inputs are required with the exception of those filled by the API (street, neighborhood, city, state), which are onlyread.

```html
<form action="formDone.html" class="form">
    <div>
        <label for="name" class="tag">Nome</label>
        <input placeholder=" " type="text" class="info" data-type="name" name="name" id="name" required>
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
        <label for="email" class="tag">e-mail</label>
        <input placeholder=" " type="email" name="email" id="email" data-type="email" class="info"required>
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
        <label for="born" class="tag">Data de Nascimento</label>
        <input placeholder=" " type="date" id="born" name="born" class="info" data-type="born" required>
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
        <label for="cpf" class="tag">CPF</label>
        <input placeholder=" " type="number" id="cpf" name="cpf" class="info" data-type="cpf" required>
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
        <label for="number" class="tag">CEP</label>
        <input placeholder=" " type="number" id="cep" name="cep" class="info" data-type="cep" required>
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
        <label for="street" class="tag">Logradouro</label>
        <input placeholder=" " type="text" id="street" name="street" class="info" data-type="street" readonly >
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
    <label for="neighborhood" class="tag">Bairro</label>
        <input placeholder=" " type="text" id="neighborhood" name="neighborhood" class="info" data-type="neighborhood" readonly >
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
        <label for="city" class="tag">Cidade</label>
        <input placeholder=" " type="text" id="city" name="city" class="info" data-type="city" readonly >
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <div>
        <label for="state" class="tag">Estado</label>
        <input placeholder=" " type="text" id="state" name="state" class="info" data-type="state" readonly >
        <span class="error__message" data-type="errorMessage"></span>
    </div>

    <input type="submit" class="form__button">
</form>
```
The div tags have the containerization function of the label+input+span set. So the placement of items does not break because everyone has a mother div with other sister div to organize in a flex display and flex direction column.

The span tags do not have any text content because they will be added as per the custom error message by the scripts. The class hides the span until the input field is judged to be invalid, then the borders change, as well as the background and span appear.

The correctly used label tag caused the click on the label to focus on the corresponding input field, in addition to facilitating the understanding of those who use screen readers and the SEO of the page as it contains the items identifiable by the search engines.

Using the most appropriate tags in HTML makes the form with better usability in desktop and mobile contexts, with better accessibility for those who use screen readers, as well as with better SEO score of the page.

Once all the HTML theme has been overcome, any doubts are enough to consult the code above, or you can get in touch with my networks, I will be honored to explain the entire project if necessary :) 

## THE JAVASCRIPT IN THE FIELDS
### GETTING THE INPUTS AND VALIDATING
All HTML and DOM interaction is done through my App.js, in this file a search is done in the entire DOM for all inputs, the generated array is iterated and on each iterated element a "blur" eventListener is added in the occurrence of the event a validation function is called. The narrated path takes place in the following code sequence.

```javascript
const inputs = document.querySelectorAll("input");
inputs.forEach(input =>{
    input.addEventListener("blur", ()=>{
        verify(input)
    })
})
```
In the "verify.js" file, the main function is verify, which briefly does three things. 
(1) Receives the individual input as a parameter, extracts its data type. 
(2) Calls another function responsible for the CSS of the inputs, which in case of invalidity of the inopute the HTML element is changed. 
(3) Checks for non-custom invalidity, not having then checked if there is any custom invalidity. In case of custom invalidity, a setCustomValidity is filled in and the classError function is called (mentioned above), otherwise the function is called with the setCustomValidity empty (so as not to show an error appearance.

```javascript
export function verify(input){
    const inputType = input.dataset.type;
    /*Get the input type and call the function"classError" responsible for the CSS alteration*/
    classError(inputType, input)
    if (customValidity[inputType] && (!input.validity.valueMissing && !input.validity.badInput && !input.validity.typeMismatch)){
    /*If not ordinary invalidities, it's gona search in the object for custom invalidity.*/
        const validation = customValidity[inputType](input);
        if(validation){
            input.setCustomValidity("");
            classError(inputType, input);
        }else{
            input.setCustomValidity(errorObject[inputType]["customError"])
            classError(inputType, input)
        } 
    }
}

/*The object with custom validation following the brazilian params*/
const customValidity = {
    born:input=> bornValidation(input),
    cpf:input => cpfValidation(input),
    cep:input => cepValidation(input)
}

```
Why step 3? To show the custom error messages an array with the error types is iterated, if there is more than one error, only the last one will prevail (the custom validation), so to pass more precise error information to the user, the custom validation of the field is only invoked only after all the others validation fields are valid. If it's confusing, it may be clearer by understanding how error message objects works in the following topic.

### CUSTOMIZE THE ERROR MESSAGE BY OBJECT

At first an object was built based on the input type and the value of this key is another object where the error type is the key and the value, finally, the custom error message.
```javascript
export const errorObject ={
    name:{
        valueMissing:"O campo nome não pode estar vazio"
    },
    email:{
        valueMissing:"O campo email não pode estar vazio",
        typeMismatch: "O e-mail digitado não é válido"
    },
    born:{
        valueMissing:"O campo data de nascimento não pode estar vazio",
        badInput: "A data digitada não é válida, verifique as informações",
        customError:"Você precisa ter mais de 18 anos para enviar o formulário"
    },
    cpf:{
        valueMissing:"O campo de CPF não pode estar vazio",
        badInput: "O campo deve ser preenchido apenas com números",
        customError: "O CPF digitado não é válido. Verifique os 11 números com atenção."
    },
    cep:{
        valueMissing:"O campo de CEP não pode estar vazio",
        badInput: "O campo deve ser preenchido apenas com números", 
        customError:"O CEP digitado não é válido. Verifique os 9 números com atenção."
    }
}

export const errorTypes= ["valueMissing", "typeMismatch", "badInput", "customError"];
```

The "errorTypes" array serves to be iterated and to be able to traverse the object's second layer. That is, the array of error types is iterated and the items are compared with the "input.validity" elements, with true invalidity, then the error message object is traversed in its first layer by the input type and in its second layer for the error type, thus finding the corresponding message and returning that message to appear to the user. This happens exactly in this function below.

```javascript
export function classError(inputType, input){
    if(!input.validity.valid){
        input.classList.add("info--error");
        input.parentElement.querySelector("[data-type ='errorMessage']").innerHTML = throwMessage(inputType, input);
    }else{
        input.classList.remove("info--error");
        input.parentElement.querySelector("[data-type = 'errorMessage']").innerHTML = "";
    }
}

function throwMessage(inputType, input){
    let message = ""

    errorTypes.forEach(errorType => {
        if (input.validity[errorType]){
            message = errorObject[inputType][errorType]
        }
    })
    return message;
}
```

With this, an empty field, for example, does not present a generic message, but rather aimed at each field specifically. So, let's go to JavaScript to understand how the custom validation of the date of birth, taxpayer number (cpf) and zip code (cep) fields works.

<h2 align = "center"> :construction: Area in construction :construction: </h2>

### THE CUSTOM VALIDATION
#### THE BIRTHDATE FIELD

```javascript
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
```

#### THE CPF FIELD

```javascript
export function cpfValidation(input){
    const array = input.value.split("")
    let valid = false;
    if (mathCPF(array, 10) && mathCPF(array, 11) && sameNumbers(array)){
        valid = true 
    }
    return valid;
}

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

function sameNumbers(array){
    let valid = false
    const set = new Set(array);
    if (set.size > 1){
        valid = true
    }
    return valid
```

#### THE CEP FIELD

```javascript
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

function completeInputs(response){
    const street = document.querySelector("[data-type='street']");
    const city = document.querySelector("[data-type='city']");
    const state = document.querySelector("[data-type='state']");
    const neighborhood = document.querySelector("[data-type='neighborhood']");
    

    street.value = response.logradouro;
    neighborhood.value = response.bairro;
    city.value = response.localidade;
    state.value = response.uf;

```
