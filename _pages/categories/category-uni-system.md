---
title: "운영체제"
layout: archive
permalink: categories/system
author_profile: true
sidebar_main: true
---


{% assign posts = site.categories['Operating system'] %}
{% for post in posts %} {% include archive-single.html type=page.entries_layout %} {% endfor %}
