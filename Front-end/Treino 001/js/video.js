// Código original de um vídeo

let modo_escuro = localStorage.getItem('modo_escuro')
const MUDAR_TEMA = document.getElementById('mudar_tema')

const habilitarModoEscuro = () => {
    document.body.classList.add('modo_escuro')
    localStorage.setItem('modo_escuro', 'active')
}

const desabilitarModoEscuro = () => {
    document.body.classList.remove('modo_escuro')
    localStorage.setItem('modo_escuro', null)
}

if(modo_escuro === 'active') habilitarModoEscuro()

MUDAR_TEMA.addEventListener("click", () => {
    modo_escuro = localStorage.getItem('modo_escuro')
    modo_escuro !== "active" ? habilitarModoEscuro() : desabilitarModoEscuro()
})