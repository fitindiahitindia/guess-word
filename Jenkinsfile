pipeline {
    agent any

    stages {
        stage("Clone Code") {
            steps {
                echo "Cloning the code"
                git url:"https://github.com/fitindiahitindia/guess-word.git", branch:"master"
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
