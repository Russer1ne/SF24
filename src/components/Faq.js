import React from "react";

import "../styles/Faq.css";

class Faq extends React.Component {
  render() {
    return (
      <>
        <section className="faq__frame">
          <div className="content__container is-align-center">
            <img src="src/img/faq_image.svg" alt="FAQ Hero Image" />
            <h1>Частые вопросы</h1>
            <p className="faq__frame-p">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
            <div className="faq__frame-accordeon">
              <div className="faq__row">
                <div className="faq__row-question">
                  <div className="faq__row-question-text">Могу ли я отменить бронь?</div>
                  <img className="is-shown" src="src/img/faq_arrow_down.svg" alt="Arrow Down" />
                  <img className="is-hidden" src="src/img/faq_arrow_up.svg" alt="Arrow Up" />
                </div>
                <div className="faq__row-answer is-hidden"></div>
              </div>
              <div className="faq__row">
                <div className="faq__row-question">
                  <div className="faq__row-question-text">Могу ли я отменить бронь?</div>
                  <img className="is-shown" src="src/img/faq_arrow_down.svg" alt="Arrow Down" />
                  <img className="is-hidden" src="src/img/faq_arrow_up.svg" alt="Arrow Up" />
                </div>
                <div className="faq__row-answer is-hidden"></div>
              </div>
              <div className="faq__row">
                <div className="faq__row-question">
                  <div className="faq__row-question-text">Могу ли я вернуть деньги, если не подошёл автомобиль?</div>
                  <img className="is-shown" src="src/img/faq_arrow_down.svg" alt="Arrow Down" />
                  <img className="is-hidden" src="src/img/faq_arrow_up.svg" alt="Arrow Up" />
                </div>
                <div className="faq__row-answer is-hidden"></div>
              </div>
              <div className="faq__row">
                <div className="faq__row-question">
                  <div className="faq__row-question-text">Что делать, если случилось ДТП?</div>
                  <img className="is-shown" src="src/img/faq_arrow_down.svg" alt="Arrow Down" />
                  <img className="is-hidden" src="src/img/faq_arrow_up.svg" alt="Arrow Up" />
                </div>
                <div className="faq__row-answer is-hidden"></div>
              </div>
              <div className="faq__row">
                <div className="faq__row-question is-open">
                  <div className="faq__row-question-text">Могу ли я оставить автомобиль в удобном для меня месте?</div>
                  <img className="is-hidden" src="src/img/faq_arrow_down.svg" alt="Arrow Down" />
                  <img className="is-shown" src="src/img/faq_arrow_up.svg" alt="Arrow Up" />
                </div>
                <div className="faq__row-answer is-shown">
                  Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили.
              </div>
              </div>
              <div className="faq__row">
                <div className="faq__row-question">
                  <div className="faq__row-question-text">Что делать, если собственник просит заплатить ему напрямую?</div>
                  <img className="is-shown" src="src/img/faq_arrow_down.svg" alt="Arrow Down" />
                  <img className="is-hidden" src="src/img/faq_arrow_up.svg" alt="Arrow Up" />
                </div>
                <div className="faq__row-answer is-hidden"></div>
              </div>
              <div className="faq__row">
                <div className="faq__row-question">
                  <div className="faq__row-question-text">Должен ли я заправлять автомобиль?</div>
                  <img className="is-shown" src="src/img/faq_arrow_down.svg" alt="Arrow Down" />
                  <img className="is-hidden" src="src/img/faq_arrow_up.svg" alt="Arrow Up" />
                </div>
                <div className="faq__row-answer is-hidden"></div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

export default Faq;