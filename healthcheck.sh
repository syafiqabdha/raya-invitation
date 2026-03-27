#!/bin/sh

# Simple health check for the container
# Checks if the nginx server is responding

if ! wget --quiet --tries=1 --timeout=5 http://localhost/ -O /dev/null; then
    exit 1
fi

exit 0