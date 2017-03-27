# Air

## Overview
Air is a Ghost blogging theme based on Airbnb's design blog. An example site can be found [here](http://changliu.io/blog)

## Table of Contents
1. [Getting Started](#getting-started)
2. [Features](#features)
   1. [Blog Logo](#blog-logo)
   2. [Post Title Formatting](#post-title-formatting)
   3. [Adding Social Links and Tags](#adding-social-links-and-tags)
3. [Customization](#customization)
   1. [Fonts and Colors](#fonts-and-colors)
   2. [Changing Default Image for Posts](#changing-default-image-for-posts)
4. [Future Support](#future-support)


## Getting Started
To use this theme in your blog, download this folder and place it into your Ghost blog's `/content/themes` directory.

Once that's done, you should be able to select **Air** as a theme from the Theme dropdown in the "General" tab of your Ghost Admin panel.

![Choosing Theme from Admin Panel](https://cloud.githubusercontent.com/assets/8483660/24348449/9b31136c-1290-11e7-9a76-5a14ac4fbff8.png)

## Features
### Blog Logo
Adding a logo to the blog from the "General" tab will automatically create a fixed circular logo in the top left corner of the blog:

![Blog with Logo](https://cloud.githubusercontent.com/assets/8483660/24348452/9b3ad3b6-1290-11e7-835a-f599a6e7bf40.png)

### Post Title Formatting
Post titles can have a main title, colored in the accent color, and a secondary title, colored in a more subtle gray.

The two titles are formatted by adding a semicolon to separate each type. Setting the post title as "Montreal;A Travel Guide" would result in:

![Blog Post with Formatted Title](https://cloud.githubusercontent.com/assets/8483660/24348451/9b374372-1290-11e7-8217-8f3b20a29c25.png)

### Adding Social Links and Tags
Currently, Ghost does not support retrieval of all possible tags used in a blog. You can click on tags from posts to see all posts with that tag but if you want to list all your tags on the menu, you must manually edit the `navigation.hbs` file (line 24) in the `partials` folder.

You can also add social media and other links here to customize the menu bar. I've added some sample links in there that are commented out for your reference.

![Edit Code to Add Links](https://cloud.githubusercontent.com/assets/8483660/24348448/9b2fefc8-1290-11e7-8110-d9ea78abdf8d.png)

![Menu With Links](https://cloud.githubusercontent.com/assets/8483660/24348450/9b340dce-1290-11e7-9f39-4855c3d54785.png)

## Customization
### Fonts and Colors
To change the fonts, colors, and other CSS properties of the blog, you need to have [Sass](http://sass-lang.com/install) and optionally [Compass](http://compass-style.org/) installed.

Run `sass -w assets/scss:assets/css` or if you have Compass, `compass watch` from within the root directory to start making changes.

All the fonts and colors can be found and edited in `assets/scss/_config.scss`. For example, the main accent color is set on line 2 and defaults to `#ed6a5a`.

### Changing Default Image for Posts
Posts without images default to [this placeholder image](http://placehold.it/700x298). Ghost blog post images are 700x298 and if you want to change the default post image, you can edit line 5 in `partials/loop.hbs` and change the URL to point to another image.

## Future Support
* Adding support for a blog cover photo
* Adding an author page and support for multiple authors
* Support for featured posts
