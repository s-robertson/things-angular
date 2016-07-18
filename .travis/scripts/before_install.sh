#!/bin/bash
mkdir -p ~\/.ssh

openssl aes-256-cbc -K $encrypted_14c735dec5a9_key -iv $encrypted_14c735dec5a9_iv -in .travis/things-deploy.enc -out ~\/.ssh/things-deploy -d

export DISPLAY=:99.0
sh -e /etc/init.d/xvfb start

echo "========================"
which google-chrome
echo "========================"
