
pipeline {
  agent any 
  environment {
    NEW_VERSION = '1.3.0'
    SERVER_CREDENTIALS = credentials('github_credentials')
  }
  stages {
    stage("build") {
      steps {
          echo "npm i --save"
          echo "Version is ${NEW_VERSION}"
          echo "npm run deploy"
          echo "cd client && npm i --save"
      }
    }
    stage("Deploy") {
      steps {
        echo "Deploying"
      }
    }
  }
}
