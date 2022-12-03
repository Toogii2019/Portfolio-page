def buildApp() {
    echo "building Image"
    sh "docker build -t portfolio_app:lts ."
}


def deployApp() {
    echo "Deploying"
    echo "${APP_VERSION}"
    echo "${params.executeTests}"
}

return this
