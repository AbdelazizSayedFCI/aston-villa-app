pipeline {


  
  stages {

      stage('Build') { 
                 docker {
            image 'node:12.7-alpine'
            args '-p 4200:4200'
        }
          steps {                     
            sh 'npm run build'                 
          }
      }    
  }
}
