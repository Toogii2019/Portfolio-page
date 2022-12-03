
def gv

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
    stage("init") {
      steps {
        script {
          gv = load "script.groovy"
        }
      }
    }
    stage("build") {
      steps {
        script {
          gv.buildApp()
        }
      }
    }
    stage("Deploy") {
      // Only deploy if the branch is master          
      when {
        expression {
          BRANCH_NAME == 'jenkins_and_docker'
        }
      }
      steps {
        script {
          echo "Deploying for ${BRANCH_NAME}"
          gv.deployApp()
        }
      }
    }
  }
}
