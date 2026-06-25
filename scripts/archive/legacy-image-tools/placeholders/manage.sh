#!/bin/bash
#
# Placeholder Image Management Script
# Simple bash wrapper for common placeholder operations
#

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/../.." && pwd)"

cd "$PROJECT_ROOT"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

show_help() {
    cat << EOF
EDG PatioShade Placeholder Image Management

Usage: npm run placeholders [command]

Commands:
  generate, g       Generate all placeholder images
  clean             Remove all placeholder images
  list, ls          List all projects
  project <slug>    Generate images for specific project only
  check             Check which projects have real images vs placeholders
  stats             Show statistics about generated images
  help              Show this help message

Examples:
  npm run placeholders generate
  npm run placeholders project lake-forest-pergola
  npm run placeholders list

EOF
}

generate_all() {
    echo -e "${BLUE}Generating all placeholder images...${NC}"
    npx tsx scripts/placeholders/generate.ts
}

generate_project() {
    local slug="$1"
    if [ -z "$slug" ]; then
        echo -e "${RED}Error: Project slug required${NC}"
        echo "Usage: npm run placeholders project <slug>"
        exit 1
    fi
    echo -e "${BLUE}Generating images for: $slug${NC}"
    npx tsx scripts/placeholders/generate.ts --project "$slug"
}

clean_all() {
    echo -e "${YELLOW}Removing all placeholder images...${NC}"
    if [ -d "public/projects" ]; then
        rm -rf public/projects
        echo -e "${GREEN}✓ Removed public/projects/${NC}"
    else
        echo -e "${YELLOW}No placeholder images to remove${NC}"
    fi
}

list_projects() {
    npx tsx scripts/placeholders/generate.ts --list
}

check_status() {
    echo -e "${BLUE}Checking project image status...${NC}\n"
    
    local total=0
    local with_hero=0
    local with_gallery=0
    
    for dir in public/projects/*/; do
        if [ -d "$dir" ]; then
            total=$((total + 1))
            slug=$(basename "$dir")
            
            # Check for hero
            if [ -f "$dir/hero.jpg" ]; then
                with_hero=$((with_hero + 1))
                hero_status="${GREEN}✓${NC}"
            else
                hero_status="${RED}✗${NC}"
            fi
            
            # Count gallery images
            gallery_count=$(find "$dir" -name "[0-9].jpg" -o -name "[0-9][0-9].jpg" | wc -l)
            if [ "$gallery_count" -gt 0 ]; then
                with_gallery=$((with_gallery + 1))
            fi
            
            printf "  %-35s Hero: %s  Gallery: %d images\n" "$slug" "$hero_status" "$gallery_count"
        fi
    done
    
    echo -e "\n${BLUE}Summary:${NC}"
    echo -e "  Total project directories: $total"
    echo -e "  With hero images: $with_hero"
    echo -e "  With gallery images: $with_gallery"
}

show_stats() {
    echo -e "${BLUE}Placeholder Image Statistics${NC}\n"
    
    if [ ! -d "public/projects" ]; then
        echo -e "${YELLOW}No placeholder images generated yet${NC}"
        return
    fi
    
    local total_dirs=$(find public/projects -mindepth 1 -maxdepth 1 -type d | wc -l)
    local total_images=$(find public/projects -name "*.jpg" | wc -l)
    local total_size=$(du -sh public/projects 2>/dev/null | cut -f1)
    
    echo -e "  Project directories: ${GREEN}$total_dirs${NC}"
    echo -e "  Total JPG images: ${GREEN}$total_images${NC}"
    echo -e "  Total size: ${GREEN}$total_size${NC}"
    
    # Count by image type
    local hero_count=$(find public/projects -name "hero.jpg" | wc -l)
    local gallery_count=$(find public/projects -name "[0-9].jpg" -o -name "[0-9][0-9].jpg" | wc -l)
    
    echo -e "\n  Hero images: $hero_count"
    echo -e "  Gallery images: $gallery_count"
    
    # Average images per project
    if [ "$total_dirs" -gt 0 ]; then
        local avg=$(echo "scale=1; $total_images / $total_dirs" | bc 2>/dev/null || echo "N/A")
        echo -e "  Avg images/project: $avg"
    fi
}

# Main command handler
case "${1:-help}" in
    generate|g)
        generate_all
        ;;
    clean)
        clean_all
        ;;
    list|ls)
        list_projects
        ;;
    project|p)
        generate_project "$2"
        ;;
    check)
        check_status
        ;;
    stats)
        show_stats
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        show_help
        exit 1
        ;;
esac
