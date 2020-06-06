#!/bin/sh

LESSON=$(printf "%02d" $1)

echo "----------------------------------------"
echo "Running lesson: ${LESSON}"
echo "----------------------------------------"

./node_modules/.bin/mocha --require @babel/register \
  --recursive ./lessons/lesson${LESSON} \
  --reporter mocha-clearscreen-reporter \
  --watch
