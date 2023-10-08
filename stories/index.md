---
layout: default
title: Stories
---

<h1>All Stories Entries</h1>
<ul>
{% for entry in site.stories %}
    <li>
    {% if entry.image and entry.image != "" %}
        <img src="{{ entry.image }}" alt="{{ entry.title }}" />
    {% endif %}
        <a href="{{ entry.url }}">{{ entry.title }}</a>
    </li>
{% endfor %}
</ul>