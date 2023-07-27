#!groovy

node {
	stage 'Checkout'
		checkout scm
}

stage 'Setup'
	sh 'npm config set registry http://registry.npmjs.org/'
	sh 'npm init -yes'

stage 'Mocha test'
	sh './node_modules/mocha/bin/_mocha'

stage 'Cleanup'
	echo 'prune and cleanup'
	sh 'npm prune'
	sh 'rm node_modules -rf'
