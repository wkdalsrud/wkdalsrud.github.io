---
title: "이산수학"
layout: archive
permalink: categories/dis
author_profile: true
sidebar_main: true
---


{% assign posts = site.categories['Discrete mathematics'] %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}