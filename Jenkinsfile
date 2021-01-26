pipeline {

   agent { dockerfile true }
  
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
            input message: 'Finished using the web site? (Click "Proceed" to continue)'
          }
      }    
  }
}
