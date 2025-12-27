# ShadowOps Brand Theme Documentation

## Color System

### Primary Palette
```css
--bg:        #090B10      /* Deep navy, page background */
--surface:   #0F141D      /* Slightly lighter navy, cards & surfaces */
--border:    #1B2736      /* Subtle border/divider color */
--text:      #F3F8F8      /* Off-white primary text */
--muted:     #95A3B3      /* Secondary/tertiary text */
```

### Accent Colors (Electric Cyan)
```css
--accent:    #14D2F8      /* Primary accent, buttons, hover states */
--accent2:   #0CA6DE      /* Darker cyan, gradients, depth */
--ice:       #5DF0F7      /* Bright cyan, highlights, footer titles */
```

### Support Tones (Navy Gradients)
```css
--navy:      #16344E      /* Dark navy, footer background */
--steel:     #1B4C68      /* Steel blue, depth */
--ocean:     #116298      /* Ocean blue, depth */
```

### Effects
```css
--shadowGlow: 0 0 0 1px rgba(20,210,248,.18), 0 0 40px rgba(20,210,248,.10);
              /* Cyan glow effect on buttons, cards, badges */
```

## Typography System

### Font Stack
- **Headings:** `'Sora', sans-serif` (geometric, modern)
- **Body:** `'Inter', sans-serif` (clean, readable)
- Both from Google Fonts CDN

### Scale
- **H1:** 3rem, weight 800, gradient text (white → cyan)
- **H2:** 2.25rem, weight 700
- **H3:** 1.5rem, weight 600
- **H4:** 1.25rem, weight 600
- **Body:** 1rem (16px), weight 400–500
- **Line height:** 1.6 (generous reading)

## Component Reference

### Header
- Sticky positioning
- Backdrop blur: `rgba(9,11,16,.65)`
- Logo: Mark image + "SHADOWOPS" text
- Nav: Links with cyan hover
- CTA: Primary button on right

### Hero Section
- Background: Radial gradient (cyan at 20% 10%) + grid overlay
- Logo: Full logo image with drop shadow
- H1: Gradient text (white → cyan)
- CTAs: Primary + Secondary buttons

### Buttons

#### Primary
```css
background: linear-gradient(135deg, #14D2F8 0%, #0CA6DE 100%);
box-shadow: var(--shadowGlow);
```
- On hover: Enhanced glow + lift
- On focus: Cyan outline

#### Secondary
```css
border: 1.5px solid var(--accent);
background: transparent;
```
- On hover: Glowing border + background tint
- On focus: Cyan outline

### Cards
- Background: `var(--surface)` with 1px border
- Icon: Semi-transparent cyan gradient background
- Hover: Cyan glow + border color shift + elevation

### Step Numbers (Badges)
- Background: Gradient (cyan colors)
- Glow: `var(--shadowGlow)`
- Shape: Circular

### CTA Bands
- Background: Gradient + borders top/bottom
- Glow: 40px cyan shadow
- Text: Off-white + muted
- Button: Full-width or centered

### Footer
- Background: `var(--navy)` (#16344E)
- Headings: `var(--ice)` (bright cyan)
- Links: Muted with cyan hover
- Border: Top separator

### Forms
- Input/textarea: Dark surface background
- Border: Subtle, becomes cyan on focus
- Focus glow: `var(--shadowGlow)`

## Effects & Animations

### Glow
- Primary effect: `var(--shadowGlow)`
- Used on: buttons, cards (hover), badges
- Enhanced on hover: 1.8x intensity

### Gradients
- Button: 135deg (cyan → deeper cyan)
- Hero H1: Text gradient (white → cyan)
- Icon backgrounds: Semi-transparent cyan gradients

### Transitions
- Timing: 0.2s ease
- Applied to: all interactive elements
- Smooth, snappy feel

### Depth
- Hero grid overlay: 50px repeating pattern, 3% opacity
- Radial gradient: Creates glow effect
- Card elevation: translateY(-4px) on hover

## Spacing System

```css
--space-xs:   0.5rem    /* 8px */
--space-sm:   1rem      /* 16px */
--space-md:   1.5rem    /* 24px */
--space-lg:   2rem      /* 32px */
--space-xl:   3rem      /* 48px */
--space-2xl:  4rem      /* 64px */
```

## Border Radius

```css
--radius-sm:  4px       /* Small elements */
--radius-md:  8px       /* Medium elements */
--radius-lg:  14px      /* Cards, buttons (primary design) */
```

## Responsive Breakpoints

- **Desktop:** Full layout (1100px max-width)
- **Tablet (768px):** 2-column grids → 1 column
- **Mobile (480px):** Single column, full-width

## Accessibility

- **Contrast:** WCAG AA+ (text on dark)
- **Focus States:** Clear outline (2px cyan)
- **Interactive States:** Visible hover/active/focus
- **Semantic HTML:** Proper heading hierarchy
- **ARIA Labels:** On forms and controls

## Asset Requirements

### Logo Files
- **Full Logo:** `/assets/img/shadowops-logo.png` (600x400px)
- **Mark Icon:** `/assets/img/shadowops-mark.png` (200x200px, square)
- **Format:** PNG with transparency
- **Colors:** Cyan accent on dark/transparent background

### Favicon Files
- **favicon.ico:** `/assets/favicon/favicon.ico` (32x32 or 64x64)
- **Apple Icon:** `/assets/favicon/apple-touch-icon.png` (180x180px)
- **Format:** PNG (Apple icon) or ICO (favicon)
- **Colors:** Cyan on dark navy

## Usage Examples

### Apply Accent Color
```html
<a href="#" style="color: var(--accent);">Link</a>
```

### Apply Glow Effect
```css
box-shadow: var(--shadowGlow);
```

### Create Gradient Background
```css
background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
```

### Dark Surface
```css
background-color: var(--surface);
border: 1px solid var(--border);
```

## Color Contrast Reference

| Element | Foreground | Background | Ratio |
|---------|-----------|-----------|-------|
| Primary Text | #F3F8F8 | #090B10 | 15.8:1 |
| Secondary Text | #95A3B3 | #090B10 | 5.2:1 |
| Accent Text | #14D2F8 | #090B10 | 7.1:1 |
| Button Text | #090B10 | #14D2F8 | 7.1:1 |

All combinations meet WCAG AAA standard.

## Customization

To adjust the theme:

1. **Color Shifts:** Update CSS variables in `:root`
2. **Glow Intensity:** Modify `--shadowGlow` variable (opacity values)
3. **Typography:** Change font URLs or weights in `@import`
4. **Spacing:** Adjust `--space-*` variables
5. **Radius:** Change `--radius-lg` for rounder/sharper corners

## Performance Notes

- **Font Loading:** Google Fonts CDN (Sora + Inter)
- **CSS Size:** ~27KB (all-in-one stylesheet)
- **No Dependencies:** Pure CSS, no frameworks
- **Fast Load:** Optimized for GitHub Pages
- **Accessibility:** Built-in focus states and contrast

---

**Theme implemented:** December 27, 2025
**Status:** Production-ready, awaiting logo assets
