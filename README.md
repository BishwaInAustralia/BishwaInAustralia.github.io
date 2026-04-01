# Personal Site

A Jekyll site built for GitHub Pages. Clean editorial design for writing, research, and projects.

## Quick Start

### 1. Personalise `_config.yml`
```yaml
title: "Your Name"
tagline: "Your tagline"
url: "https://yourusername.github.io"
author:
  name: "Your Name"
  email: "you@example.com"
```

### 2. Publish to GitHub Pages

```bash
# Create a new repo on GitHub named: yourusername.github.io
git init
git add .
git commit -m "Initial site"
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

Then go to: **GitHub repo → Settings → Pages → Source → Deploy from branch (main)**

Your site will be live at `https://yourusername.github.io` within a minute.

---

## Adding Content

### New Essay
Create `_essays/my-essay.md`:
```markdown
---
layout: essay
title: "Essay Title"
description: "One sentence description."
date: 2026-04-02
tags: [AI, Policy]
---

Your essay content here.
```

### New Project
Create `_projects/my-project.md`:
```markdown
---
layout: project
title: "Project Title"
description: "What this project is."
date: 2026-04-02
status: In Progress
tags: [Research]
---

## Overview
...

## Problem
...

## Approach
...

## Output
...

## Insights
...

## Next Steps
...
```

### New Research Note
Create `_research/my-notes.md`:
```markdown
---
layout: research
title: "Notes on X"
description: "Brief description."
date: 2026-04-02
tags: [AI]
---

Your notes here.
```

### New Review
Create `_reviews/book-title.md`:
```markdown
---
layout: review
title: "Book Title"
author: "Author Name"
rating: 4
description: "One line summary."
date: 2026-04-02
tags: [Books]
---

Your review here.
```

### New Post (short/dated)
Create `_posts/YYYY-MM-DD-title.md`:
```markdown
---
layout: post
title: "Post title"
date: 2026-04-02
---

Short post content.
```

---

## Customisation

- **Name & links** → `_config.yml` and `about.md`
- **Nav links** → `_includes/header.html`
- **Colours & fonts** → `assets/css/style.css` (CSS variables at the top)
- **About page** → `about.md`

## Running Locally (optional)

```bash
gem install bundler
bundle install
bundle exec jekyll serve
# → http://localhost:4000
```
