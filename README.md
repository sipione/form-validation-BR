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
### GETTING THE INPUTS

### CUSTOMIZE THE ERROR MESSAGE BY OBJECT

### THE CUSTOM VAALIDATION
#### THE BIRTHDATE FIELD
#### THE CPF FIELD
#### THE CEP FIELD
