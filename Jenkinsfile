pipeline {
  agent any 
  stages {
    stage("build") {
      steps {
        sh "npm i --save"
      }
      steps {
        sh "cd client && npm i --save"
      }
      steps {
        sh "npm run deploy"
      }
    }
    stage("Deploy") {
      steps {
        echo "Deploying"
      }
      
    }
  }
  posts {
    always {
      echo "Build completed"
    }
    failure {
      echo "Build failed"
    }
    success {
      echo "Build successful"
    }
  }
}
