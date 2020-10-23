import React from "react";
import "../styles/AboutTeam.css";

class AboutTeam extends React.Component {
  render() {
    return (
      <>
        <section className="team__frame">
          <div className="content__container is-align-center">
            <h2 className="team__frame-h2">Команда</h2>
            <div className="team__frame-wrapper">
              <div className="team__frame-item">
                <img src="/src/img/about_us_team_ivanov.png" alt="Иван Иванов" />
                <div className="team__frame-item-name">Иван Иванов</div>
                <div className="team__frame-item-position">CEO</div>
              </div>
              <div className="team__frame-item">
                <img
                  src="/src/img/about_us_team_smirnov.png"
                  alt="Алексей Смирнов"
                />
                <div className="team__frame-item-name">Алексей Смирнов</div>
                <div className="team__frame-item-position">Frontend-разработчик</div>
              </div>
              <div className="team__frame-item">
                <img src="/src/img/about_us_team_yarcev.png" alt="Денис Ярцев" />
                <div className="team__frame-item-name">Денис Ярцев</div>
                <div className="team__frame-item-position">Backend-разработчик</div>
              </div>
              <div className="team__frame-item">
                <img
                  src="/src/img/about_us_team_morozov.png"
                  alt="Николай Морозов"
                />
                <div className="team__frame-item-name">Николай Морозов</div>
                <div className="team__frame-item-position">Дизайнер</div>
              </div>
              <div className="team__frame-item">
                <img src="/src/img/about_us_team_deeva.png" alt="Ирина Деева" />
                <div className="team__frame-item-name">Ирина Деева</div>
                <div className="team__frame-item-position">Копирайтер</div>
              </div>
              <div className="team__frame-item">
                <img
                  src="/src/img/about_us_team_strelkova.png"
                  alt="Мария Стрелкова"
                />
                <div className="team__frame-item-name">Мария Стрелкова</div>
                <div className="team__frame-item-position">SMM</div>
              </div>
            </div>
          </div>
        </section>

      </>
    )
  }
}

export default AboutTeam;