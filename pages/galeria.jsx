import React, { useRef, useState } from "react";
import Head from "next/head";
import PageTitle from "../components/PageTitle";
import projectsList from "../public/projects";
import styles from "../styles/pages/Galeria.module.scss";

function Galeria() {
  const [projects, setProjets] = useState(projectsList);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const fullImage = useRef(null);
  const imgRef = useRef(null);
  const selectRef = useRef(null);

  function showImage(id) {
    const filteredImg = projects.find((p) => p.id === id);
    const src = filteredImg.img;

    fullImage.current.style.display = "flex";
    imgRef.current.src = src;
  }

  function hideImage() {
    fullImage.current.style.display = "none";
  }

  function selectOnChange() {
    const type = selectRef.current.value;
    if (type === "all") {
      return setFilteredProjects(projects);
    }
    setFilteredProjects(projects.filter((p) => p.type === type));
  }

  return (
    <div className={styles.containerWrapper}>
      <Head>
        <title>Galeria | NEXTLEVEL44</title>
      </Head>
      <PageTitle title="GALERIA" />
      <select ref={selectRef} onChange={selectOnChange} name="type">
        <option value="all">Todos</option>
        <option value="house">Casa</option>
        <option value="yacht">Iate</option>
      </select>
      <div className={styles.container}>
        <ul>
          {filteredProjects.map((p) => (
            <li
              key={p.id}
              onClick={() => {
                showImage(p.id);
              }}
              className={styles.imgWrapper}
            >
              <img key={p.id} src={p.img} />
            </li>
          ))}
        </ul>
      </div>
      <div
        onClick={hideImage}
        ref={fullImage}
        className={styles.fullScreenImage}
      >
        <img ref={imgRef} src="" alt="Imagem do projeto" />
      </div>
    </div>
  );
}

export default Galeria;
