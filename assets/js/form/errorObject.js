/*Here are only one object and an array to be runned by the functions and give custom merssagens for the different kind os errors in the different fields. street, city, neighborhood and state are out of the range because they are inputs only read*/
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