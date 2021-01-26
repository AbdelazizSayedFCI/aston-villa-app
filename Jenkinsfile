pipeline {

  agent{
        docker {
            image 'node:12.7-alpine'
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
      stage('Deliver') { 
          steps {
              sh 'npm i @angular/cli@7.1.4'            
            sh 'npm run'            
          }
      }    
  }
}
