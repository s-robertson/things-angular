#!/bin/bash
mkdir -p ~\/.ssh
openssl aes-256-cbc -K $encrypted_4ad8f554306a_key -iv $encrypted_4ad8f554306a_iv -in .travis/deploy.enc -out ~\/.ssh/things-deploy -d
openssl aes-256-cbc -K $encrypted_4ad8f554306a_key -iv $encrypted_4ad8f554306a_iv -in .travis/host.enc -out ~\/.ssh/known_hosts -d
