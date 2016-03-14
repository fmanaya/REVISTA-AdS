---
title: test associatedFiles
autor: otro autor
numrev: 999
layout: "default"
isPage: true
numArticulo: 5
associatedFilesRelative: false
associatedFilesPath: './includes'
---

<%- @getUrl() %>

<% for file in @getDocument().getAssociatedFiles().toJSON(): %>
<article class="news">
    <header>
<h2><%= file.title %></h2>
    </header>
    <section>
<% if file.img: %><img src="<%= @getThumbnail(file.img, 'medium-phi') %>" alt="" title="" copyright=""/><% end %>
<% if file.imgs: %>
<% for img in file.imgs: %>
<img src="<%= @getThumbnail(img.src, 'medium-phi') %>" alt="" title="<%= img.title %>" copyright="<%= img.cp %>"/>
<% end %>
<% end %>
<%- file.contentRenderedWithoutLayouts %>
    </section>
</article>
<% end %>

