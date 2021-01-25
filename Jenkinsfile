pipeline {
agent { dockerfile true }
  
    stages {
        stage('Build') { 
            steps {
                sh 'npm run build'
              sh 'npm run'
            }
        }
    }
}
