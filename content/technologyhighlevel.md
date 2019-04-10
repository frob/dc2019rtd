---
parser: pug
---

section

  aside.notes
    :markdown-it
      - First off it has a similar logo, so it has to be good right?

  h1 Elixir

  img(src="/content/images/elixir-logo.png" style="max-height:400px; width: auto")

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
  ul
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
      - concurrency
        - async isn't concurancy
        - WhatsApp 2 million on one node less than 20 people
          - old numbers but it is hard to beat these numbers when this is already beating world wide sms traffic
        - Bleacher Report
          - from few minutes for a push
          - 150 aws instances with lots of caching
          - after 10-30ms response for push
          - 30 aws instances with no caching

  h2 Concurrency
  ul
    li async isn't concurrency
    li.fragment WhatsApp 2 million
    li.fragment Bleacher Report
      ul
        li.fragment from minutes to millisecond
        li.fragment from 150 servers to 30
        li.fragment from heavy cache to no cache

section

  aside.notes
    :markdown-it
      - Performance
        - WhatsApp 2 mill was Erlang
        - Bleacher Report was Pure Elixir
        - Phoenix 2 mill on a heafty server 40 cores 128GB ram
          - As benchmarked with 40 machines opening connectsions at 40/s to send wikipedia articles to eachother

  h2 Performance
  ul
    li WhatsApp
    li Bleacher Report
    li.fragment Phoenix 2 millions concurrent connections on one beefy machine

section

  aside.notes
    :markdown-it
      - remote_console
      - observer

  h2 Other Cool Stuff

  pre.fragment(style="text-align:center;") remote_console
  pre.fragment(style="text-align:center;")
    div observer
    img(src="/content/images/opbserver.png")

section

  aside.notes
    :markdown-it
      - What BEAM is good at
        - long running
        - soft real-time
        - high concurrency
      - What BEAM is not good at
        - short running
        - true real-time

  h1 What is Elixir good at

  div.fragment long running
  div.fragment soft real-time
  div.fragment high concurrency

section

  aside.notes
    :markdown-it
      - What BEAM is good at
        - long running
        - soft real-time
        - high concurrency
      - What BEAM is not good at
        - short running
        - true real-time

  h1 What is Elixir not good at

  div.fragment short running
  div.fragment true real-time
