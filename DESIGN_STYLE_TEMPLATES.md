# Design Style Templates - Production Standards

Choose one design approach per project and commit to it fully. No mixing styles.

---

## Design Style Options

### Style 1: Neo-Brutalist (Current Implementation)

**When to Use:** Developer tools, dashboards, technical products, B2B SaaS

**Visual Characteristics:**
- Ultra-thick borders (3px minimum)
- Hard box-shadows with no blur (8px offset)
- No rounded corners or minimal (2px max)
- Bold, geometric shapes
- High contrast black/white base
- Vibrant accent colors (orange, teal, yellow)
- Grid patterns as backgrounds
- Monospace fonts for data

**Typography:**
```css
Headings:     font-black (900), UPPERCASE, tracking-tight
Body:         font-medium (500-600), normal case
Data/Stats:   font-mono, font-black
Labels:       font-mono, UPPERCASE, text-sm
```

**Color Palette:**
```css
Primary:      hsl(14, 100%, 60%)  /* Vibrant Orange */
Secondary:    hsl(173, 65%, 59%)  /* Teal */
Accent:       hsl(48, 100%, 71%)  /* Yellow */
Background:   hsl(0, 0%, 100%)    /* Pure White */
Foreground:   hsl(0, 0%, 10%)     /* Near Black */
Borders:      hsl(0, 0%, 0%)      /* Pure Black */
```

**Animation Style:**
- Hard, snappy transitions (no easing)
- Button shadows compress on click
- Cards lift up on hover (translate-y)
- No soft fades or blurs
- Geometric shape morphing

**Component Examples:**
```typescript
// Button
<button className="brutalist-border brutalist-shadow bg-black text-white px-8 py-4
  font-bold uppercase tracking-wide transition-all
  hover:translate-x-[4px] hover:translate-y-[4px]">
  Click Me
</button>

// Card
<div className="brutalist-border brutalist-shadow-lg bg-white p-8
  hover:-translate-y-2 transition-all">
  Content
</div>
```

**Avoid:**
- Soft shadows
- Gradients
- Rounded corners over 2px
- Subtle animations
- Muted colors

---

### Style 2: Swiss Minimalism

**When to Use:** Finance apps, portfolios, design agencies, premium products

**Visual Characteristics:**
- Maximum whitespace
- Strict grid system (8px base)
- Monochromatic with single accent color
- Sans-serif only (Inter, Helvetica, Suisse)
- Perfect alignment and spacing
- Asymmetric layouts
- Mathematical precision
- Minimal borders (1px maximum)

**Typography:**
```css
Headings:     font-light (300), large size, max-width for readability
Body:         font-normal (400), 18px minimum, 1.6 line-height
Data:         font-medium (500), tabular-nums
Labels:       font-medium (500), UPPERCASE, letter-spacing: 0.1em
```

**Color Palette:**
```css
Primary:      hsl(0, 0%, 10%)     /* Charcoal */
Background:   hsl(0, 0%, 98%)     /* Off-white */
Accent:       hsl(350, 90%, 50%)  /* Single bold color */
Border:       hsl(0, 0%, 90%)     /* Subtle gray */
```

**Animation Style:**
- Slow, deliberate transitions (400-600ms)
- Cubic-bezier easing for elegance
- Subtle opacity changes
- Gentle scale transforms (0.98-1.0)
- Minimal movement

**Component Examples:**
```typescript
// Button
<button className="border border-black px-12 py-3 font-medium
  transition-all duration-500 hover:bg-black hover:text-white">
  Click Me
</button>

// Card
<div className="bg-white p-16 border-l-2 border-black">
  <h3 className="text-4xl font-light mb-8">Title</h3>
  <p className="text-lg leading-relaxed max-w-prose">Content</p>
</div>
```

**Avoid:**
- Excessive decoration
- Multiple colors
- Heavy borders
- Tight spacing
- Centered text blocks

---

### Style 3: Neumorphism Modern

**When to Use:** Health apps, meditation apps, creative tools, mobile apps

**Visual Characteristics:**
- Soft shadows creating depth
- Subtle gradients
- Rounded corners (12-24px)
- Light background with slight texture
- Floating card aesthetic
- Gentle color transitions
- Embossed/extruded elements

**Typography:**
```css
Headings:     font-semibold (600), rounded sans-serif
Body:         font-normal (400), 16px, relaxed leading
Data:         font-medium (500), rounded
Labels:       font-medium (500), sentence case
```

