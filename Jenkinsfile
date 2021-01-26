pipeline {

  agent{
        docker {
            image 'node:12.7-alpine'
            args '-p 4200:4200'
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
            sh 'npm run start'            
          }
      }    
  }
}
