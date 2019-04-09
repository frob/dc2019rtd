---
parser: pug
---

section

  aside.notes
    :markdown-it
      - BEAM walkthrough

  h1 BEAM

section

  aside.notes
    :markdown-it
      - Erlang
        - 30 year old from Ericson
        - Erlang is good for communication at massive scale
          - Turns out that telephone switches are analagous to the web
          - https://youtu.be/bk3icU8iIto?t=779
        - Code can be deployed to a running server (code deltas)
          - The phones cannot be brought down for any reason

  h2 The ErlangVM

  li.fragment Born from Erlang
  li.fragment Created to solve the problem of communication at scale
  li.fragment Phone networks cannot go down for maintenance

section

  aside.notes
    :markdown-it
      - Processes and messages
        - the vm works like an operating system
        - automatically distributes processes across cpu and cores
        - process is cheap (around 1k) and has own garbage collection
        - one process doesn't block another
        - If a process dies, that is okay it's isolated, you can bring it back,
          - Have you tried turning it off and on again
          - https://youtu.be/bk3icU8iIto?t=939

  h1 Processes and messages

section

  aside.notes
    :markdown-it
      - concurancy
        - async isn't concurancy
        - WhatsApp 2 million on one node less than 20 people
          - old numbers but it is hard to beat these numbers when this is already beating world wide sms traffic
        - Bleacher Report
          - from few minutes for a push
          - 150 aws instances with lots of caching
          - after 10-30ms response for push
          - 30 aws instances with no caching
        - RiotGames

  h2 Concurrency

  li async isn't concurrency
  li.fragment WhatsApp 2 million
  li.fragment Bleacher Report
    li.fragment from minutes to millisecond
    li.fragment from 150 servers to 30
    li.fragment from heavy cache to no cache
  li.fragment RiotGames
    li @TODO find out what Riot uses Elixir for

section

  aside.notes
    :markdown-it
      - Performance
        - WhatsApp 2 mill was Erlang
        - Bleacher Report was Pure Elixir
        - Phoenix 2 mill on a heafty server 40 cores 128GB ram
          - As benchmarked with 40 machines opening connectsions at 40/s to send wikipedia articles to eachother

  h2 Performance

  li WhatsApp
  li Bleacher Report
  li.fragment Phoenix 2 millions concurrent connections on one beefy machine
section

  aside.notes
    :markdown-it
      - remote_console
      - observer

  h2 Other Cool Stuff

  li.fragment remote_console
    :markdown-it
      ```@TODO Show something from remote console```
  li.fragment observer
    // @TODO show an image or gif of the observer