**Color Palette:**
```css
Background:   hsl(220, 20%, 96%)  /* Light gray-blue */
Card:         hsl(220, 20%, 98%)  /* Lighter */
Shadow-Dark:  hsl(220, 20%, 85%)  /* Darker for depth */
Shadow-Light: hsl(0, 0%, 100%)    /* White highlight */
Accent:       hsl(240, 80%, 60%)  /* Soft purple/blue */
```

**Animation Style:**
- Smooth, organic transitions (300ms)
- Ease-in-out curves
- Subtle depth changes
- Soft spring physics
- Hover states lift elements

**Component Examples:**
```typescript
// Button
<button className="rounded-2xl px-8 py-4 font-semibold
  shadow-[8px_8px_16px_hsl(220,20%,85%),-8px_-8px_16px_hsl(0,0%,100%)]
  hover:shadow-[4px_4px_8px_hsl(220,20%,85%),-4px_-4px_8px_hsl(0,0%,100%)]
  transition-shadow duration-300">
  Click Me
</button>

// Card
<div className="bg-[hsl(220,20%,98%)] rounded-3xl p-8
  shadow-[12px_12px_24px_hsl(220,20%,85%),-12px_-12px_24px_hsl(0,0%,100%)]">
  Content
</div>
```

**Avoid:**
- Flat designs
- Hard shadows
- High contrast
- Sharp corners
- Bright colors

---

### Style 4: Tech/Cyberpunk Dark

**When to Use:** Gaming platforms, crypto apps, developer tools, tech startups

**Visual Characteristics:**
- Dark backgrounds (black or near-black)
- Neon accent colors
- Glowing effects
- Scanline patterns
- Monospace fonts
- Terminal aesthetics
- Grid overlays
- High tech imagery

**Typography:**
```css
Headings:     font-black (900), wide letter-spacing, UPPERCASE
Body:         font-normal (400), monospace acceptable
Data:         font-mono, bright colors
Labels:       font-mono, UPPERCASE, neon colors
```

**Color Palette:**
```css
Background:   hsl(240, 10%, 8%)   /* Deep dark */
Surface:      hsl(240, 10%, 12%)  /* Slightly lighter */
Neon-Cyan:    hsl(180, 100%, 50%) /* Bright cyan */
Neon-Pink:    hsl(330, 100%, 60%) /* Hot pink */
Neon-Green:   hsl(120, 100%, 50%) /* Matrix green */
Border:       hsla(180, 100%, 50%, 0.3) /* Glowing borders */
```

**Animation Style:**
- Fast, snappy transitions (150ms)
- Glowing pulse effects
- Scanline movements
- Digital glitch effects
- Neon flicker

**Component Examples:**
```typescript
// Button
<button className="border-2 border-[hsl(180,100%,50%)] bg-black px-6 py-3
  font-mono font-bold uppercase text-[hsl(180,100%,50%)]
  shadow-[0_0_20px_hsl(180,100%,50%,0.5)]
  hover:shadow-[0_0_30px_hsl(180,100%,50%,0.8)]
  transition-shadow duration-150">
  Execute
</button>

// Card
<div className="bg-[hsl(240,10%,12%)] border border-[hsl(180,100%,50%,0.3)]
  p-8 shadow-[0_0_40px_hsl(180,100%,50%,0.2)]">
  Content
</div>
```

**Avoid:**
- Soft colors
- Light backgrounds
- Serif fonts
- Organic shapes
- Muted tones

---

### Style 5: Warm Humanist

**When to Use:** E-commerce, food delivery, lifestyle brands, community platforms

**Visual Characteristics:**
- Warm color palette (earth tones)
- Rounded, organic shapes
- Hand-drawn illustrations
- Friendly, approachable feel
- Soft shadows
- Generous padding
- Human-centric imagery

**Typography:**
```css
Headings:     font-bold (700), friendly sans-serif or rounded
Body:         font-normal (400), 17px, comfortable leading
Data:         font-semibold (600), rounded numbers
Labels:       font-medium (500), sentence case
```

**Color Palette:**
```css
Primary:      hsl(25, 75%, 55%)   /* Warm orange */
Secondary:    hsl(45, 85%, 65%)   /* Warm yellow */
Accent:       hsl(160, 50%, 50%)  /* Sage green */
Background:   hsl(30, 30%, 97%)   /* Warm white */
Text:         hsl(25, 20%, 20%)   /* Warm black */
```

