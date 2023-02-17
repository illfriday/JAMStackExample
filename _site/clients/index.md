---
title: Clients
layout: page
---

# {{ title }}

<div class="container mt-4">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

{% for client in clients %}

  <div class="col mb-4">
    <div class="card h-100">
      <h5 class="card-header text-white bg-secondary mb-0">{{ client.name }}</h5>
      <img src="{{client.profile_photo_thumb}}" alt="{{client.name}}" class=" w-100 card-image w-50 d-block mb3">
      <div class="card-body">
        <h6 class="card-title text-muted my-0">{{ client.company }}</h6>
        <div class="card-text font-italic my-0">{{ client.title }}</div>
        <a class="btn btn-small btn-outline-secondary card-link stretched-link" href="{{ client.name | slug }}/">More info</a>  
      </div>
    </div>
  </div>
{% endfor %}

  </div>
</div>
