import React from "react";
import "../styles/Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="footer__copyright">© SkillDrive Inc. 2020</div>
          <a className="is-animated" href="#"
          ><img src="/src/img/vk_logo.svg" alt="ВКонтакте"
            /></a>
          <a className="is-animated" href="#"
          ><img src="/src/img/instagram_logo.svg" alt="Instagram"
            /></a>
          <a className="is-animated" href="#"
          ><img src="/src/img/fb_logo.svg" alt="Facebook"
            /></a>
        </footer>
      </>
    )
  }
}

export default Footer;