**Animation Style:**
- Gentle, friendly transitions (350ms)
- Bounce easing for playfulness
- Subtle scale effects
- Organic movement patterns
- Warm fade-ins

**Component Examples:**
```typescript
// Button
<button className="bg-[hsl(25,75%,55%)] text-white rounded-full px-10 py-4
  font-semibold shadow-lg shadow-[hsl(25,75%,55%,0.25)]
  hover:shadow-xl hover:scale-[1.02]
  transition-all duration-300">
  Get Started
</button>

// Card
<div className="bg-white rounded-3xl p-10 shadow-lg
  hover:shadow-xl hover:-translate-y-1
  transition-all duration-300">
  Content
</div>
```

**Avoid:**
- Cold colors
- Sharp corners
- Hard shadows
- Technical imagery
- Sterile layouts

---

### Style 6: Luxury/Premium

**When to Use:** Luxury brands, high-end services, premium products, B2C premium

**Visual Characteristics:**
- Elegant spacing
- Gold/rose gold accents
- Serif typography for headings
- Rich blacks and creams
- Subtle textures
- Sophisticated animations
- Premium imagery
- Refined details

**Typography:**
```css
Headings:     Serif font, font-light (300), large sizes
Body:         Sans-serif, font-normal (400), generous line-height
Data:         Sans-serif, font-medium (500), tabular
Labels:       Sans-serif, UPPERCASE, wide letter-spacing
```

**Color Palette:**
```css
Primary:      hsl(0, 0%, 8%)      /* Rich black */
Background:   hsl(40, 30%, 95%)   /* Cream */
Accent:       hsl(40, 65%, 55%)   /* Gold */
Secondary:    hsl(0, 0%, 30%)     /* Charcoal */
Border:       hsl(40, 30%, 85%)   /* Subtle cream */
```

**Animation Style:**
- Slow, elegant transitions (600ms)
- Ease-in-out curves
- Subtle reveals
- Gentle parallax
- Sophisticated fades

**Component Examples:**
```typescript
// Button
<button className="border-2 border-[hsl(40,65%,55%)] px-12 py-3
  font-serif text-sm uppercase tracking-[0.2em]
  transition-all duration-500
  hover:bg-[hsl(40,65%,55%)] hover:text-white">
  Discover
</button>

// Card
<div className="bg-[hsl(40,30%,95%)] p-12 border-l-4 border-[hsl(40,65%,55%)]
  shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
  Content
</div>
```

**Avoid:**
- Bright colors
- Tight spacing
- Sans-serif headings
- Fast animations
- Casual language

---

### Style 7: Playful/Creative

**When to Use:** Creative agencies, children's products, entertainment, social apps

**Visual Characteristics:**
- Bold, vibrant colors
- Irregular shapes
- Playful animations
- Mixed typography
- Unexpected layouts
- Fun illustrations
- Overlapping elements
- Creative use of space

**Typography:**
```css
Headings:     font-black (900), mixed case, large sizes
Body:         font-medium (500), comfortable reading
Data:         font-bold (700), colorful
Labels:       font-bold (700), playful case mixing
```

**Color Palette:**
```css
Primary:      hsl(340, 90%, 60%)  /* Hot pink */
Secondary:    hsl(55, 100%, 60%)  /* Bright yellow */
Accent-1:     hsl(190, 90%, 55%)  /* Cyan */
Accent-2:     hsl(280, 85%, 65%)  /* Purple */
Background:   hsl(0, 0%, 100%)    /* White */
```

**Animation Style:**
- Bouncy, spring physics
- Playful hover effects
- Rotation on interaction
- Scale up animations
- Wiggle effects

**Component Examples:**
```typescript
// Button
<button className="bg-[hsl(340,90%,60%)] text-white rounded-2xl px-8 py-4
  font-black text-lg rotate-[-2deg]
  shadow-[4px_4px_0_hsl(55,100%,60%)]
  hover:rotate-0 hover:scale-110
  transition-all duration-200">
  Let's Go!
</button>

// Card
<div className="bg-[hsl(55,100%,95%)] rounded-3xl p-8 rotate-1
  border-4 border-[hsl(340,90%,60%)]
  hover:rotate-0 hover:scale-105
  transition-all duration-300">
  Content
</div>
```

