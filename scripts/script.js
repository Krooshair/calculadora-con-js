let number
let number_save = []
let operadores = ['+', '-', 'x', '/']
const OPERADOR = document.getElementById('operacion')
const BUTTONS = document.querySelectorAll('input')
const INPUT = document.querySelector('.numeros')
const RESULT = document.querySelector('.resultado')
const CLEAR = document.getElementById('limpiar')
// const IGUAL = document.getElementById('igual') Se decidio no usarlo y se remplazo con un '.'
const SUMAR = document.getElementById('sumar')
const RESTAR = document.getElementById('restar')
const MUILTIPLICAR = document.getElementById('multiplicar')
const DIVIDIR = document.getElementById('dividir')

BUTTONS.forEach(e => {
    e.addEventListener('click', f => {
        if (INPUT.value.length >= 7 && INPUT.value.length < 12) {
            INPUT.classList.add('text-m')
        } else if (INPUT.value.length >= 12) {
            INPUT.classList.remove('text-m')
            INPUT.classList.add('text-s')
        }else{
            INPUT.classList.remove('text-m')
            INPUT.classList.remove('text-s')
        }
        return (INPUT.value += f.target.value)
    })
})

CLEAR.addEventListener('click', () => {
    INPUT.value = ''
    RESULT.value = ''
    OPERADOR.value = ''
    number_save = []
})

SUMAR.addEventListener('click', () => {
    OPERADOR.value = '+'
    if (number_save.length <= 1) {
        number_save.push(INPUT.value)
        console.log(number_save)
    }
    if (!RESULT.value) {
        RESULT.value = INPUT.value
        INPUT.value = ''
    } else {
        RESULT.value = Number(RESULT.value) + Number(INPUT.value)
        INPUT.value = ''
    }
    if (number_save.length > 1) {
        number_save.push(RESULT.value)
        number_save.splice(0, 2)
        console.log(number_save)
    }
})

RESTAR.addEventListener('click', () => {
    OPERADOR.value = '-'
    if (!RESULT.value) {
        number_save.push(Number(INPUT.value))
        INPUT.value = ''
        if (number_save.length > 1) {
            number_save.sort((a, b) => b - a)
            let resta = number_save.reduce((a, e) => {
                return a - e
            })
            RESULT.value = Math.round(resta * 100) / 100
        }
    } else {
        RESULT.value = Math.round((Number(RESULT.value) - Number(INPUT.value)) * 100) / 100
        INPUT.value = ''
    }
})

MUILTIPLICAR.addEventListener('click', () => {
    OPERADOR.value = 'x'
    if (!RESULT.value) {
        number_save.push(Number(INPUT.value))
        INPUT.value = ''
        if (number_save.length === 2) {
            let multiplicacion = number_save.reduce((a, e) => {
                return a * e
            })
            RESULT.value = Math.round(multiplicacion * 100) / 100
        }
    } else {
        RESULT.value = Math.round(Number(RESULT.value) * Number(INPUT.value) * 100) / 100
        INPUT.value = ''
    }
})

DIVIDIR.addEventListener('click', () => {
    OPERADOR.value = '/'
    if (!RESULT.value) {
        number_save.push(Number(INPUT.value))
        INPUT.value = ''
        if (number_save.length > 1) {
            let resta = number_save.reduce((a, e) => {
                if (e !== 0) {
                    return a / e
                } else {
                    alert('NO es posible dividir entre 0')
                    return 0
                }
            })
            RESULT.value = Math.round(resta * 100) / 100
        }
    } else {
        if (INPUT.value !== '0') {
            RESULT.value = Math.round((Number(RESULT.value) / Number(INPUT.value)) * 100) / 100
            INPUT.value = ''
        } else {
            alert('NO se puede dividir entre 0')
            INPUT.value = ''
        }
    }
})
