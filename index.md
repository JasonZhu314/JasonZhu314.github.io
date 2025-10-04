---
layout: splash
title: "Hi there, I'm Jason Zhu!"
author_profile: true
header:
  overlay_color: "#0b132b"
  overlay_filter: "0.35"
  overlay_image: images/editing-talk.png
  actions:
    - label: "Read the Blog"
      url: /year-archive/
    - label: "Explore Projects"
      url: /portfolio/
    - label: "Search the Site"
      url: /search/
feature_row:
  - image_path: images/500x300.png
    alt: "Blogs"
    title: "Blog & Notes"
    url: /year-archive/
    excerpt: "Writing on AI, mathematics, life, and everything in between."
  - image_path: images/profile.jpg
    alt: "Projects"
    title: "Projects"
    url: /portfolio/
    excerpt: "Selected coding projects."
  - image_path: images/publications.png
    alt: "Publications"
    title: "Publications"
    url: /publications/
    excerpt: "Nothing of substance here."
---

# About Me

I’m a sophomore at the School of Mathematical Sciences, Peking University, working at the intersection of **computational mathematics** and **artificial intelligence**. My current interests include **scientific machine learning**, **optimization for deep learning**, **reinforcement learning**. I aim to develop
stable and efficient algorithms that leverage computational mathematics to advance deep learning models,
and to apply methods from AI to tackle challenging problems in computational mathematics, thereby promoting scientific
progress.

I am also involved in **AI for Mathematics** (AI4M) and have a vision of using AI to assist mathematicians in their research, such as automating the translation process from natural language to formal language such as Lean4 and the generation of new conjectures or proofs. I believe that AI and Mathematics have a bidirectional relationship, where AI can aid in mathematical research, and mathematical principles can enhance AI models, thereby fostering mutual development.

{% include feature_row %}

<!-- {% assign recent_posts = site.posts | slice: 0, 3 %} -->
<!-- {% if recent_posts and recent_posts.size > 0 %} -->

<!-- ## Latest Posts

{% for post in recent_posts %}
{% include archive-single.html type="list" %}
{% endfor %}

<p><a class="btn btn--inverse" href="/year-archive/">Browse all posts →</a></p>
{% endif %}

{% if site.publications and site.publications.size > 0 %}
{% assign recent_pubs = site.publications | sort: "date" | reverse | slice: 0, 3 %}
## Recent Publications

{% for post in recent_pubs %}
{% include archive-single.html type="list" %}
{% endfor %}

<p><a class="btn btn--inverse" href="/publications/">See full publication list →</a></p>
{% endif %}

{% if site.portfolio and site.portfolio.size > 0 %}
{% assign featured_projects = site.portfolio | sort: "date" | reverse | slice: 0, 6 %}
## Featured Projects

<div class="grid__wrapper">
{% for post in featured_projects %}
{% include archive-single.html type="grid" %}
{% endfor %}
</div>

<p><a class="btn btn--inverse" href="/portfolio/">All projects →</a></p>
{% endif %}

{% if site.data.navigation.main %} -->

Looking for something specific? Check the navigation bar above!
{% endif %}
