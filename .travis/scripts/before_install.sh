#!/bin/bash
mkdir -p ~\/.ssh

openssl aes-256-cbc -K $encrypted_14c735dec5a9_key -iv $encrypted_14c735dec5a9_iv -in .travis/things-deploy.enc -out ~\/.ssh/things-deploy -d
