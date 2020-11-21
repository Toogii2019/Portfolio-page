import React from 'react';
import '../style.css';
import AppRender from './App_info';
export const Portfolio = () => {
    

    const AppInfo = [
      {
        name: 'Password Generator App', description: 'Generates Highly Secure Passwords', img: "/img/pass_gen.gif", githubLink: "https://github.com/Toogii2019/Password_Generator/", deployedLink: "https://toogii2019.github.io/Password_Generator/",
      },
      {
        name: 'Code Quiz App', description: 'Choose between HTML, CSS and Javascript quizes and test your skill', img: "/img/code_quiz.gif", githubLink: "https://github.com/Toogii2019/code_quiz/", deployedLink: "https://toogii2019.github.io/code_quiz/",
      },
      {
        name: 'Trip Advisor App', description: 'Helps planning your trip', img: "/img/triply.gif", githubLink: "https://github.com/Toogii2019/Trip_Advisor_App", deployedLink: "https://toogii2019.github.io/Trip_Advisor_App/",
      },
      {
        name: 'Weather dashboard app', description: 'Shows weather information on selected location', img: "/img/weather_dashboard.gif", githubLink: "https://github.com/Toogii2019/weather_dashboard/", deployedLink: "https://toogii2019.github.io/weather_dashboard/",
      },
      {
        name: 'Business Day Planner app', description: 'Helps organize business day hourly plan', img: "/img/work_day_planner.gif", githubLink: "https://github.com/Toogii2019/day_planner/", deployedLink: "https://toogii2019.github.io/day_planner/",
      },
      {
        name: 'Note Taker App', description: 'Simple note taker uses backend storage', img: "/img/note_taker.gif", githubLink: "https://github.com/Toogii2019/note_taker/", deployedLink: "https://dry-ocean-49147.herokuapp.com/",
      },
      {
        name: 'Halloween virtual activity app', description: 'Allows users to have fun during pandemic online', img: "/img/halloween_online.gif", githubLink: "https://github.com/Toogii2019/trick_or_treat", deployedLink: "https://trick-or-treat-2020.herokuapp.com/",
      },
      {
        name: 'Safe Space App', description: 'Allow users to get together and share their thoughts safely', img: "/img/safe_space.gif", githubLink: "https://github.com/Toogii2019/safe_space/", deployedLink: "https://safe-space-2020.herokuapp.com/member",
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
