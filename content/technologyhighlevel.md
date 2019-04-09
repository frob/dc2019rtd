
::: slide

>>> notes

- BEAM walkthrough
  - Erlang
    - 30 year old from Ericson
    - Erlang is good for communication at massive scale
      - Turns out that telephone switches are analagous to the web
      - https://youtu.be/bk3icU8iIto?t=779
    - Code can be deployed to a running server (code deltas)
      - The phones cannot be brought down for any reason
  - Processes and messages
    - the vm works like an operating system
    - automatically distributes processes across cpu and cores
    - process is cheap (around 1k) and has own garbage collection
    - one process doesn't block another
    - If a process dies, that is okay it's isolated, you can bring it back,
      - Have you tried turning it off and on again
      - https://youtu.be/bk3icU8iIto?t=939
  - concurancy
    - async isn't concurancy
    - WhatsApp 2 million on one node less than 20 people
    - Bleacher Report
      - from few minutes for a push
      - 150 aws instances with lots of caching
      - after 10-30ms response for push
      - 30 aws instances with no caching
    - RiotGames
  - Performance
    - WhatsApp 2 mill was Erlang
    - Bleacher Report was Pure Elixir
    - Phoenix 2 mill on a heafty server 40 cores 128GB ram
      - As benchmarked with 40 machines opening connectsions at 40/s to send wikipedia articles to eachother
  - remote_console
  - observer

>>>

# BEAM

:::
