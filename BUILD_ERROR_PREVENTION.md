# Build Error Prevention Guide

This document outlines common build errors and how to prevent them to ensure a clean production build.

## Common ESLint Errors

### 1. Unescaped Entities in JSX (`react/no-unescaped-entities`)

**Error Example:**
```
Error: `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.
Error: `"` can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.
```

**Problem:**
Using quotes and apostrophes directly in JSX text can cause parsing issues and is considered bad practice.

**Solution:**
Always escape special characters in JSX:

```tsx
// ❌ Bad
<p>Don't use unescaped apostrophes</p>
<p>She said "hello"</p>

// ✅ Good
<p>Don&apos;t use unescaped apostrophes</p>
<p>She said &quot;hello&quot;</p>

// ✅ Alternative - Use JavaScript strings
<p>{"Don't use unescaped apostrophes"}</p>
<p>{'She said "hello"'}</p>
```

**Character Reference Guide:**
- `'` → `&apos;` or `&#39;`
- `"` → `&quot;` or `&#34;`
- `<` → `&lt;`
- `>` → `&gt;`
- `&` → `&amp;`

### 2. Explicit Any Types (`@typescript-eslint/no-explicit-any`)

**Error Example:**
```
Warning: Unexpected any. Specify a different type.
```

**Problem:**
Using `any` type defeats the purpose of TypeScript and can lead to runtime errors.

**Solution:**

```tsx
// ❌ Bad
function processData(data: any) {
  return data.value;
}

// ✅ Good - Use specific types
interface Data {
  value: string;
}

function processData(data: Data) {
  return data.value;
}

// ✅ Good - Use generics
function processData<T>(data: T) {
  return data;
}

// ✅ Good - Use unknown for truly unknown types
function processData(data: unknown) {
  if (typeof data === 'object' && data !== null && 'value' in data) {
    return (data as { value: string }).value;
  }
}
```

### 3. Unused Variables/Imports (`@typescript-eslint/no-unused-vars`)

**Error Example:**
```
Warning: 'cn' is defined but never used.
```

**Problem:**
Importing or declaring variables that are never used clutters the code and can indicate incomplete refactoring.

**Solution:**

```tsx
// ❌ Bad
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";

export function MyComponent() {
  return <Badge>Hello</Badge>;  // cn is never used
}

// ✅ Good - Remove unused imports
import { Badge } from "@/components/ui/badge";

export function MyComponent() {
  return <Badge>Hello</Badge>;
}

// ✅ Good - Actually use the import
import { cn } from "@/lib/utils/cn";
import { Badge } from "@/components/ui/badge";

export function MyComponent() {
  return <Badge className={cn("custom-class")}>Hello</Badge>;
}
```

**Prevention:**
- Configure your editor to highlight unused imports
- Run `npm run lint -- --fix` to auto-remove unused imports
- Use the "Organize Imports" feature in VSCode (Shift+Alt+O)

### 4. Type Mismatches in Component Props

**Error Example:**
```
Type error: Type '"destructive"' is not assignable to type '"secondary" | "default" | "success"'.
```

**Problem:**
Using a value that isn't included in the defined type union.

**Solution:**

```tsx
// ❌ Bad - Missing variant in type definition
const roleColors: Record<string, "default" | "secondary" | "success"> = {
  admin: "destructive",  // Error: "destructive" not in union
  editor: "default",
  viewer: "secondary",
};

// ✅ Good - Include all variants in type
const roleColors: Record<string, "default" | "secondary" | "success" | "destructive"> = {
  admin: "destructive",
  editor: "default",
  viewer: "secondary",
};

// ✅ Better - Import the type from the component
import { Badge } from "@/components/ui/badge";

// Extract the variant type from Badge props
type BadgeVariant = React.ComponentProps<typeof Badge>["variant"];

const roleColors: Record<string, BadgeVariant> = {
  admin: "destructive",
  editor: "default",
  viewer: "secondary",
};
```

**Best Practice:**
Always extract types from the source component instead of manually defining them. This ensures type safety when the component changes.

### 5. Framer Motion and React Type Conflicts

**Error Example:**
```
Type error: Type 'HTMLButtonElement' is not assignable to type 'HTMLMotionProps<"button">'.
Types of property 'onAnimationStart' are incompatible.
```