**Avoid:**
- Muted colors
- Perfect alignment
- Serious tone
- Minimal designs
- Corporate feel

---

## Implementation Guidelines

### Choosing Your Design Style

**Ask these questions:**

1. **Who is the target audience?**
   - Developers/Technical → Neo-Brutalist or Tech/Cyberpunk
   - Premium consumers → Luxury or Swiss Minimalism
   - General consumers → Warm Humanist
   - Creative professionals → Playful or Swiss
   - Wellness/Health → Neumorphism

2. **What is the brand personality?**
   - Bold/Confident → Neo-Brutalist
   - Elegant/Refined → Luxury or Swiss
   - Friendly/Approachable → Warm Humanist
   - Innovative/Technical → Tech/Cyberpunk
   - Creative/Fun → Playful

3. **What is the use case?**
   - Data-heavy dashboard → Neo-Brutalist or Tech
   - Content platform → Swiss or Warm Humanist
   - E-commerce → Warm Humanist or Luxury
   - Portfolio/Agency → Swiss or Playful
   - Mobile app → Neumorphism or Warm

### Consistency Rules

**CRITICAL:** Once you choose a style, commit 100%

1. **Don't mix design styles** in the same project
2. **Use the exact color palette** provided
3. **Follow the typography hierarchy** specified
4. **Match the animation style** consistently
5. **Maintain the spacing system** throughout
6. **Keep component patterns** uniform

### Customization Guidelines

**You can customize:**
- Specific color hues (but maintain contrast ratios)
- Font families (but maintain weight hierarchy)
- Spacing values (but keep proportional system)
- Animation timings (but maintain style feel)

**You cannot change:**
- Overall design philosophy
- Core visual principles
- Fundamental patterns
- Style mixing

---

## Design Style Decision Matrix

| Style | Complexity | Dev Time | Best For | Performance |
|-------|-----------|----------|----------|-------------|
| Neo-Brutalist | Medium | Fast | Dashboards, Dev Tools | Excellent |
| Swiss Minimalism | Low | Medium | Portfolios, Premium | Excellent |
| Neumorphism | High | Slow | Mobile, Creative | Good |
| Tech/Cyberpunk | High | Medium | Gaming, Crypto | Good |
| Warm Humanist | Medium | Medium | E-commerce, Social | Excellent |
| Luxury | Low | Fast | Premium, B2C | Excellent |
| Playful | High | Slow | Creative, Kids | Good |

---

## Code Templates by Style

### Global CSS Variables Template

```css
/* Copy this template and fill in based on chosen style */
:root {
  /* Colors */
  --color-primary: [from style];
  --color-secondary: [from style];
  --color-accent: [from style];
  --color-background: [from style];
  --color-foreground: [from style];

  /* Spacing (adapt to style) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;

  /* Typography (adapt to style) */
  --font-heading: [style font];
  --font-body: [style font];
  --font-mono: [if applicable];

  /* Effects (adapt to style) */
  --shadow-sm: [style shadow];
  --shadow-md: [style shadow];
  --shadow-lg: [style shadow];
  --radius: [style radius];

  /* Animation (adapt to style) */
  --transition-fast: 150ms;
  --transition-base: 300ms;
  --transition-slow: 600ms;
  --easing: [style easing];
}
```

### Tailwind Config Template

```javascript
// tailwind.config.js - Adapt to chosen style
module.exports = {
  theme: {
    extend: {
      colors: {
        // Fill from chosen style palette
      },
      fontFamily: {
        // Fill from chosen style typography
      },
      borderRadius: {
        // Fill from chosen style
      },
      boxShadow: {
        // Fill from chosen style
      },
      transitionDuration: {
        // Fill from chosen style
      },
    },
  },
}
```

---

## Quality Checklist Per Style

**Before deployment, verify:**

- [ ] All components use chosen style's color palette
- [ ] Typography hierarchy matches style guidelines
- [ ] Spacing system is consistent throughout
- [ ] Animations match style's timing and feel
- [ ] No mixing of design patterns from other styles
- [ ] Mobile responsive maintains style integrity
- [ ] Accessibility standards met (WCAG 2.1 AA)
- [ ] Performance targets achieved
- [ ] Brand consistency across all pages
- [ ] User testing confirms style effectiveness

---

**IMPORTANT:** Design consistency is not optional. Pick one style and execute it flawlessly. A well-executed single style beats a mishmash of "cool effects" every time.
