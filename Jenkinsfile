pipeline {
    agent any
    environment {
        IMAGE_NAME = 'guess-app'
        IMAGE_TAG = 'latest'
    }
    stages {
        stage("Clone Code") {
            steps {
                echo "Cloning the code"
                git url:"https://github.com/fitindiahitindia/guess-word.git", branch:"master"
            }
        }
        

        stage("Clean Up") {
            steps {
                script {
                    // Check if the image exists
                    def imageExists = sh(script: "docker images -q ${IMAGE_NAME}:${IMAGE_TAG}", returnStdout: true).trim()
                    if (imageExists) {
                        // Remove the existing image
                        sh "docker rmi -f ${IMAGE_NAME}"
                    }
                }
            }
        }
        
        stage("Building Code") {
            steps {
                echo "Building the code"
                sh "docker build -t guess-app ."
            }
        }
        stage("Push to image") {
            steps {
                echo "Pushing image to docker hub"
            }
        }
        stage("Deploy Code") {
            steps {
                echo "Deploying the code"
                sh "docker compose down && docker compose up -d"
            }
        }
            
    }
}
