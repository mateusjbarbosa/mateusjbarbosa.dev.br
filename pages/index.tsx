export default function Home() {
  return (
    <div>
      <main>
        <img
          src="/dev_photo.jpeg"
          alt="O desenvolvedor Mateus sentado com uma paisagem ao fundo"
        />
        <h1>
          Olá eu sou o <span>Mateus</span>
        </h1>
        <p>
          Tenho 23 anos e trabalho como desenvolvedor desde 2018. Sou bacharel
          em <span>Sistemas de Informação</span> e atualmente sou{" "}
          <span>Engenheiro de Software</span> e também professor na{" "}
          <span>Digital House Brasil</span>.
        </p>
      </main>

      <section>
        <h2>Projetos</h2>
        <div>
          <span>React</span>
          <span>Node.js</span>
          <span>React Native</span>
        </div>

        <div>
          <img src="#" alt="Thumb genérica de um projeto" />
          <p>Nome do projeto</p>
          <p>Lorem ipsum dolor sit amet, banana com café</p>
        </div>
      </section>
    </div>
  );
}
