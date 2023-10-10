---
layout: default
title: Bespoke Software
---

<h1>Blog</h1>
<ul>
{% for entry in site.blog["bespoke-software"] %}
    <li>    
    {% if entry.image and entry.image != "" %}
        <img src="{{ entry.image }}" alt="{{ entry.title }}" />
    {% endif %}
        <a href="{{ entry.url }}">{{ entry.title }}</a>
    </li>
{% endfor %}
</ul>