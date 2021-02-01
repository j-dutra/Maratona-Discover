const Modal = {
    open(){
        // Abrir Modal
        // Adicionar a class active ao modal
        document.querySelector(".modal-overlay")
        .classList.add('active')
    },
    close(){
        // Fechar o modal
        // remover a classe active do modal
        document.querySelector(".modal-overlay")
        .classList.remove('active')
    }
}