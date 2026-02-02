#!/bin/bash

# Base directory for skills
SKILLS_DIR="/Users/coltonfoley/Projects/edgdirectresponsev3/.agent/skills"
REPO_BASE="https://raw.githubusercontent.com/vercel-labs/agent-skills/main/skills"

# Helper function to download a file
download_file() {
    local url="$1"
    local dest="$2"
    local dir=$(dirname "$dest")
    mkdir -p "$dir"
    echo "Downloading $dest..."
    curl -sSL "$url" -o "$dest"
}

# --- 1. composition-patterns ---
echo "Installing composition-patterns..."
PREFIX="composition-patterns"
FILES="AGENTS.md README.md SKILL.md metadata.json"
RULES="_sections.md _template.md architecture-avoid-boolean-props.md architecture-compound-components.md patterns-children-over-render-props.md patterns-explicit-variants.md react19-no-forwardref.md state-context-interface.md state-decouple-implementation.md"

for f in $FILES; do download_file "$REPO_BASE/$PREFIX/$f" "$SKILLS_DIR/$PREFIX/$f"; done
for f in $RULES; do download_file "$REPO_BASE/$PREFIX/rules/$f" "$SKILLS_DIR/$PREFIX/rules/$f"; done


# --- 2. react-best-practices ---
echo "Installing react-best-practices..."
PREFIX="react-best-practices"
FILES="AGENTS.md README.md SKILL.md metadata.json"
RULES="_sections.md _template.md advanced-event-handler-refs.md advanced-init-once.md advanced-use-latest.md async-api-routes.md async-defer-await.md async-dependencies.md async-parallel.md async-suspense-boundaries.md bundle-barrel-imports.md bundle-conditional.md bundle-defer-third-party.md bundle-dynamic-imports.md bundle-preload.md client-event-listeners.md client-localstorage-schema.md client-passive-event-listeners.md client-swr-dedup.md js-batch-dom-css.md js-cache-function-results.md js-cache-property-access.md js-cache-storage.md js-combine-iterations.md js-early-exit.md js-hoist-regexp.md js-index-maps.md js-length-check-first.md js-min-max-loop.md js-set-map-lookups.md js-tosorted-immutable.md rendering-activity.md rendering-animate-svg-wrapper.md rendering-conditional-render.md rendering-content-visibility.md rendering-hoist-jsx.md rendering-hydration-no-flicker.md rendering-hydration-suppress-warning.md rendering-svg-precision.md rendering-usetransition-loading.md rerender-defer-reads.md rerender-dependencies.md rerender-derived-state-no-effect.md rerender-derived-state.md rerender-functional-setstate.md rerender-lazy-state-init.md rerender-memo-with-default-value.md rerender-memo.md rerender-move-effect-to-event.md rerender-simple-expression-in-memo.md rerender-transitions.md rerender-use-ref-transient-values.md server-after-nonblocking.md server-auth-actions.md server-cache-lru.md server-cache-react.md server-dedup-props.md server-parallel-fetching.md server-serialization.md"

for f in $FILES; do download_file "$REPO_BASE/$PREFIX/$f" "$SKILLS_DIR/$PREFIX/$f"; done
for f in $RULES; do download_file "$REPO_BASE/$PREFIX/rules/$f" "$SKILLS_DIR/$PREFIX/rules/$f"; done


# --- 3. react-native-skills ---
echo "Installing react-native-skills..."
PREFIX="react-native-skills"
FILES="AGENTS.md README.md SKILL.md metadata.json"
RULES="_sections.md _template.md animation-derived-value.md animation-gesture-detector-press.md animation-gpu-properties.md design-system-compound-components.md fonts-config-plugin.md imports-design-system-folder.md js-hoist-intl.md list-performance-callbacks.md list-performance-function-references.md list-performance-images.md list-performance-inline-objects.md list-performance-item-expensive.md list-performance-item-memo.md list-performance-item-types.md list-performance-virtualize.md monorepo-native-deps-in-app.md monorepo-single-dependency-versions.md navigation-native-navigators.md react-compiler-destructure-functions.md react-compiler-reanimated-shared-values.md react-state-dispatcher.md react-state-fallback.md react-state-minimize.md rendering-no-falsy-and.md rendering-text-in-text-component.md scroll-position-no-state.md state-ground-truth.md ui-expo-image.md ui-image-gallery.md ui-measure-views.md ui-menus.md ui-native-modals.md ui-pressable.md ui-safe-area-scroll.md ui-scrollview-content-inset.md ui-styling.md"

for f in $FILES; do download_file "$REPO_BASE/$PREFIX/$f" "$SKILLS_DIR/$PREFIX/$f"; done
for f in $RULES; do download_file "$REPO_BASE/$PREFIX/rules/$f" "$SKILLS_DIR/$PREFIX/rules/$f"; done


# --- 4. web-design-guidelines ---
echo "Installing web-design-guidelines..."
PREFIX="web-design-guidelines"
FILES="SKILL.md"
for f in $FILES; do download_file "$REPO_BASE/$PREFIX/$f" "$SKILLS_DIR/$PREFIX/$f"; done


# --- 5. vercel-deploy ---
echo "Installing vercel-deploy..."
SRC_PREFIX="claude.ai/vercel-deploy-claimable"
DEST_PREFIX="vercel-deploy"
download_file "$REPO_BASE/$SRC_PREFIX/SKILL.md" "$SKILLS_DIR/$DEST_PREFIX/SKILL.md"
download_file "$REPO_BASE/$SRC_PREFIX/scripts/deploy.sh" "$SKILLS_DIR/$DEST_PREFIX/scripts/deploy.sh"

# Fix permissions
chmod +x "$SKILLS_DIR/$DEST_PREFIX/scripts/deploy.sh"

# Fix SKILL.md path
sed -i '' "s|/mnt/skills/user/vercel-deploy/scripts/deploy.sh|$SKILLS_DIR/$DEST_PREFIX/scripts/deploy.sh|g" "$SKILLS_DIR/$DEST_PREFIX/SKILL.md"

echo "Done!"
