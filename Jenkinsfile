
CODE_CHANGES = getGitChanges()
pipeline {
  agent any 
  environment {
    NEW_VERSION = '1.3.0'
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