**Problem:**
Framer Motion's `motion` components have different prop types than standard React HTML elements, particularly for animation-related props.

**Solution:**

```tsx
// ❌ Bad - Using React HTML types with motion components
import { motion } from "framer-motion";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function AnimatedButton({ children, ...props }: ButtonProps) {
  return (
    <motion.button {...props}>  {/* Type error! */}
      {children}
    </motion.button>
  );
}

// ✅ Good - Use HTMLMotionProps
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "animate" | "transition"> {
  children: React.ReactNode;
}

export function AnimatedButton({ children, ...props }: ButtonProps) {
  return (
    <motion.button animate={{ scale: 1 }} {...props}>
      {children}
    </motion.button>
  );
}

// ✅ Alternative - Don't extend, just use inline
export function AnimatedButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      {children}
    </motion.button>
  );
}
```

**Key Points:**
- Use `HTMLMotionProps<"element">` from `framer-motion` for motion components
- Omit conflicting props like `animate` and `transition` if you're setting them directly
- Common conflicting props: `onAnimationStart`, `onAnimationEnd`, `animate`, `transition`

## Pre-Build Checklist

Before running `npm run build`, ensure:

1. **Run ESLint:**
   ```bash
   npm run lint
   ```

2. **Run Type Check:**
   ```bash
   npx tsc --noEmit
   ```

3. **Fix Auto-fixable Issues:**
   ```bash
   npm run lint -- --fix
   ```

## VSCode Setup for Real-time Error Detection

Add these extensions to catch errors while coding:

1. **ESLint Extension** (`dbaeumer.vscode-eslint`)
2. **TypeScript Extension** (built-in, ensure enabled)

### Recommended VSCode Settings

Add to `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## Git Pre-commit Hook

Prevent committing code with errors by adding a pre-commit hook.

### Using Husky and lint-staged

1. **Install dependencies:**
   ```bash
   npm install --save-dev husky lint-staged
   ```

2. **Configure package.json:**
   ```json
   {
     "lint-staged": {
       "*.{ts,tsx}": [
         "eslint --fix",
         "tsc --noEmit"
       ]
     }
   }
   ```

3. **Setup husky:**
   ```bash
   npx husky init
   echo "npx lint-staged" > .husky/pre-commit
   ```

## Common Fix Patterns

### Quick Find & Replace

For bulk fixes, use these regex patterns in your editor:

1. **Apostrophes in strings:**
   - Find: `>([^<]*)'([^<]*)<`
   - Replace: `>$1&apos;$2<`

2. **Double quotes in strings:**
   - Find: `>([^<]*)"([^<]*)<`
   - Replace: `>$1&quot;$2<`

**Note:** Always review changes after bulk replacements.

## Build Command Best Practices

### Development
```bash
# Regular development
npm run dev

# With type checking
npm run dev & npx tsc --noEmit --watch
```

### Pre-Production
```bash
# 1. Clean install
npm ci

# 2. Lint check
npm run lint

# 3. Type check
npx tsc --noEmit

# 4. Build
npm run build

# 5. Test build locally
npm start
```

## ESLint Configuration Tips

If you need to temporarily disable rules (use sparingly):

```tsx
// Disable for specific line
// eslint-disable-next-line react/no-unescaped-entities
<p>Don't do this often</p>

// Disable for entire file (avoid this)
/* eslint-disable react/no-unescaped-entities */
```

**Warning:** Disabling rules should be a last resort. Fix the underlying issue instead.

## Next.js Configuration Issues

### Experimental Features Causing Module Errors

**Error Example:**
```
Error: Cannot find module 'critters'
Error occurred prerendering page "/404"
```

**Problem:**
Experimental Next.js features may have missing or unstable dependencies.

**Solution:**

```js
// ❌ Bad - Using experimental features without proper setup
// next.config.js
const nextConfig = {
  experimental: {
    optimizeCss: true,  // May require additional dependencies
    serverActions: true,
  },
}

// ✅ Good - Only enable stable experimental features you need
const nextConfig = {
  // Remove experimental features unless specifically required
  // and you've installed all necessary dependencies
}

// ✅ If you need experimental features, install dependencies
// For optimizeCss: npm install critters
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
}
```

