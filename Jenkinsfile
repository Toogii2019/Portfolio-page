
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
  tools {
    maven: 'Maven'
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
      when {
        expression {
          BRANCH_NAME == 'master'
        }
      }
      input {
          message "Select the environment to deploy to"
          ok "Done"
          parameters {
            choice(name: 'ENV', choices: ['dev', 'staging', 'production'], description: '')
          }
      }
      steps {
        script {
          echo "Deploying to ${ENV}"
          gv.deployApp()
        }
      }
    }
  }
}
