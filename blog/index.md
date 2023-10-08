---
layout: default
title: Blog
---

<h1>Blog</h1>
<ul>
{% for entry in site.blog %}
    <li>
        <img src="{{ entry.image }}" alt="{{ entry.title }}" />
        <a href="{{ entry.url }}">{{ entry.title }}</a>
        <small>{{ entry.date | date: '%B %d, %Y' }}</small>
    </li>
{% endfor %}
</ul>