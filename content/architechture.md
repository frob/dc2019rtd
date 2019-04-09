::: slide

>>> notes

- We need to bring Drupal and Elixir together
- pools for requests
  - you can easily exhaust your system resources if you do not limit the maximum number of concurrent processes that your program can spawn. Poolboy is a widely used lightweight, generic pooling library for Erlang that addresses this issue.
  - http://learningelixir.joekain.com/streaming-through-a-pool-in-elixir/
  - We can try using a pool of processes to handle URL unshortening in Domain Scraper. Previously, I used a queue of asynchronous tasks for this purpose. Using a pool differs from using a queue in that the queue can get blocked if one URL takes a very long time to unshorten.


>>>

# Architecture for Drupal Integration

:::

::: slide

>>> notes

- Easy - Drupal as Drupal, Phoenix as webserver/ESI
  - Drupal, PHP, Maria, Nginx/Apache for content management
  - Phoenix, Cowboy for application serving HTTP/S and WS

>>>

# Easy Integration

:::

::: slide

>>> notes

- Easiest - Drupal as Drupal and Phoenix as Phoenix, include phoenix.js
  - Drupal, PHP, Maria, Nginx/Apache for HTTP/S
  - Phoenix, Postgres, Cowboy for WS

>>>

# Easiest Integration

:::

::: slide

>>> notes

- Hard - Drupal as CGI, Phoenix as webserver/ESI
  - Drupal, PHP, Maria for content management com via FastCGI
  - Phoenix, Cowboy for app serving

>>>

# Hard Integration

:::
