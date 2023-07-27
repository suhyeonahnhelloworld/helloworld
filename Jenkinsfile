#!groovy

node {
    stage('Checkout') {
        // Checkout the source code from SCM (e.g., Git)
        checkout scm
    }

    stage('Setup') {
        // Set npm registry and install dependencies
        sh 'npm config set registry http://registry.npmjs.org/'
        sh 'npm install'
    }

    stage('Mocha test') {
        // Run Mocha tests
        sh './node_modules/mocha/bin/_mocha'
    }

    stage('Cleanup') {
        // Prune npm dependencies and remove node_modules
        echo 'prune and cleanup'
        sh 'npm prune'
        sh 'rm -rf node_modules'
    }
}

