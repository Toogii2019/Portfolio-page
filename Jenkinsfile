
pipeline {
  agent any 
  environment {
    APP_VERSION = '1.3.0'
    SERVER_CREDENTIALS = credentials('github_credentials')
  }
  parameters {
    choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
    booleanParam(name: 'executeTests', defaultValue: true, description: '')
  }
  stages {
    stage("build") {
      steps {
        
//           withCredentials([usernamePassword(credentials: 'github_credentials', usernameVariable: USER, passwordVariable: PWD)]) {
//             echo "${USER} - ${PWD}"
//           }
          echo "npm i --save"
          sh "npm i --save"
          
          echo "cd client && npm i --save"
          sh "cd client && npm i --save"
          sh "npm run build"
      }
    }
    stage("Deploy") {
      steps {
        echo "Deploying"
        echo "${APP_VERSION}"
        echo "${SERVER_CREDENTIALS}"
        echo "${params.executeTests}"
      }
    }
  }
}
