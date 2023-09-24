---
layout: default
title: Stories
---

<h1>All Stories Entries</h1>
<ul>
{% for entry in site.stories %}
    <li>
        <a href="{{ entry.url }}">{{ entry.title }}</a>
        <small>{{ entry.date | date: '%B %d, %Y' }}</small>
    </li>
{% endfor %}
</ul>