pipeline {

   agent { dockerfile true }
  
  stages {

      stage('Deliver') { 
          steps {                     
            sh 'npm run start'      
            input message: 'Finished using the web site? (Click "Proceed" to continue)'
          }
      }    
  }
}
