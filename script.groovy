def buildApp() {
    echo "building Image"
    docker build -t portfolio_app:lts .
}


def deployApp() {
    echo "Pushing"
    echo "${APP_VERSION}"
    echo "${SERVER_CREDENTIALS}"
    echo "${params.executeTests}"
}

return this
