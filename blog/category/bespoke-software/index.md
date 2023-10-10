---
layout: default
title: Bespoke Software
---

<h1>Blog</h1>
<ul>
{% assign bespoke_posts = site.blog | where: "category", "bespoke-software" %}
{% for entry in bespoke_posts %}
    <li>    
    {% if entry.image and entry.image != "" %}
        <img src="{{ entry.image }}" alt="{{ entry.title }}" />
    {% endif %}
        <a href="{{ entry.url }}">{{ entry.title }}</a>
    </li>
{% endfor %}
</ul>