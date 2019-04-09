---
  parser: pug
---
section(data-background-image="/content/images/brandbgtop.png")

  aside.notes
    :markdown-it
      - In 2015 I wrote a blog post about Elixir performance
      - Some not-scientific-at-all™ benchmarks showed that Phoenix, at that time was as almost as performant and scalable as a static site

  div.fragment

  :markdown-it
    ## fragment Some not-scientific-at-all™ tests

    ```
    ab -n 1000 -c 100 http://www.a-static-site-i-hosted.com
    ```

    vs

    ```
    ab -n 1000 -c 100 http://127.0.0.1:4000/admin/content
    ```

section(data-background-image="/content/images/brandbgtop.png")

  aside.notes
    :markdown-it
      - In 2015 I wrote a blog post about Elixir performance
      - Some not-scientific-at-all™ benchmarks showed that Phoenix, at that time was as almost as performant and scalable as a static site

  h2.fragment Some not-scientific-at-all™ test results

  div.fragment
    h3 Static
    :markdown-it

      ```
      Requests per second:    182.15 [#/sec] (mean)
      Time per request:       549.001 [ms] (mean)
      Time per request:       5.490 [ms] (mean, across all concurrent requests)
      ```

  div.fragment
    h3 Dynamic
    :markdown-it

      ```
      Requests per second:    133.54 [#/sec] (mean)
      Time per request:       748.844 [ms] (mean)
      Time per request:       7.488 [ms] (mean, across all concurrent requests)
      ```

section(data-background-image="/content/images/brandbgtop.png")

  aside.notes
    :markdown-it
      *Cool Stuff*
      - I believe presentations are more insteresting if you show the cool stuff first

  h2 Live Demo

section

  aside.notes
    :markdown-it

      - notes

  :markdown-it

    ## Drupal Chat

    Show an iFrame demo


section

  aside.notes
    :markdown-it
      - notes

  :markdown-it

    ## Real-time Comments

    Show an iFrame of real-time Drupal node comments

section

  aside.notes
    :markdown-it
      - notes

  :markdown-it

    ## Sketch pad

   Show and Iframe that anyone can draw on
