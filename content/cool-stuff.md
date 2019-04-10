---
  parser: pug
---
section(data-background-image="/content/images/brandbgtop.png")

  aside.notes
    :markdown-it
      - In 2015 I wrote a blog post about Elixir performance
      - Some not-scientific-at-all™ benchmarks showed that Phoenix, at that time was as almost as performant and scalable as a static site


  :markdown-it
    ## Some not-scientific-at-all™ tests

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
      - The next month something very interesting happened

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
      - The phoenix team was able to simulate using 30-40 aws severs
      - hitting one really beaffy server 2 million connections
      - They could have pushed if further, but thought why?
      - php has a problem
        - It can never do this
        - I am not one who likes to say something can never happen
        - what I am really saying is it would take a tremendouse effort to do anything remotely like this in php.
        - That is because of the fundemental way php works
        - it is designed around the request response lifecycle
        - it isn't horrible at long running things anymore, but it still isn't good.
        - Drupal (or anything based on Symphony HTTPKernel) are especially bound by this.

  h1 2 Million Served
  img(src="/content/images/2mil.png")
