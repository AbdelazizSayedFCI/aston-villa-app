pipeline {

  agent{
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
  }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install'                 
              sh 'npm run build'                 
            }
        }
      stage('Deliver')
      steps {
        sh 'npm i @angular/compiler-cli@7.1.4'
      }
    }
}
