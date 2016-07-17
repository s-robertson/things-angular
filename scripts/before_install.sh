#!/bin/bash
mkdir -p ~\/.ssh
openssl aes-256-cbc -K $encrypted_4ad8f554306a_key -iv $encrypted_4ad8f554306a_iv -in things-deploy.enc -out ~\/.ssh/things-deploy -d
