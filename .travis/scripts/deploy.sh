#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    eval "$(ssh-agent -s)"

    ls -al ~/.ssh
    echo "=================================="

    cd dist
    git init

    chmod 600 ~/.ssh/things-deploy
    ssh-add ~/.ssh/things-deploy

    git add .
    git commit -m "Deployment"
    git remote add deploy "things@robotscostrent.com:/var/www/things"
    git config user.name "Travis CI"
    git config user.email "srobertson203@gmail.com"
    git push --force deploy master
else
    echo "Not deploying, since this branch isn't master."
fi
