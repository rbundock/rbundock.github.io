---
layout: default
title: People
---
<h1>People</h1>
<ul>
{% for entry in site.people %}
    <li>
    {% if entry.image and entry.image != "" %}
        <img src="{{ entry.image }}" alt="{{ entry.title }}" />
    {% endif %}
        <a href="{{ entry.url }}">{{ entry.title }}</a>
    </li>
{% endfor %}
</ul>