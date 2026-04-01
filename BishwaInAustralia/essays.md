---
layout: default
title: Essays
description: Deep writing on technology, policy, and society.
---

<div class="page-wrap">

  <div class="section-header">
    <div class="section-label">Writing</div>
    <h1>Essays</h1>
    <p>Deep, timeless writing on technology, policy, and society.</p>
  </div>

  <ul class="card-list">
    {% for essay in site.essays %}
    <li class="card-item">
      <div class="card-item-inner">
        {% if essay.date %}
        <div class="card-date">{{ essay.date | date: "%b %Y" }}</div>
        {% else %}
        <div class="card-date">&mdash;</div>
        {% endif %}
        <div class="card-content">
          {% if essay.tags %}<span class="card-tag">{{ essay.tags | first }}</span>{% endif %}
          <h2><a href="{{ essay.url }}">{{ essay.title }}</a></h2>
          {% if essay.description %}<p>{{ essay.description }}</p>{% endif %}
        </div>
      </div>
    </li>
    {% endfor %}

    {% for post in site.posts %}
    <li class="card-item">
      <div class="card-item-inner">
        <div class="card-date">{{ post.date | date: "%b %Y" }}</div>
        <div class="card-content">
          <span class="card-tag">Post</span>
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          {% if post.description %}<p>{{ post.description }}</p>{% endif %}
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>

</div>
