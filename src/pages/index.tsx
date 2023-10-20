import { useState } from "react";
import Porta from "../../components/Porta";
import PortaModel from "../../model/porta";
import { ataualizarPortas, criarPortas } from "../../functions/portas";
import Card from "../../components/Card";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";
import EntradaNumerica from "../../components/EntradaNumerica";


export default function Formulario() {

  const [qntPortas, setQntPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Reward door</h1>
        </Card>
        <Card>
          <EntradaNumerica text="Qnt de portas?" value={qntPortas} onChange={novaQnt => setQntPortas(novaQnt)} />
        </Card>
      </div>

      <div>
        <Card>
          <EntradaNumerica text="porta com presente?" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/${qntPortas}/${comPresente}`}>
            <h2 className={styles.link}>iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
