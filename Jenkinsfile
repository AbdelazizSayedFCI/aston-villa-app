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

docker build -t appss .

	      }
	    }
    }
}