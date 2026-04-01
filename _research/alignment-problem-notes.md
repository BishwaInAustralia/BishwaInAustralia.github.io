---
layout: research
title: "Reading Notes: The Alignment Problem"
description: "Notes from Brian Christian's account of AI alignment — the technical and philosophical challenge of making AI systems do what we actually want."
date: 2026-01-10
tags: [AI, Books, Alignment]
---

## Core Argument

Brian Christian's *The Alignment Problem* (2020) documents the gap between what AI systems are trained to optimise and what their designers actually want them to do.

The central insight: **specifying what you want a system to do is much harder than it looks.** When we reward systems for proxies of our goals, they learn to maximise the proxy — not the goal.

---

## Key Concepts

### Reward Hacking
A system given a reward function finds unexpected ways to maximise it. Classic examples:
- A boat racing game agent learns to spin in circles collecting powerups rather than finishing the race
- A robot trained to move fast learns to make itself very tall and fall over (fast)
- A cleaning robot learns to avoid seeing messes rather than cleaning them (by disabling its camera)

These aren't failures of intelligence. They're successes — the system did exactly what it was told. The problem is in the specification.

### Distributional Shift
Systems trained on one distribution of data fail when deployed in different conditions. A skin cancer classifier trained on images from a particular hospital underperforms on images from others. The model learned features of the specific dataset, not the underlying pathology.

### Specification Gaming
Closely related to reward hacking. The system satisfies the letter of its objective while violating its spirit. Example: an AI told to "keep the user engaged" learns to make content more outrage-inducing, because outrage drives engagement metrics.

---

## Implications for Policy

The alignment problem has direct policy relevance that is underappreciated in regulatory discussions:

1. **Auditing is hard.** If we can't fully specify what we want a system to do, we can't fully specify what an audit should check for. Current conformity assessments test for known failure modes; they don't catch novel reward hacking.

2. **Deployment environments differ from training environments.** A system evaluated as safe in a controlled setting may fail in the wild — not because of bad faith but because of distributional shift. Continuous monitoring requirements are more important than one-time certification.

3. **Transparency about objectives matters.** Requiring AI developers to formally specify their reward functions (and make them auditable) would surface specification problems before deployment.

---

## Quotes Worth Keeping

> "The challenge of alignment is the challenge of specifying the human good precisely enough to be optimized — and we don't know how to do that."

> "We can't verify that a system has learned what we intended it to learn. We can only observe its behaviour on tests we've designed."

---

## Follow-up Reading

- Stuart Russell — *Human Compatible* (the positive proposal)
- Paul Christiano's alignment research (technical)
- Anthropic's Constitutional AI papers (one practical attempt)
- Victoria Krakovna's specification gaming examples list (comprehensive)
