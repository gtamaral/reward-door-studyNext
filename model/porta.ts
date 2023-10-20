export default class PortaModel {
    // # porque o atributo numero é um atributo privado
    #numero: number
    #temPresente: boolean
    #selecionada: boolean
    #aberta: boolean

    constructor(numero: number, temPresente = false, portaComPresente = false, aberta = false) {
        this.#numero = numero
        this.#temPresente = temPresente
        this.#selecionada = portaComPresente 
        this.#aberta = aberta 
    }

    get numero() {
        return this.#numero
    }

    get temPresente() {
        return this.#temPresente
    }

    get selecionada() {
        return this.#selecionada
    }

    get aberta() {
        return this.#aberta
    }
    get fechada() {
        return !this.#aberta
    }
    desselecionar() {
        const selecionada = false
        // retornando uma nova instancia da porta qnd o usuario quiser deselecionar tudo
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    alternarSelecao() {
        const selecionada = !this.selecionada
        // retornando uma nova instancia d eporta com o novo valor alterada do "selecionada"
        return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta)
    }

    abrir() {
        const aberta = true
        // retornando uma nova instancia da porta com o "aberta" como true
        return new PortaModel(this.numero, this.temPresente, this.selecionada, true)
    }
} 