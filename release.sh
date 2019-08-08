#!/bin/bash

rm -rf static
rm -f index.html

cd source
node build/build.js
cd ..
mv ./source/dist/* . 
git add .
git commit -m 'update site'
git push