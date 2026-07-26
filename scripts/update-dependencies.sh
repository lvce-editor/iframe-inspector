#!/bin/bash

cd $(dirname "$0")
cd ..

command_exists(){
  command -v "$1" &> /dev/null
}

if ! command_exists "ncu"; then
    echo "npm-check-updates is not installed"
    npm i -g npm-check-updates
else
    echo "ncu is installed"
fi

function updateDependencies {
  echo "updating dependencies..."
  ncu -u \
    -x @types/node \
    -x eslint \
    -x typescript \
    -x @lvce-editor/assert \
    -x @lvce-editor/constants \
    -x @lvce-editor/ipc \
    -x @lvce-editor/json-rpc \
    -x @lvce-editor/rpc \
    -x @lvce-editor/test-worker \
    -x @playwright/test \
    -x get-port \
    -x ws
}

updateDependencies
for package in packages/*; do
  (
    cd "$package"
    updateDependencies
  )
done

rm -rf node_modules packages/*/node_modules
npm install

echo "Great Success!"
