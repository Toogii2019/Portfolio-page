import React, {useState} from 'react';
import '../style.css';
export const Portfolio = (match) => {

    return (
        <div className="showcase">
        <div className="portfolio-container">
            <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                  <img src="/img/pass_gen.gif" alt="password generator app image" className="my-portfolio-images"></img>
                  </div>
                  <div className="flip-box-back">
                    <h2>Password Generator App</h2>
                    <p>Generates highly secure password</p>
                    <a className="github-link" href="https://github.com/Toogii2019/Password_Generator/"  target="_blank">Github Link</a>
                    <a className="deployed-link" href="https://toogii2019.github.io/Password_Generator/"  target="_blank">Deployed Link</a>

                  </div>
                </div>
              </div>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                  <img src="/img/code_quiz.gif" alt="Code quiz app image" className="my-portfolio-images"></img>
                  </div>
                  <div className="flip-box-back">
                    <h2>Code Quiz App</h2>
                    <p>Choose between HTML, CSS and Javascript quizes and test your skill</p>
                    <a className="github-link" href="https://github.com/Toogii2019/code_quiz/" target="_blank">Github Link</a>
                    <a className="deployed-link" href="https://toogii2019.github.io/code_quiz/"  target="_blank">Deployed Link</a>

                  </div>
                </div>
              </div>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                  <img src="/img/triply.gif" alt="Triply like app image" className="my-portfolio-images"></img>
                  </div>
                  <div className="flip-box-back">
                    <h2>Trip Advisor App</h2>
                    <p>Helps planning your trip</p>
                    <a className="github-link" href="https://github.com/Toogii2019/Project1/" target="_blank">Github Link</a>
                    <a className="deployed-link" href="https://toogii2019.github.io/Project1/"  target="_blank">Deployed Link</a>

                  </div>
                </div>
              </div>
              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                  <img src="/img/weather_dashboard.gif" alt="Weather info app image" className="my-portfolio-images"></img>
                  </div>
                  <div className="flip-box-back">
                    <h2>Weather dashboard app</h2>
                    <p>Shows weather information on selected location</p>
                    <a className="github-link" href="https://github.com/Toogii2019/weather_dashboard/" target="_blank">Github Link</a>
                    <a className="deployed-link" href="https://toogii2019.github.io/weather_dashboard/"  target="_blank">Deployed Link</a>
                  </div>
                </div>
              </div>

              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                  <img src="/img/work_day_planner.gif" alt="Work day calendar app image" className="my-portfolio-images"></img>
                  </div>
                  <div className="flip-box-back">
                    <h2>Business Day Planner app</h2>
                    <p>Helps organize business day hourly plan</p>
                    <a className="github-link" href="https://github.com/Toogii2019/day_planner/" target="_blank">Github Link</a>
                    <a className="deployed-link" href="https://toogii2019.github.io/day_planner/"  target="_blank">Deployed Link</a>
                  </div>
                </div>
              </div>


              <div className="flip-box">
                <div className="flip-box-inner">
                  <div className="flip-box-front">
                  <img src="/img/note_taker.gif" alt="Note taking app image" className="my-portfolio-images"></img>
                  </div>
                  <div className="flip-box-back">
                    <h2>Business Day Planner app</h2>
                    <p>Helps organize business day hourly plan</p>
                    <a className="github-link" href="https://github.com/Toogii2019/note_taker/" target="_blank">Github Link</a>
                    <a className="deployed-link" href="https://dry-ocean-49147.herokuapp.com/notes"  target="_blank">Deployed Link</a>
                  </div>
                </div>
              </div>

        </div>
    </div>
    )
    
}