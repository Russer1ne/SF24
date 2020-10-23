import React from "react";
import "../styles/AboutContacts.css";

class AboutContacts extends React.Component {
  render() {
    return (
      <>
        <section className="contacts__frame is-grey">
          <div className="content__container is-align-center">
            <h2 className="contacts__frame-h2">Контакты</h2>
            <div className="contacts__frame-wrapper">
              <div className="contacts__frame-item">
                <div className="contacts__frame-title">Электронная почта</div>
                <a href="#">drive@skillfactory.com</a>
              </div>
              <div className="contacts__frame-divider">
                <img src="/src/img/about_us_contacts_divider.svg" alt="Divider" />
              </div>
              <div className="contacts__frame-item">
                <div className="contacts__frame-title">Телефон</div>
                <a href="#">+7 912 123-45-67</a>
              </div>
            </div>
          </div>
        </section>

      </>
    )
  }
}

export default AboutContacts;