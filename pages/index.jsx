import styles from "../styles/pages/Home.module.scss";
import Head from "next/head";
import Link from "next/link";

import SectionTitle from "../components/SectionTitle";
import ListItem from "../components/ListItem";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | NEXTLEVEL44</title>
        <meta
          name="description"
          content="Modernize o seu lar, automatize tarefas e simplifique processos."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img
        className={styles.steps}
        src="/img/icons/steps.svg"
        alt="Passos até o objetivo a ser atingido"
      />
      <h1>
        <span>AUTOMAÇÃO</span> RESIDENCIAL E DEMAIS <span>INTERIORES</span>
      </h1>
      <p className={styles.description}>
        Planejamos, instruimos e condicionamos junto com o cliente projetos para
        automação de luzes, som, projetores e demais partes do interior, fale
        com um de nossos profissionais para que possamos ajudá-lo a atingir seus
        objetivos.
      </p>
      <div className={styles.buttons}>
        <Link href="#contact">
          <button>
            <img src="/img/icons/talk.svg" alt="Ícone de telefone" />
            Fale com um profissional
          </button>
        </Link>
        <Link href="/galeria">
          <a>
            <button>
              <img src="/img/icons/images.svg" alt="Ícone de galeria" />
              Projetos
            </button>
          </a>
        </Link>
      </div>
      <SectionTitle
        src={"/img/icons/house.svg"}
        title={"Simplifique tarefas do dia a dia"}
      />
      <div className={styles.video}>
        <iframe
          src="https://www.youtube.com/embed/NjYTzvAVozo"
          title="Vídeo demonstração internet das coisas"
        />
      </div>
      <SectionTitle
        src={"/img/icons/tune.svg"}
        title={"Controle tudo pelo seu smartphone"}
      />
      <ListItem
        src={"/img/icons/curtains.svg"}
        title={"Automatize abrir e fechar cortinas "}
      />
      <ListItem
        src={"/img/icons/speaker.svg"}
        title={"Implemente alta tecnologia de som e acústica "}
      />
      <ListItem
        src={"/img/icons/ac.svg"}
        title={"Automatize a temperatura ambiente "}
      />
      <ListItem
        src={"/img/icons/movie.svg"}
        title={"Usufrua de um cinema em casa "}
      />
      <ListItem
        src={"/img/icons/blender.svg"}
        title={"Automatize equipamentos de cozinha "}
      />
      <ListItem
        src={"/img/icons/infinite.svg"}
        title={"Entre infinitas possibilidades"}
      />
      <SectionTitle src={"/img/icons/chat.svg"} title={"Depoimentos"} />
      <div className={styles.testimonials}>
        <ul>
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
          <Testimonial
            src={
              "https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            }
            name={"John Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor"
            }
          />
          <Testimonial
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            name={"Jane Doe"}
            message={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis, urna ac dictum volutpat, justo mauris finibus tortor, a vehicula magna orci ut nisl. Mauris hendrerit dui illa imperdiet."
            }
          />
        </ul>
      </div>
      <div id="contact"></div>
      <SectionTitle src={"/img/icons/phone.svg"} title={"Contato"} />
      <ListItem src={"/img/icons/dark-phone.svg"} title={"(11) 01234-1234"} />
      <ListItem src={"/img/icons/whatsapp.svg"} title={"(11) 98888-8888"} />
      <ListItem src={"/img/icons/mail.svg"} title={"luciano44@exemplo.com"} />
      <SectionTitle src={"/img/icons/tune.svg"} title={"Sobre"} />
      <p className={styles.about}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
        pariatur nam aliquid eaque labore soluta nobis repellendus fugiat et non
        officia iusto, autem nisi assumenda veniam reiciendis quidem quaerat
        aspernatur. Quos delectus iste sapiente, ea magni quisquam illo facilis
        magnam veniam eveniet adipisci dolorem facere excepturi rerum provident
        iure harum vel deserunt. Hic culpa fuga reiciendis provident debitis
        voluptatem! Ab expedita officia laudantium cupiditate enim nisi! Nobis
        placeat, ducimus est iste deserunt mollitia accusamus itaque illum iusto
        laudantium nisi id illo eum, dicta aut velit rerum atque animi? Dolore
        ducimus atque aliquam quis repellat dolores, animi similique
        reprehenderit aperiam ab.
      </p>
    </div>
  );
}
