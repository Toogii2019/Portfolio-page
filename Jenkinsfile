pipeline {
  agent any 
  stages {
    stage("build") {
      steps {
        npm i --save
      }
      steps {
        cd client && npm i --save
      }
      steps {
        npm run deploy
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
