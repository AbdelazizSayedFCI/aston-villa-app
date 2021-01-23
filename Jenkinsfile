pipeline {
    agent any
    stages {
        stage('Example') {
            steps {
		 echo 'ss'
            }
	}
   	 stage('Docker Build') {
	      agent any
	      steps {
		sh 'docker build -t av-app-image .'
	      }
	    }
    }
}