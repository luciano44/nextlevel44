import React, { useRef, useEffect } from "react";
import styles from "../styles/components/ProjectProcess.module.scss";

function ProjectProcess({ title, doneTasks, totalTasks }) {
  const barRef = useRef(null);

  useEffect(() => {
    barRef.current.style.width = `${(100 / totalTasks) * doneTasks}%`;
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <img src="img/icons/gear.svg" alt="Ícone de engrenagem" />
        {title}
      </div>
      <div className={styles.percentage}>
        <div ref={barRef} className={styles.bar}></div>
        <p>{((100 / totalTasks) * doneTasks).toFixed(1)}%</p>
      </div>
      <div className={styles.tasksDone}>
        {doneTasks}/{totalTasks} Etapas concluídas
      </div>
    </div>
  );
}

export default ProjectProcess;
