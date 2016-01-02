---
title: test partials
autor: Pilara Piedrafita Acín
numrev: 999
layout: "default"
isPage: false
numArticulo: 2
associatedFilesRelative: false
associatedFilesPath: './art-2'
---

<%- @getUrl() %>

<% for file in @getDocument().getAssociatedFiles().toJSON(): %>
<article>
    <header>
## <%= file.title %>
    </header>
    <section>
<% if file.img: %><img src="<%= @getThumbnail(file.img, 'medium-phi') %>" alt="" title="" copyright=""/><% end %>
<%- file.content %>
    </section>
</article>
<% end %>
----
<% for file in @getDocument().getAssociatedFiles().toJSON(): %>
<%- @partial('noticia', false, @, {doc: file}) %>
<% end %>