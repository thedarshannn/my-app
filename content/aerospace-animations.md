---
title: "Introducing Animimaginary: High performance web animations"
slug: "aerospace-animations"
description: "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself."
imageUrl: "https://source.unsplash.com/800x400/?space,animation"
date: "2022-09-02"
---

Building believable animations on the web is a balancing act between physics, design intent, and performance. In this post, I walk through the key techniques we used to ship silky-smooth motion that still feels grounded in reality.

- Prefer transform and opacity for 60fps
- Stagger motion with small delays for hierarchy
- Use spring-based easing for natural feel

Read on for code snippets and profiling tips.
