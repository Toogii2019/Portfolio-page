def buildApp() {
    echo "npm i --save"
    sh "npm i --save"
    echo "cd client && npm i --save"
    sh "cd client && npm i --save"
    sh "npm run build"  
}


def deployApp() {
    echo "Deploying"
    echo "${APP_VERSION}"
    echo "${SERVER_CREDENTIALS}"
    echo "${params.executeTests}"
}

return this
