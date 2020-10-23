import React from "react";
import "../styles/AboutHero.css";

class AboutHero extends React.Component {
  render() {
    return (
      <>
      <section className="hero__frame">
        <div className="content__container is-align-center">
          <div className="hero__frame-wrapper">
            <img src="/src/img/about_us_hero.svg" alt="Clipart Image" />
            <h1>О нас</h1>
            <p>
              Это учебный проект, созданный с целью получения боевого опыта в
              разработке настоящего живого веб-приложения. Этот сервис имитирует
              работу каршеринга, в котором можно не только арендовать
              автомобили, но и сдавать их в аренду.
            </p>
          </div>
        </div>
      </section>
      </>
    )
  }
}

export default AboutHero;