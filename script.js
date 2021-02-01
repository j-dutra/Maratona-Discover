const Modal = { // mudar função toggle
    open(){
        // Abrir Modal
        // Adicionar a class active ao modal

        document.
            querySelector(".modal-overlay")
            .classList
            .add('active')
    },
    close(){
        // Fechar o modal
        // Remover a classe active do modal

        document.querySelector(".modal-overlay")
        .classList
        .remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: "luz"
        amount: -50000,
        date: "23/01/2021"
    },
    {
        id: 2,
        description: "Criação Website"
        amount: 500000,
        date: "23/01/2021"
    },
    {

        id: 3,
        description: "Internet"
        amount: -20000,
        date: "23/01/2021"
    }
]

const Transaction = {
    incomes(){
        // somar as entradas
    }
    expanse(){
        // Calcular as saidas
    }
    total(){
        // Entradas - saidas
    }
}

// preciso substituir os dados do HTML como os dados do Js
// pegar as minhas transações do meu 
// objeto aqui no javascript
// e colocar no lá no HTML

const DOM = {
    addTransaction(transaction, index){
        const tr = document.createElement("tr")
    },


    innerHTMLTransaction(){
        const html = `
    
        <td class="description">Luz</td>
        <td class="expanse">- R$ 500,00</td>
        <td class="date">23/01/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover Transação">
        </td>
        
        `
    }
}