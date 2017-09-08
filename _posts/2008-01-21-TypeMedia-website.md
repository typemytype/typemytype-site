---
layout: post
title: TypeMedia website
tags:
    - typeMedia
    - website
---

The new [TypeMedia](http://new.typemedia.org/) website is made in [Django](http://www.djangoproject.com), with a wiki and a complete blog (archive, tags, comments).

<!--more-->

The wiki has a revision history, so you can go back in time to restore the content. Each wiki page and blog has comments.

The wiki and blog have a sublevel admin section to create pages or posts. For the real admins, there is always the django build in adminsection.

Tags has a nice cloud layout with fontsize and color to mark the most important tags. To add tags to a wiki page or blog I wrote some javascript (delicious style), so you just click or write new ones to the post.

Comments are an adaptation of the build in free-comments extended with [comments-utils](http://code.google.com/p/django-comment-utils/) (moderation and [akismet](http://www.voidspace.org.uk/python/akismet_python.html)) and my own anti-spam server side code (on this site it’s a typographical question).

The header of the website is built with [lettersetter](http://lettersetter.net/) by [lettError](http://letterror.com/) and [TypeSupply](http://typesupply.com/).