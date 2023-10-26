---
layout: blogs
title: Blog Categories
image: /assets/uploads/story.jpg
headline: The <strong>blog</strong>.
headline_para: 
---

<ul>
{% for entry in site.category %}
    <li>    
        <a href="/blog/category/{{ entry.topic }}">{{ entry.topic }}</a>
    </li>
{% endfor %}
</ul>