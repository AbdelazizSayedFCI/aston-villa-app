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
			 //sh 'npm run e2e'   
		  	
		  }
		}
	}
    post {
        always {
			junit 'dist/**/*.xml'
            emailext body: 'A Test EMail', recipientProviders: [[$class: 'DevelopersRecipientProvider'], [$class: 'RequesterRecipientProvider']], subject: 'Test'
        }
    }	
	
}
