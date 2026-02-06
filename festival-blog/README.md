# Common Grounds Community Festival - Blog Site

A Next.js-powered blog with Markdown content for the Common Grounds Community Festival at the Lookout, Otford.

## Features

🌿 **Markdown-based blog posts** - Write content in simple Markdown files
📱 **Fully responsive** - Beautiful on all devices  
⚡ **Static site generation** - Fast loading, SEO-friendly
🎨 **Earthy design** - Nature-inspired aesthetic with farm background
✍️ **Easy content management** - Add blog posts by creating `.md` files

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your site.

### 3. Build for Production

```bash
npm run build
```

## Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

1. **Push to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live! 🎉

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

### Method 3: Drag & Drop

```bash
# Build the site
npm run build

# Go to vercel.com and drag the 'out' folder
```

## Writing Blog Posts

### Create a New Post

1. Create a new `.md` file in `content/posts/`
2. Add frontmatter at the top:

```markdown
---
title: "Your Post Title"
date: "2024-03-20"
author: "Your Name"
excerpt: "A short description of your post"
coverImage: "https://your-image-url.com/image.jpg"
---

Your content here in Markdown...
```

3. Write your content using Markdown
4. Save and restart the dev server

### Frontmatter Fields

- **title**: Post title (required)
- **date**: Publication date in YYYY-MM-DD format (required)
- **author**: Author name (optional)
- **excerpt**: Short description for card previews (required)
- **coverImage**: Full URL to cover image (required)

### Markdown Tips

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point
- Another point

1. Numbered list
2. Another item

[Link text](https://url.com)

![Image alt text](https://image-url.com/image.jpg)

> Blockquote text
```

## Project Structure

```
festival-blog/
├── app/
│   ├── layout.js          # Root layout
│   ├── page.js            # Home page
│   ├── globals.css        # Global styles
│   └── posts/
│       └── [slug]/
│           └── page.js    # Individual post pages
├── components/
│   ├── Header.js          # Site header
│   └── Footer.js          # Site footer
├── content/
│   └── posts/             # Your blog posts go here!
│       ├── post-1.md
│       ├── post-2.md
│       └── ...
├── lib/
│   └── posts.js           # Post loading utilities
└── public/                # Static assets
```

## Customization

### Change Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --earth-clay: #C8956B;
  --earth-moss: #5A6B4C;
  --earth-sage: #8B9B7F;
  /* ... etc */
}
```

### Change Background Image

Update the background URL in `app/globals.css`:

```css
body {
  background: linear-gradient(...),
              url('YOUR-NEW-IMAGE-URL') fixed center/cover;
}
```

### Update Header

Edit `components/Header.js` to change the festival details.

### Update Footer

Edit `components/Footer.js` to change the acknowledgment or add contact info.

## Adding More Features

### Add a Contact Form

Create `app/contact/page.js` with a form component.

### Add Categories/Tags

1. Add `tags: ["category1", "category2"]` to post frontmatter
2. Update `lib/posts.js` to filter by tags
3. Create category pages

### Add Images to Posts

1. Put images in `public/images/`
2. Reference in Markdown: `![Alt text](/images/your-image.jpg)`

## Troubleshooting

### Posts not showing up?

- Check that the `.md` file is in `content/posts/`
- Verify frontmatter is formatted correctly with `---` delimiters
- Make sure `date` is in YYYY-MM-DD format
- Restart the dev server

### Build errors?

- Run `npm install` again
- Delete `.next` folder and rebuild
- Check for syntax errors in Markdown files

### Images not loading?

- Use full URLs for external images
- For local images, place in `public/` and reference as `/image.jpg`
- Check image URLs are accessible

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [Vercel Documentation](https://vercel.com/docs)

## Support

For questions about the festival, visit our website or contact the festival organizers.

---

Built with ❤️ for the Common Grounds Community Festival
