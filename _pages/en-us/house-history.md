---
page_id: history
layout: page
permalink: /house/history
title: History of our house
lang: en-us
nav: false
support: [gallery]
---

About the origin of our house(s)

## Options for using lightGallery docs tagging

A manual LightGallery directly on the page:

  <div id="thegallery">
    <a href="/assets/img-noresample/astyle/20140831202837-bd2786fa-576x432.jpg" 
data-sub-html="Photo 1 by EJB" >
        <img alt="img1" data-sub-html="img1 title" src="/assets/img-noresample/astyle/20140831202837-bd2786fa-120x120.jpg" />
    </a>
    <a href="/assets/img-noresample/astyle/20150507213246-f23b3981-792x594.jpg" 
data-sub-html="Photo 2 by EJB" >
        <img alt="img2" data-sub-html="img2 title" src="/assets/img-noresample/astyle/20150507213246-f23b3981-120x120.jpg" />
    </a>
</div>

<script>
  lightGallery(document.getElementById("thegallery"), {
    plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen],
    speed: 500,
    thumbnails: true,
    thumbWidth: 60,
    thumbHeight: "40px",
    thumbMargin: 4,
    showMaximizeIcon: true,
    appendSubHtmlTo: '.lg-item',
  });
</script>
<!-- end of manual lg block -->

<h2>Inline opieters</h2>
As an inline include
{% include gallery_layout.liquid gallery=site.data.galleries.astyle %}

<h2>Using lightgallery_tag.rb</h2>
{% gallery %}
/assets/img-noresample/astyle/20140831202837-bd2786fa-576x432.jpg
/assets/img-noresample/astyle/20200311235322-add97e5f-792x594.jpg
/assets/img-noresample/astyle/20200323125151-c56f96cc-1008x582.jpg
{% endgallery %}
<!-- lightgallery_tag.rb auto thumbs -->

<h2>Or simply so (by Jimmy Xiao)</h2>
{% include album.html albumname="ms15" %}
