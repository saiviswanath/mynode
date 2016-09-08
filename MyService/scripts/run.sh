#!/bin/sh
# Run npm start
export NODE_ENV="test"; # or set NODE_ENV="test" in windows
export APP_CONFIG="{"hello" : "hai", {"hai" : "Hello"}}"
node ./src/service.js;
