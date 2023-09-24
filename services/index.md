---
layout: default
title: Services
---

<h1>All Services Entries</h1>
<ul>
{% for entry in site.services %}
    <li>
        <a href="{{ entry.url }}">{{ entry.title }}</a>
        <small>{{ entry.date | date: '%B %d, %Y' }}</small>
    </li>
{% endfor %}
</ul>