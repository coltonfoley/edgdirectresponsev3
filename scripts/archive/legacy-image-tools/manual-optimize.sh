#!/bin/bash

# Image Optimization Script (Manual Run)
# Uses built-in macOS 'sips' tool to resize images > 2560px.

MAX_WIDTH=2560
PUBLIC_DIR="./public"

echo "Starting optimization in $PUBLIC_DIR..."

find "$PUBLIC_DIR" -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) -size +500k | while read -r file; do
    echo "Processing $file..."
    
    # Get dimensions
    WIDTH=$(sips -g pixelWidth "$file" | awk '/pixelWidth/ {print $2}')
    HEIGHT=$(sips -g pixelHeight "$file" | awk '/pixelHeight/ {print $2}')
    
    if [ "$WIDTH" -gt "$MAX_WIDTH" ] || [ "$HEIGHT" -gt "$MAX_WIDTH" ]; then
        echo "  -> Resizing from ${WIDTH}x${HEIGHT} to max $MAX_WIDTH..."
        sips -Z "$MAX_WIDTH" "$file" > /dev/null
    else
        echo "  -> Dimensions OK (${WIDTH}x${HEIGHT}). Skipping resize."
    fi
done

echo "Optimization complete."
