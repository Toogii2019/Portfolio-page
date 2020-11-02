import React from 'react';
import '../style.css';
import AppRender from './App_info';
export const Portfolio = (match) => {
    

    const AppInfo = [
      {
        name: 'Password Generator App', description: 'Generates Highly Secure Passwords', img: "/img/pass_gen.gif", githubLink: "https://github.com/Toogii2019/Password_Generator/", deployedLink: "https://toogii2019.github.io/Password_Generator/",
      },
      {
        name: 'Code Quiz App', description: 'Choose between HTML, CSS and Javascript quizes and test your skill', img: "/img/code_quiz.gif", githubLink: "https://github.com/Toogii2019/Password_Generator/", deployedLink: "https://toogii2019.github.io/Password_Generator/",
      },
      {
        name: 'Trip Advisor App', description: 'Helps planning your trip', img: "/img/triply.gif", githubLink: "https://github.com/Toogii2019/Password_Generator/", deployedLink: "https://toogii2019.github.io/Password_Generator/",
      },
      {
        name: 'Weather dashboard app', description: 'Shows weather information on selected location', img: "/img/weather_dashboard.gif", githubLink: "https://github.com/Toogii2019/Password_Generator/", deployedLink: "https://toogii2019.github.io/Password_Generator/",
      },
      {
        name: 'Business Day Planner app', description: 'Helps organize business day hourly plan', img: "/img/work_day_planner.gif", githubLink: "https://github.com/Toogii2019/Password_Generator/", deployedLink: "https://toogii2019.github.io/Password_Generator/",
      },
      {
        name: 'Note Taker App', description: 'Simple note taker uses backend storage', img: "/img/note_taker.gif", githubLink: "https://github.com/Toogii2019/Password_Generator/", deployedLink: "https://toogii2019.github.io/Password_Generator/",
      }
    ]

    return (
        <div className="showcase">
          <div className="portfolio-container">
              {AppInfo.map((info) => (
                <AppRender key={info.name} info={info}/>
              ))
              }
          </div>
        </div>
      )
    }