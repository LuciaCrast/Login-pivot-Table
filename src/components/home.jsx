import { Link } from "react-router-dom";
import Header from "./header";
import "./home.scss";

function Home() {
  const onSubmitForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <body className="body">
      <Header />
      <main className="main">
        <article className="article">
          <h2 className="article__title"> Contenido variado... </h2>
          <p className="article__paragraph">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            officia ad harum enim eos tempore quis, illum laudantium, sequi
            maxime aliquam numquam voluptatum quae nostrum doloribus temporibus
            obcaecati. Perspiciatis, ratione. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Incidunt aliquid repellat sequi eius
            et, hic sit voluptatem, quas quam iste consequatur quisquam culpa
            repudiandae adipisci nihil modi? Ipsum, natus suscipit.
          </p>
        </article>
        <form onSubmit={onSubmitForm} className="form">
          <h2 className="form__title">¡Bienvenido/a!</h2>
          <p className="form__p">Inserte nombre de usuario/a </p>
          <input
            className="form__input"
            type="text"
            required
            placeholder="Ej: user04"
          />
          <p className="form__p">Inserte contraseña </p>
          <input type="password" required className="form__input" />

          <Link to="/">
            <p className="form__question"> ¿Olvidó su contraseña?</p>
          </Link>
          <Link to="/">
            <p className="form__question"> ¿No tiene cuenta? Regístrese</p>
          </Link>
          <Link to="/principal" className="form__link">
            <input type="submit" value="Acceder" className="form__button" />
          </Link>
        </form>
      </main>
    </body>
  );
}
export default Home;
