import { useState } from "react";
import Porta from "../../components/Porta";
import PortaModel from "../../model/porta";
import { ataualizarPortas, criarPortas } from "../../functions/portas";
import Card from "../../components/Card";
import styles from "../styles/Formulario.module.css"
import Link from "next/link";


export default function Formulario() {

  return (
    <div className={styles.formulario}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Reward door</h1>
        </Card>
        <Card></Card>
      </div>
      <div>
        <Card></Card>
        <Card bgcolor="#28a085">
          <Link href={`/jogo/4/2`}>
            <h2 className={styles.link}>iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
