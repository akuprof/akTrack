#!/bin/bash

echo "Starting TrackDown Application..."
echo ""
echo "Make sure you have configured your bot token in config.js"
echo ""

# Check if config.js exists
if [ ! -f "config.js" ]; then
    echo "Error: config.js file not found!"
    echo "Please create config.js with your bot token configuration."
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the application
npm start
