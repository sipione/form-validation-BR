import { verify } from "./verify.js";

/*GET ALL INPUTS IN THE FORM TO SEND ONE BY ONE AFTER*/
const inputs = document.querySelectorAll("input");

inputs.forEach(input =>{
    input.addEventListener("blur", ()=>{
        verify(input)
    })
})