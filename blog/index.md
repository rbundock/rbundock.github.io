---
layout: default
title: Blog
---

<h1>Blog</h1>
<ul>
{% for entry in site.blog %}
    <li>    
    {% if entry.image and entry.image != "" %}
        <img src="{{ entry.image }}" alt="{{ entry.title }}" />
    {% endif %}
        <a href="{{ entry.url }}">{{ entry.title }}</a>
        <small>{{ entry.date | date: '%B %d, %Y' }}</small>
    </li>
{% endfor %}
</ul>