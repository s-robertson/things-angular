#!/bin/bash
set -x
if [ $TRAVIS_BRANCH == 'master' ] ; then
    eval "$(ssh-agent -s)"
    chmod 600 ~\/.ssh/things-deploy
    ssh-add ~\/.ssh/things-deploy

    git remote add deploy "things@robotscostrent.com:/var/www/things"
    git config user.name "Travis CI"
    git config user.email "srobertson203@gmail.com"
    git push --force deploy master
    echo "Deployed."
else
    echo "Not deploying, since this branch isn't master."
fi
