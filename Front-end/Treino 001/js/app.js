// Código adaptado para o meu melhor entendimento

// Declaração de variáveis:
let modo_escuro = localStorage.getItem('modo_escuro')
const MUDAR_TEMA = document.getElementById('mudar_tema')

// Declaração de funções:
function habilitarModoEscuro(){
    document.body.classList.add('modo_escuro')
    localStorage.setItem('modo_escuro', 'active')
}

function desabilitarModoEscuro(){
    document.body.classList.remove('modo_escuro')
    localStorage.setItem('modo_escuro', null)
}

if(modo_escuro === 'active') habilitarModoEscuro()

// Ao clicar no botão, irá checar se o modo escuro está ativo ou não e executará a função correspondente
MUDAR_TEMA.addEventListener("click", () => {
    modo_escuro = localStorage.getItem('modo_escuro')
    if(modo_escuro !== "active"){
        habilitarModoEscuro()
    }
    else{
        desabilitarModoEscuro()
    }
})