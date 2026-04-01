---
layout: project
title: "This Website"
description: "A Jekyll-based personal site for writing, research, and projects. Built for longevity and simplicity."
date: 2026-04-01
status: Live
tags: [Build, Web]
---

## Overview

A personal site built on Jekyll and hosted via GitHub Pages. The design goal was a system that is easy to maintain indefinitely — no database, no CMS login, no hosting fees. Files in a folder, pushed to GitHub, automatically published.

---

## Problem

Most personal website systems optimise for features at the cost of longevity. CMS platforms change pricing, deprecate features, or shut down. Custom-built applications require maintenance. The result: most personal sites die within a few years.

The goal here was a system that works in ten years with minimal intervention — and that makes writing as frictionless as possible.

---

## Approach

**Stack decisions:**
- **Jekyll** — static site generator with strong GitHub Pages integration, mature ecosystem, minimal dependencies
- **GitHub Pages** — free hosting, automatic deployment from `main` branch, custom domain support
- **Plain Markdown** — content is just text files, readable without any tooling, portable to any future system

**Design decisions:**
- Editorial aesthetic — optimised for long-form reading
- No JavaScript in the critical path — the site loads and reads without JS
- Google Fonts loaded asynchronously — typography without blocking render
- Responsive but not mobile-first — designed for reading on a screen at a desk, with mobile as a secondary concern

**Content architecture:**
- `_essays/` — timeless, long-form writing
- `_posts/` — dated, shorter posts (Jekyll native)
- `_research/` — notes and analytical breakdowns
- `_projects/` — structured work like this entry
- `_reviews/` — books and ideas

---

## Output

The site you are reading. Source code available on GitHub.

---

## Insights

> The constraint of plain text files is a feature, not a limitation. Markdown written today is readable in any text editor in 2040.

The biggest design decision was resisting the urge to add features. No tags page. No search. No comments. No analytics. Each addition creates a maintenance obligation and a point of failure. The goal was a site that publishes new writing with a single `git push`.

---

## Next Steps

- Add RSS feed (via `jekyll-feed` — already installed)
- Set up custom domain
- Consider adding a `/now` page (what I'm currently working on)
- Possibly add reading time estimates to essays
