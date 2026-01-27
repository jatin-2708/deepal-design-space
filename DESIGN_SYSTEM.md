# Design System & Style Guide

## Color Palette

### Primary Colors
- **Navy Blue** - `#0C4CA1` (HSL: 217 33% 27%)
  - Used for: Primary CTAs, active states, main text, emphasis
  - Psychological: Professional, trustworthy, thoughtful

### Secondary Accent Colors (Used Intentionally)
- **Coral** - `#C4663C` (HSL: 12 76% 61%)
  - Used for: "How I Think" section accent
  - Paired with: Soft coral background (#FEF3F0)
  
- **Lavender** - `#E8D9F0` (HSL: 280 40% 95%)
  - Used for: Transition dividers, closing reflection
  - Psychological: Calm, contemplative
  
- **Mint** - `#C8EBE0` (HSL: 175 40% 92%)
  - Used for: Final CTA section accent
  - Psychological: Fresh, gentle, inviting
  
- **Peach** - `#FEF3F0` (HSL: 25 90% 95%)
  - Used for: Project card backgrounds
  - Paired with: Warm, approachable

### Neutral Colors
- **Background** - White (`#FFFFFF`)
- **Text** - Charcoal (`#3D4854`, HSL: 217 33% 27%)
- **Muted Text** - Gray (`#636E7C`, HSL: 217 20% 50%)
- **Borders** - Light Gray (`#E0E7F0`, HSL: 210 15% 88%)

---

## Typography

### Font Stack
```
Display: 'Libre Baskerville', Georgia, serif
Body: 'Inter', system-ui, sans-serif
```

### Type Hierarchy

| Element | Font | Size | Weight | Usage |
|---------|------|------|--------|-------|
| H1 | Libre Baskerville | 48-96px | 400 | Main name, section intro |
| H2 | Libre Baskerville | 28-48px | 400 | Section headings |
| H3 | Libre Baskerville | 18-28px | 400 | Card titles, subsections |
| Body | Inter | 16-18px | 400 | Main content |
| Small | Inter | 12-14px | 500 | Tags, captions |
| Label | Inter | 12px | 600 | UI labels |

### Readability
- **Line Height**: 1.6 (body), 1.1 (headings)
- **Letter Spacing**: Normal (body), Tight (display)
- **Max Width**: 75 characters per line

---

## Spacing System

Uses `rem` units based on 16px base:
- `0.25rem` (4px) - Tight spacing
- `0.5rem` (8px) - Small spacing
- `1rem` (16px) - Base spacing
- `1.5rem` (24px) - Medium spacing
- `2rem` (32px) - Large spacing
- `3rem` (48px) - Extra large spacing

### Sections
- Top/Bottom Padding: `py-20` (80px) on desktop, `py-16` (64px) on mobile
- Container Padding: `px-6` (24px) on all sizes

---

## Animation Tokens

### Durations
- **Quick**: 200ms (tap feedback)
- **Standard**: 300-400ms (hover effects)
- **Slow**: 600-800ms (entrance animations)
- **Slow+**: 1000-2000ms (background elements)

### Easing
- **Default**: `easeOut` - Natural, responsive
- **Spring**: `[0.34, 1.56, 0.64, 1]` - Playful, organic
- **Linear**: Continuous rotations, infinite loops

### Common Animations
```typescript
// Entrance
opacity: 0 → 1, y: 20 → 0 (600ms)

// Hover lift
y: 0 → -4 to -8px (300ms)

// Hover scale
scale: 1 → 1.02 (300ms)

// Button tap
scale: 1 → 0.97 (150ms)

// Rotate (continuous)
rotate: 0 → 360deg (20s, linear, infinite)
```

---

## Shadow System

```css
--shadow-soft: 0 4px 20px -4px rgba(12, 76, 161, 0.08);
--shadow-card: 0 8px 32px -8px rgba(12, 76, 161, 0.1);
--shadow-elevated: 0 16px 48px -12px rgba(12, 76, 161, 0.15);
--shadow-nav: 0 4px 24px -4px rgba(12, 76, 161, 0.06);
```

---

## Doodle Elements

### Purpose
Visual "thinking marks" or annotations that feel personal and human, not decorative.

### When to Use
- ✅ Near section headers (underlines)
- ✅ In section transitions (accent patterns)
- ✅ On project cards (brackets, circles)
- ✅ Around important quotes
- ❌ NOT used everywhere
- ❌ NOT as primary decoration

### Doodle Types

#### Underline
```tsx
<DoodleUnderline className="text-navy w-48 h-6" />
```
Use for: Subtle emphasis under headings

#### Circle
```tsx
<DoodleCircle className="text-navy/20 w-8 h-8" />
```
Use for: "Thinking" indicators, subtle accents

#### Bracket
```tsx
<DoodleBracket className="text-navy/20 w-5 h-16" />
```
Use for: Framing important elements

#### Arrow
```tsx
<DoodleArrow className="text-navy w-16 h-6" />
```
Use for: Directional hints, navigation

#### Accent
```tsx
<DoodleAccent className="text-navy w-20 h-8" />
```
Use for: Section dividers

#### Dots
```tsx
<DoodleDots className="text-navy w-16 h-2" />
```
Use for: Fade-out, transition effects

---

## Component Design Patterns

### Buttons
- **Primary**: Navy background, white text, hover scale
- **Outline**: Navy border, navy text, hover background
- **Sizes**: sm, md, lg, xl
- **Rounded**: 12px (rounded-xl)
- **Interactive**: Scale on hover (1.02), scale on tap (0.98)

### Cards
- **Background**: Gradient or white with border
- **Border**: 2px solid, navy/10 → navy/30 on hover
- **Padding**: 20-24px
- **Rounded**: 16px (rounded-2xl)
- **Hover Effect**: Lift (-4 to -8px) + shadow enhance

### Navigation
- **Fixed**: Top with backdrop blur
- **Border**: Navy/10 → Navy/20 on scroll
- **Active**: Navy background, white text
- **Hover**: Background color transition (navy/5)

### Section Headings
- **Font**: Libre Baskerville, display weight
- **Size**: 28-48px
- **Optional**: Doodle underline on scroll
- **Spacing**: Generous whitespace below

---

## Responsive Design

### Breakpoints
- Mobile: 375px - 640px (`sm`)
- Tablet: 768px - 1024px (`md`)
- Desktop: 1280px+ (`lg`)

### Mobile-First Approach
- Start with mobile styles
- Use Tailwind breakpoints for progressive enhancement
- Ensure touch targets are 44x44px minimum

### Grid Layout
- **Mobile**: Single column
- **Tablet**: 2 columns (projects, values)
- **Desktop**: 2 columns maintained, with wider container

---

## Accessibility Checklist

- ✅ Color contrast: WCAG AA standard (4.5:1 for text)
- ✅ Font sizes: Minimum 16px for body text
- ✅ Touch targets: 44x44px minimum
- ✅ Focus states: Visible outline for keyboard nav
- ✅ Motion: `prefers-reduced-motion` respects (consider adding)
- ✅ Alt text: All images have descriptive alt text
- ✅ Semantic HTML: Proper heading hierarchy
- ✅ Animation: Non-blocking (never prevents interaction)

---

## Code Examples

### Using Colors
```tsx
// Navy (primary)
className="text-navy bg-navy/10 border-navy/20"

// Accent colors
className="text-coral" // Heading accent
className="bg-lavender/20" // Background

// Hover states
className="hover:text-navy hover:bg-navy/5"
```

### Using Animations
```tsx
import { motion } from "framer-motion";

// Entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
/>

// Hover effect
<motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  transition={{ duration: 0.3 }}
/>
```

### Using Doodles
```tsx
import { DoodleUnderline } from "@/components/Doodles";

<motion.div
  initial={{ scaleX: 0 }}
  whileInView={{ scaleX: 1 }}
  style={{ transformOrigin: "left" }}
>
  <DoodleUnderline className="text-coral" />
</motion.div>
```

---

## Design Philosophy

### Core Principles
1. **Clarity Over Decoration** - Every element has purpose
2. **Restraint** - Use accent colors intentionally
3. **Thoughtfulness** - Design shows your thinking process
4. **Human-Centered** - Doodles and playfulness feel genuine
5. **Professional First** - Never sacrifice clarity for effect

### Visual Personality
"A calm, thoughtful designer who thinks deeply, experiments visually, and isn't afraid to show personality—without losing seriousness."

---

## Future Enhancements

- [ ] Dark mode support (CSS variables ready)
- [ ] Scroll-progress indicator
- [ ] Page-specific design treatments
- [ ] Easter eggs / hover surprises
- [ ] Micro-interactions on text selections
- [ ] Parallax scrolling (optional, keep subtle)
