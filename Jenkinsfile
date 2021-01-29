pipeline {


  
  stages {
         docker {
            image 'node:12.7-alpine'
            args '-p 4200:4200'
        }
      stage('Build') { 
          steps {                     
            sh 'npm run build'                 
          }
      }    
  }
}
