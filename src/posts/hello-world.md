---
title: Hello World!
date: "2023-01-02"
author: Marnick van der Arend
thumbnailUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80"
description: "This is the first blog post on this website where I talk about why I built this website and what will be coming."
---

Welcome to my blog, dedicated to all things related to the world of IT.
Here, you'll find blogs, tutorials, and insights on a wide range of topics, from programming and software development to architecture and consulting.
My goal is to provide valuable and informative content that helps you stay up-to-date on the latest trends and technologies in the industry.
<br>

Thank you for visiting and I hope you will enjoy reading the blog posts to come! First up, my tech choice for this blog: [SvelteKit](https://kit.svelte.dev/)!

# Why SvelteKit?
As you may know, SvelteKit was in beta a long time, which is why I hesitated to use it. Features might get scrapped, which
would influence my preference for this framework. I've looked at other frameworks as well for some time. 
Angular, React, Next.js where a few of them. While they each have their advantages, the simplicity of SvelteKit is what has my preference.

# Vercel
Currently, I am using [Vercel](https://vercel.com/docs) to host SvelteKit. 
Vercel is listening to my `main` branch on [GitHub](https://github.com/MarnickvdA/abitofsoftware.com), and deploys a new version of my blog for every push to that branch.
I have connected my own domain name to increase brand awareness for A Bit of Software.

# Features
Blogs are in essence very simple static websites. I have designed mine to be as simple to use as possible. 
I write blog posts in a Markdown style format using the [mdsvex](https://mdsvex.com/docs) library. 
The library allows me to include some metadata about blog posts, code examples (with [PrismJS](https://prismjs.com/)) and custom HTML or web components.
It will render everything nicely without me having to worry too much about that.
