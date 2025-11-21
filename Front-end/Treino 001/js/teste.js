let modo_escuro = localStorage.getItem('modo_escuro')
const MUDAR_TEMA = document.getElementById('mudar_tema')

function habilitarModoEscuro(){
    document.body.classList.add('modo_escuro')
    localStorage.setItem('modo_escuro', 'active')
}

function desabilitarModoEscuro(){
    document.body.classList.remove('modo_escuro')
    localStorage.setItem('modo_escuro', null)
}

if(modo_escuro === 'active') habilitarModoEscuro()

MUDAR_TEMA.addEventListener("click", () => {
    modo_escuro = localStorage.getItem('modo_escuro')
    if(modo_escuro !== "active"){
        habilitarModoEscuro()
    }
    else{
        desabilitarModoEscuro()
    }
})