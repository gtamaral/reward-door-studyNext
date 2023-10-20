import { useState } from "react"
import styles from "../styles/jogo.module.css"
import Porta from '../../components/Porta'
import { ataualizarPortas, criarPortas } from "../../functions/portas"
// import { ataualizarPortas, criarPortas } from "../../functions/portas"
import Link from "next/link";

export default function jogo() {

    const [portas, setPortas] = useState(criarPortas(10,2))

  // console.log(criarPortas(3,2))
    function renderizarPortas() {
        return portas.map(porta => {
            return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(ataualizarPortas(portas, novaPorta))} />
        })
    }

    return (
        <div id={styles.jogo}>
            <div className={styles.portas}>
                {renderizarPortas()}
            </div>
            <div className={styles.botoes}>
                <Link href="/">
                    <button>Reiniciar jogo</button>
                </Link>
            </div>
        </div>
  )
}