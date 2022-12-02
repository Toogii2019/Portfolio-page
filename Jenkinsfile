
pipeline {
  agent any 
  environment {
    APP_VERSION = '1.3.0'
    SERVER_CREDENTIALS = credentials('github_credentials')
  }
  stages {
    stage("build") {
      steps {
        
          withCredentials([
            usernamePassword(credentials: 'github_credentials', usernameVariable: USER, passwordVariable: PASS)
          ])
          echo "npm i --save"
          sh "npm i --save"
          
          echo "cd client && npm i --save"
          sh "cd client && npm i --save"
      }
    }
    stage("Deploy") {
      steps {
        echo "Deploying"
        sh "npm run deploy"
      }
    }
  }
}