**Best Practices:**
- Only enable experimental features if you absolutely need them
- Read the Next.js documentation for each experimental feature
- Check if additional dependencies are required
- Test thoroughly before deploying to production
- Consider waiting for features to become stable

### Common Next.js Config Issues

```js
// next.config.js
const nextConfig = {
  // ✅ Safe and recommended
  reactStrictMode: true,
  swcMinify: true,

  // ✅ Production optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ⚠️ Use with caution - experimental
  experimental: {
    // Only enable if needed and tested
  },
}
```

## Troubleshooting

### Build succeeds locally but fails in CI/CD

1. Check Node.js version matches between environments
2. Ensure `package-lock.json` is committed
3. Use `npm ci` instead of `npm install` in CI
4. Check environment variables are set correctly
5. Verify all dependencies are in `dependencies` not `devDependencies`

### Type errors only show during build

1. Enable `"strict": true` in `tsconfig.json`
2. Run `tsc --noEmit` regularly during development
3. Configure your editor to show TypeScript errors inline
4. Ensure your editor is using the workspace TypeScript version

### Module not found errors

1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Check import paths use correct aliases (`@/` prefix)
4. Verify the file actually exists at the import path

## Resources

- [Next.js ESLint Configuration](https://nextjs.org/docs/app/building-your-application/configuring/eslint)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [ESLint Rules Reference](https://eslint.org/docs/latest/rules/)

## Quick Reference

| Error Type | Quick Fix | File Example | Command |
|------------|-----------|--------------|---------|
| Unescaped quotes | Use `&apos;` or `&quot;` | `app/page.tsx:98` | - |
| Unused imports | Remove or use the import | `components/widgets/task-board.tsx:6` | `npm run lint -- --fix` |
| Any types | Add specific types/interfaces | `app/page.tsx:290` | - |
| Type mismatch | Add missing type to union | `app/admin/users/page.tsx:18` | - |
| Framer Motion types | Use `HTMLMotionProps<"element">` | `components/ui/magnetic-button.tsx` | - |
| Experimental features | Remove or install dependencies | `next.config.js` | - |
| All auto-fixable | Run auto-fix | - | `npm run lint -- --fix` |
| Type errors | Check types | - | `npx tsc --noEmit` |
| Full check | Run build | - | `npm run build` |

---

## Real Examples from This Project

### Example 1: Unused Import (Fixed)
**Location:** `components/widgets/task-board.tsx:6`

```tsx
// Before
import { cn } from "@/lib/utils/cn";

// After
// Removed - wasn't being used in the component
```

### Example 2: Type Mismatch (Fixed)
**Location:** `app/admin/users/page.tsx:17-18`

```tsx
// Before
const roleColors: Record<string, "default" | "secondary" | "success"> = {
  admin: "destructive",  // Error: not in type union
  editor: "default",
  viewer: "secondary",
};

// After
const roleColors: Record<string, "default" | "secondary" | "success" | "destructive"> = {
  admin: "destructive",  // ✅ Now included in type union
  editor: "default",
  viewer: "secondary",
};
```

### Example 3: Framer Motion Type Conflict (Fixed)
**Location:** `components/ui/magnetic-button.tsx:7`

```tsx
// Before
interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

// After
import { HTMLMotionProps } from "framer-motion";

interface MagneticButtonProps extends Omit<HTMLMotionProps<"button">, "animate" | "transition"> {
  children: React.ReactNode;
}
```

### Example 4: Experimental Feature Issue (Fixed)
**Location:** `next.config.js:8-10`

```js
// Before
experimental: {
  optimizeCss: true,  // Caused "Cannot find module 'critters'" error
},

// After
// Removed experimental features that weren't essential
// Config is now more stable
```

---

**Remember:** A clean build is a happy build. Fix errors as they appear, don't let them accumulate.

## Automated Checks

Add this script to your `package.json` for a complete pre-build check:

```json
{
  "scripts": {
    "prebuild": "npm run lint && tsc --noEmit",
    "build": "next build",
    "check": "npm run lint && tsc --noEmit && npm run build"
  }
}
```

Then run:
```bash
npm run check  # Runs all checks before building
```
