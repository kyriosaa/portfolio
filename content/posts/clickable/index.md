---
title: If you can see this, nice!
description: I dont intend anyone to see this
date: 2025-11-11
draft: false
slug: /pensieve/clickable-cards
tags:
  - Accessibility
---

Well, I dont know how you're able to read this especially since this isnt meant for public view but hey good job.

## CSS

```css
.grid__item {
  &:hover,
  &:focus-within {
    background-color: #eee;
  }

  a {
    position: relative;
    z-index: 1;
  }

  h2 {
    a {
      position: static;

      &:hover,
      &:focus {
        color: blue;
      }

      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: background-color 0.1s ease-out;
        background-color: transparent;
      }
    }
  }
}
```
