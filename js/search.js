---
excludeSearch: true
---

searchData = {
  {% for item in site.posts  %}
  {{ item.url | slugify | jsonify }}: {
    "title": {{ item.title | jsonify }},
    "url": {{ item.url | prepend: site.baseurl | jsonify }},
    "category": {{ item.categories | join: " " | jsonify }},
    "tags": {{ item.tags | join: ", " | jsonify }},
    "content": {{ item.content | strip_html | strip_newlines | jsonify }},
  },
  {% endfor %}
  {% for item in site.pages  %}
    {% unless item.excludeSearch  %}
    {{ item.url | slugify | jsonify }}: {
        "title": {{ item.title | jsonify }},
        "url": {{ item.url | prepend: site.baseurl | jsonify }},
        "category": {{ item.categories | join: ", " | jsonify }},
        "tags": {{ item.tags | join: ", " | jsonify }},
        "content": {{ item.content | strip_html | strip_newlines | jsonify }},
    }{% unless forloop.last %},{% endunless %}
    {% endunless  %}
  {% endfor %}
}


$(document).ready(function () {
    // Set up search
    var index, store;
    index = lunr(function () {
      this.field('id');
      this.field('title', { boost: 10 });
      this.field('author');
      this.field('category');
      this.field('tags');
      this.field('content', { boost: 8 });
    });

    for (id in searchData) {
      data = searchData[id];
      data.id = id;
      index.add(data);
  };

  $("#search_box").keyup(function(){
      query = $("#search_box").val();
      results = index.search(query);
      display_search_results(results, query);
  });
  $("#site_search").submit(function(){
      event.preventDefault();
  });

  function display_search_results(results) {
      var search_results = $("#search_results");
      // Are there any results?
      search_results.empty();
      if (results.length) {
        search_results.empty();
        // Iterate over the results
        results.forEach(function(result) {
          var item = searchData[result.ref];
          // Build a snippet of HTML for this result
          var appendString = '<div><h2 class="' + item.category + '"><a href="' + item.url + '">' + item.title + '</a></h2></div>';
          // Add it to the results
          search_results.append(appendString);
      });

    } else if (query == "") {
        search_results.empty();
    }

    else {
        search_results.html('<div>No results found</div>');
    }
};
});
