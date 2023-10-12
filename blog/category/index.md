---
layout: default
title: Categories
---

<h1>Categories</h1>
<ul>
{% for entry in site.category %}
    <li>    
        <a href="/blog/topics/{{ entry.topic }}">{{ entry.topic }}</a>
    </li>
{% endfor %}
</ul>