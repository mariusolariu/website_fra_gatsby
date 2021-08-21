#!/bin/bash
## gatsby build

rm -rf /Users/marius_home/code/projects/public_website_fra 
echo "1"

if [ "$?" != "0" ]; then
      echo "failed to delete public_website_fra" 
      exit 1
fi

cp -R ./public/ /Users/marius_home/code/projects/public_website_fra

echo "2"
if [ "$?" != "0" ]; then
      echo "failed to copy" 
      exit 1
fi

cd /Users/marius_home/code/projects/public_website_fra

echo "3"
if [ "$?" != "0" ]; then
      echo "failed to cd" 
      exit 1
fi

git add .
echo "4"
git commit -m "update"
echo "5"
git push --force-with-lease
echo "6"
cd /Users/marius_home/code/projects/website_fra_gatsby
echo "7"
