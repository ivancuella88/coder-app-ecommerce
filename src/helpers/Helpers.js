import { useNavigate} from 'react-router-dom';

const GoToPage = (pathName) => {
    const navigate = useNavigate()
    navigate(pathName, { replace: true });
}

const Validate = (form) => {

    let container     = form.target
    let inputElements = [...container.querySelectorAll("[data-rules]")]
    let valid           = false

    const validate = () => {

        container.querySelectorAll('.error-message').forEach((elem) => elem.remove());

        let validate = inputElements.map((inputElem) => {

            let input = inputElem.querySelector('input[type=text], input[type=email], input:checked, textarea')
            inputElem.classList.remove("input-invalid");

            var rules_classes = []
            if(inputElem.dataset.rules){
                rules_classes = inputElem.dataset.rules.toLowerCase().split('|')
            }

            var rules = []

            if(rules_classes.includes('required')){
                rules.push('required')
            }

            if(rules_classes.includes('minlength')){
                rules.push('minlength')
            }

            if(rules_classes.includes('email')){
                rules.push('email')
            }

            if(rules_classes.includes('checked')){
                rules.push('checked')
            }

            let results = []
            
            rules.forEach(rule => {
                

                let result = true
                if(rule == 'checked'){
                    result = validationRules.rules[rule](input)
                }
                else{
                    result = validationRules.rules[rule](input.value)
                }

                if (result !== true) {
                    inputElem.classList.add("input-invalid");
                }
                results.push(result)
            });


            results.forEach(result => {
                if(result.error){
                    let error_html = document.createElement('span');
                    error_html.innerText = result.message
                    error_html.classList.add('error-message')
                    inputElem.closest('.input-container').insertBefore(error_html, inputElem.parent)
                }
            })
        
            return results
        });

        let errors = []

        validate.forEach(validate_input => {
            errors.push(validate_input.some(value => value.error == true))
        });

        if(errors.every(value => value == false)){
            valid = true
        }

        if(validate.length == 0){
            valid = true
        }
        
        return valid
    }

    const validationRules = {
        rules: {
            required: function (field) {
                if (field) {
                    return { error: false, message: ''}
                } else {
                    return { error: true, message: 'Este campo es requerido'}
                }
            },
            checked : function (field) {
                if (field && field.checked) {
                    return { error: false, message: ''}
                } else {
                    return { error: true, message: 'Elegí una opción'}
                }
            },
            email: function (field) {
                const rgx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (rgx.test(field)) {
                    return { error: false, message: ''}
                } else {
                    return { error: true, message: 'El email no es válido.'}
                }
            },
            minlength: function (field, value = 8) {
                if (field && field.length >= value) {
                    return { error: false, message: ''}
                } else {
                    return { error: true, message: `Ingresa al menos ${value} letras.`}
                }
            }
        },
        error: true,
        message: ''
    }
    
    return validate()
}

export { GoToPage, Validate }


