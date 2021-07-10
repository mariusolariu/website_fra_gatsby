#!/bin/bash
gatsby build
rm -rf /Users/mariusolariu/code/website_fra_public/*
cp -R ./public/ /Users/mariusolariu/code/website_fra_public/
cd /Users/mariusolariu/code/website_fra_public
git add .
git commit -m "update"
git push --force-with-lease
