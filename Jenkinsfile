
def gv

pipeline {
  agent any 
  environment {
    APP_VERSION = '1.3.0'
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
          withCredentials([usernamePassword(credentialId: '225185c5-f79f-45f4-9f42-d44c75e422e8', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
            sh "docker login dashdavaa/toogii:lts ."
            sh "echo ${PASS} | docker login -u ${USER} --password-stdin"
            sh 'docker push dashdavaa/toogii:lts'
          }
     
//           gv.buildApp()
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
