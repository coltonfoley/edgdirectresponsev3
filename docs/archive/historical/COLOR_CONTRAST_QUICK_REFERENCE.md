# Color Contrast Quick Reference

## Current Palette Issues at a Glance

### ❌ FAILING Combinations (Fix Immediately)

| Foreground | Background | Ratio | Where Used | Fix To |
|------------|------------|-------|------------|--------|
| `#42ffc1` (brand) | `#ffffff` | 1.25:1 | Buttons, badges | Keep, but text must be black |
| `#a1a1aa` | `#000000` | 2.1:1 | Footer links, dark sections | `#d4d4d8` (4.5:1) |
| `white/30` | dark bg | ~1.2:1 | Placeholders | `zinc-400` |
| `gray-200` | `#ffffff` | ~1.1:1 | Placeholders | `gray-500` |
| `black/40` | `#ffffff` | ~2.1:1 | Placeholders | `gray-500` |
| `gray-400` | `#000000` | 2.4:1 | Footer links | `zinc-300` (3.5:1) |
| `gray-500` | `#000000` | 1.8:1 | Legal text | `zinc-400` (4.2:1) |
| `gray-600` | `#000000` | 1.3:1 | Copyright | `zinc-500` (3.1:1) |
| `gray-300` | `#f4f4f5` | 1.4:1 | Subtle text | `gray-500` |

### ✅ PASSING Combinations (Keep)

| Foreground | Background | Ratio | Usage |
|------------|------------|-------|-------|
| `#000000` | `#42ffc1` | 10.68:1 | Button text on brand |
| `#0a0a0a` | `#ffffff` | 19.4:1 | Primary text |
| `#52525b` | `#ffffff` | 7.1:1 | Secondary text |
| `#71717a` | `#ffffff` | 4.6:1 | Muted text (barely) |
| `#ffffff` | `#000000` | 21:1 | Inverse text |
| `#008a5c` | `#ffffff` | 4.6:1 | Brand dark text |

---

## Recommended Safe Colors

### For Dark Backgrounds (#000000, #18181b)

| Token | Hex | Ratio | Use For |
|-------|-----|-------|---------|
| `text-white` | `#ffffff` | 21:1 | Primary text |
| `text-zinc-100` | `#f4f4f5` | 17.8:1 | Secondary text |
| `text-zinc-200` | `#e4e4e7` | 14.1:1 | Muted text (safe) |
| `text-zinc-300` | `#d4d4d8` | 10.6:1 | Subtle text, links |
| `text-zinc-400` | `#a1a1aa` | 5.8:1 | Very subtle, minimum AA for large text |

### For Light Backgrounds (#ffffff, #f4f4f5)

| Token | Hex | Ratio | Use For |
|-------|-----|-------|---------|
| `text-black` / `#0a0a0a` | `#0a0a0a` | 19.4:1 | Primary text |
| `text-gray-700` | `#374151` | 10.4:1 | Secondary text |
| `text-gray-600` | `#4b5563` | 7.5:1 | Muted text |
| `text-gray-500` | `#6b7280` | 5.6:1 | Placeholders, hints |

---

## Tailwind Class Mapping

### ❌ Replace These Classes

| Bad Class | Problem | Replace With |
|-----------|---------|--------------|
| `text-gray-400` on dark | 2.4:1 | `text-zinc-300` |
| `text-gray-500` on dark | 1.8:1 | `text-zinc-400` |
| `text-gray-600` on dark | 1.3:1 | `text-zinc-500` |
| `text-white/70` | ~2.9:1 | `text-zinc-200` |
| `text-white/80` | ~3.8:1 | `text-zinc-100` |
| `placeholder:text-gray-200` | ~1.1:1 | `placeholder:text-gray-500` |
| `placeholder:text-white/30` | ~1.2:1 | `placeholder:text-zinc-400` |

### ✅ Safe Classes to Use

| Class | Ratio on White | Ratio on Black | Safe On |
|-------|----------------|----------------|---------|
| `text-black` | 21:1 | 1:1 | Light only |
| `text-white` | 1:1 | 21:1 | Dark only |
| `text-zinc-300` | 1.4:1 | 10.6:1 | Dark only |
| `text-zinc-400` | 2.0:1 | 5.8:1 | Dark only |
| `text-gray-500` | 5.6:1 | 2.0:1 | Light only |
| `text-gray-600` | 7.5:1 | 1.3:1 | Light only |

---

## Component-Specific Guidelines

### Footer (on black background)
```tsx
// ✅ CORRECT
<footer className="bg-black text-white">
  <p className="text-zinc-300">Description text</p>
  <a className="text-zinc-300 hover:text-edg-brand">Link</a>
  <span className="text-zinc-400">Very subtle</span>
  <small className="text-zinc-500">Legal text</small>
</footer>

// ❌ WRONG
<footer className="bg-black text-white">
  <p className="text-gray-400">Fails contrast</p>
  <small className="text-gray-600">Almost invisible</small>
</footer>
```

### Form Inputs
```tsx
// ✅ CORRECT - Dark background
<input 
  className="bg-zinc-900 text-white placeholder:text-zinc-400"
/>

// ✅ CORRECT - Light background  
<input 
  className="bg-white text-black placeholder:text-gray-500 border-gray-400"
/>

// ❌ WRONG
<input 
  className="placeholder:text-gray-200" // Invisible
/>
```

### Hero Sections (on image/dark gradient)
```tsx
// ✅ CORRECT
<div className="bg-gradient-to-t from-black via-black/70 to-transparent">
  <h1 className="text-white">Title</h1>
  <p className="text-zinc-200">Subtitle</p>
</div>

// ❌ WRONG
<div className="bg-gradient-to-t from-black">
  <p className="text-white/80">May fail depending on image</p>
</div>
```

### Buttons
```tsx
// ✅ CORRECT - Primary (brand color)
<button className="bg-edg-brand text-black">
  Text is black, not mint
</button>

// ✅ CORRECT - Outline on dark
<button className="border-white/20 text-white hover:bg-white/10">
  Good contrast
</button>

// ❌ WRONG
<button className="bg-edg-brand text-white">
  White on mint fails
</button>
```

---

## WCAG Level Reference

| Level | Normal Text | Large Text | UI Components |
|-------|-------------|------------|---------------|
| AA (Minimum) | 4.5:1 | 3:1 | 3:1 |
| AAA (Enhanced) | 7:1 | 4.5:1 | - |

**Note:** Large text = 18pt (24px) bold OR 24pt (32px) regular

---

## Quick Contrast Check

Use these approximate rules:

1. **On white:** Use `gray-500` or darker for normal text
2. **On black:** Use `zinc-400` or lighter for normal text  
3. **On gray (#f4f4f5):** Use `gray-600` or darker for normal text
4. **Placeholders:** Same as normal text (not lighter!)
5. **Borders:** At least `gray-400` on white for visibility

---

## Testing Your Changes

```bash
# After making changes, test specific combinations:

# 1. Build and start
npm run build && npm start

# 2. Use browser DevTools
# Chrome: Elements → Computed → Contrast ratio (hover over color)

# 3. Or use this online tool with your hex values:
# https://webaim.org/resources/contrastchecker/
```
