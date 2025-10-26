# Quick Start Guide

## Get Up and Running in 3 Steps

### 1. Install Dependencies
```bash
cd cms-dashboard
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: **http://localhost:3000**

---

## What You'll See

### Landing Page (/)
- Hero section with CTA
- Feature highlights
- Link to dashboard

### Dashboard (/admin)
- 4 stats cards showing key metrics
- Revenue chart (area chart)
- Traffic sources (donut chart)
- Activity feed with recent actions
- Device breakdown statistics
- Content table with all articles
- Server status monitoring
- Task board (Kanban style)

### Other Pages
- `/admin/content` - Content management
- `/admin/media` - Media library
- `/admin/analytics` - Advanced analytics
- `/admin/users` - User management
- `/admin/settings` - Settings panel

---

## Key Interactions

### Mobile View
- Click hamburger menu (top-left) to open sidebar
- Click outside sidebar to close it
- All features responsive

### Desktop View
- Sidebar always visible
- Hover cards for subtle animations
- Click navigation items to switch pages

---

## File Structure Quick Reference

```
cms-dashboard/
├── app/
│   ├── admin/           # All dashboard pages
│   ├── page.tsx         # Landing page
│   └── globals.css      # Design system
├── components/
│   ├── ui/              # Button, Card, Badge, etc.
│   ├── widgets/         # Dashboard widgets
│   └── layouts/         # Sidebar, Header
├── lib/
│   ├── hooks/           # useMediaQuery, useDebounce
│   ├── utils/           # cn, format functions
│   └── mock-data.ts     # Sample data
└── types/               # TypeScript types
```

---

## Customization Quick Tips

### Change Colors
Edit `app/globals.css` → `:root` variables

### Add Widget
1. Create in `components/widgets/`
2. Import in `app/admin/page.tsx`
3. Add to dashboard layout

### Modify Sidebar
Edit `components/layouts/sidebar.tsx` → `navigation` array

### Update Mock Data
Edit `lib/mock-data.ts` → export your data

---

## Next Steps

1. **Replace Mock Data**: Connect to real API
2. **Add Authentication**: Implement NextAuth.js
3. **Add More Widgets**: Create custom visualizations
4. **Deploy**: Push to Vercel or your hosting provider

---

## Troubleshooting

**Port 3000 in use?**
```bash
npm run dev -- -p 3001
```

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Type errors?**
```bash
npm run type-check
```

---

## Quick Commands

```bash
npm run dev          # Development mode
npm run build        # Production build
npm start            # Production server
npm run lint         # Check code quality
npm run type-check   # TypeScript validation
```

---

**You're all set! The application is fully functional and ready to customize.**
