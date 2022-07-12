import React from "react";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import styles from "../styles/pages/AreaDoCliente.module.scss";
import ProjectProcess from "../components/ProjectProcess";

function clientArea() {
  return (
    <>
      <Head>
        <title>Área do Cliente | NEXTLEVEL44</title>
      </Head>
      <div>
        <PageTitle title="ÁREA DO CLIENTE" />
      </div>
      <div className={styles.container}>
        <p className={styles.welcome}>Bem vindo, Lucas da silva.</p>
        <p className={styles.projectsQty}>
          Você possui <span>3</span> projetos, <span>2</span> em andamento.{" "}
        </p>
        <p className={styles.title}>Projetos</p>
        <ProjectProcess
          title="Sistema de Iluminação"
          doneTasks={3}
          totalTasks={7}
        />
        <ProjectProcess title="Sistema de Som" doneTasks={2} totalTasks={4} />
        <ProjectProcess
          title="Instação das Cortinas"
          doneTasks={8}
          totalTasks={8}
        />
      </div>
    </>
  );
}

export default clientArea;
