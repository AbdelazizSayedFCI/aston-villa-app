pipeline {
  agent { dockerfile true }
	stages {
		stage('Build') {       
		  steps {       
        sh 'npm install'    
		  	sh 'npm run build'                             
		  }
		}
		stage('Test') {       
		  steps {       
		  	sh 'npm run test'       
		  	sh 'npm run lint'   
			junit 'dist/**/*.xml'
		  }
		}
	}
}
