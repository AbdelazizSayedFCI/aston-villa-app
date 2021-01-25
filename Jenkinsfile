pipeline {

  
    stages {
        stage('Build') { 
            steps {
              sh 'npm install'
                sh 'npm run build'             
            }
        }
        agent { dockerfile true }
        stage('Run') { 
            steps {
                         
            }
        }      
    }
}
