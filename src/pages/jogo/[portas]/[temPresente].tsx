import { useEffect, useState } from "react"
import styles from "../../../styles/jogo.module.css"
import Porta from '../../../../components/Porta'
import { ataualizarPortas, criarPortas } from "../../../../functions/portas"
// import { ataualizarPortas, criarPortas } from "../../functions/portas"
import Link from "next/link";
import { useRouter } from "next/router";



export default function jogo() {
    const router = useRouter()
    // usst
    
    const [valido, setValido] = useState(false)
    const [portas, setPortas] = useState([])

    console.log(router?.query)

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        const qntPortasValidas = portas >= 3 && portas <= 100
        const temPresenteValido = temPresente >= 1 && temPresente <= portas

        setValido(qntPortasValidas && temPresenteValido)
    }, [portas])

    useEffect(() => {
        const portas = +router.query.portas
        const temPresente = +router.query.temPresente

        setPortas(criarPortas(portas, temPresente))
    }, [router?.query])


    // +router.query.portas.
    // +router.query.temPresente

  // console.log(criarPortas(3,2))
    function renderizarPortas() {
        return valido && portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(ataualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {valido ?
                renderizarPortas() :
                <h2>Valores invalidos!</h2>
            }
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
  )
}