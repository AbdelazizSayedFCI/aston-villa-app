pipeline {
  agent none
  stages {
    stage('Build') 
    { 
      agent{
          docker {
              image 'node:12.7-alpine'
              args '-p 3000:3000'
          }
      }
      steps {        
        sh 'npm install'   
        sh 'npm run build'   
        dir('/usr/src/app/dist/aston-villa-app'){
          stash name: 'build artifact', includes '**'
        }
        
      }
    }
    stage('deliver') 
    { 
      agent{
          docker {
              image 'nginx:1.17.1-alpine'
              args '-p 4200:4200'
          }
      }
      steps {                     
        sh 'npm run start'                 
      }
    }        
  }
}
