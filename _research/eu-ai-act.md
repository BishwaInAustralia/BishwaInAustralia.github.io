---
layout: research
title: "Notes on the EU AI Act"
description: "A reading breakdown of the EU AI Act — structure, scope, key provisions, and open questions."
date: 2026-03-01
tags: [AI, EU, Regulation]
---

## What It Is

The EU AI Act is the world's first comprehensive legal framework specifically governing artificial intelligence systems. It was formally adopted in 2024 and applies across all EU member states.

It takes a **risk-based approach**: different rules apply depending on how an AI system is classified. The higher the risk, the more stringent the requirements.

---

## Risk Tiers

**Unacceptable Risk — Prohibited**
- Social scoring by governments
- Real-time biometric surveillance in public spaces (with narrow law enforcement exceptions)
- Subliminal manipulation
- Exploitation of vulnerabilities (age, disability)

**High Risk — Heavily Regulated**
Systems used in: critical infrastructure, education, employment, essential services, law enforcement, migration, administration of justice.

Requirements for high-risk systems:
- Conformity assessment before deployment
- Technical documentation
- Transparency to users
- Human oversight mechanisms
- Registration in an EU database

**Limited Risk — Transparency Obligations**
- Chatbots must disclose they are AI
- Deepfakes must be labelled

**Minimal Risk — No Specific Requirements**
- Spam filters, AI in video games, etc.

---

## General Purpose AI (GPAI)

This was added late and remains the most contested part of the framework.

All GPAI models must:
- Provide technical documentation
- Comply with EU copyright law
- Publish training data summaries

**Systemic risk models** (above a compute threshold: 10^25 FLOPs) face additional requirements:
- Adversarial testing
- Incident reporting
- Cybersecurity measures
- Energy efficiency reporting

Key open question: **how will the compute threshold be administered?** The threshold is a proxy for capability, not a measure of risk, and will become increasingly inadequate as training efficiency improves.

---

## Enforcement

- Each member state appoints a national competent authority
- A new **EU AI Office** coordinates cross-border enforcement
- Fines: up to €35M or 7% of global turnover for prohibited practices; €15M or 3% for other violations; €7.5M or 1.5% for incorrect information

---

## Open Questions

1. **GPAI definitions are underspecified.** What counts as a "foundation model"? The Act uses compute thresholds that may not track actual risk.

2. **Enforcement fragmentation.** Member states will interpret requirements differently. Regulatory arbitrage within the EU is possible.

3. **Extraterritorial reach is ambitious.** The Act applies to systems deployed in the EU regardless of where developed. Enforcement against non-EU providers is an open problem.

4. **The conformity assessment process is immature.** No accredited audit bodies exist yet. Standards are still being written.

---

## Key Sources

- [Official EU AI Act text](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32024R1689)
- EU AI Office: [digital-strategy.ec.europa.eu](https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence)
- Future of Life Institute Act summary
- Centre for European Policy Studies analysis papers
