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
script {
dockerImage = docker.build 'sss'
}
	      }
	    }
    }
}