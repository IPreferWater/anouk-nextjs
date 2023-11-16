#!/bin/bash

# Check if a folder path is provided as a command-line argument
if [ -z "$1" ]; then
    echo "Usage: $0 <folder_path>"
    exit 1
fi

# Set the folder path from the command-line argument
folder_path="$1"

# Check if the folder exists
if [ ! -d "$folder_path" ]; then
    echo "Folder not found: $folder_path"
    exit 1
fi

# Iterate through all webp files and rename them
for file in "$folder_path"/*.webp; do
    # Check if the file exists and is a regular file
    if [ -f "$file" ]; then
        # Replace "-" with "_" and add a "0" at the end of the filename
        new_name=$(echo "$file" | sed 's/-/_/g;s/\.webp/0.webp/')
        
        # Create the destination directory if it doesn't exist
        mkdir -p "$(dirname "$new_name")"
        
        # Use mv command with Windows path
        mv "$file" "$new_name"
        
        echo "Renamed: $file to $new_name"
    fi
done

echo "Renaming complete."
