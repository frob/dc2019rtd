---
  parser: pug
---

section
  aside.notes
    p Amazon is leading in both device adoption and 3rd party app development.
  h1 Amazon is leading in adoption
  img(src="/content/images/marketshare.png")

section
  aside.notes
    :markdown-it
      - Amazon's AI backed NLP service for Amazon
      - Alexa is the voice interface for many amazon devices
        - Echo
        - Echo Dot
        - Echo Show
        - Echo Spot
        - Echo plus
        - Echo Look
        - Fire TV
        - Fire Tablet
        - Amazon app on your phone
      - And non-amazon devices are powered by Alexa
        - Invoxia Triby
        - Ultimate Ears Blast
        - Sonos One
        - Eufy Genie
      - Not an ad, just wanted to show you the saturation of Alexa
        - Aside from amazon on my phone, I don't own an echo
        - Prefer Google Assistant and I have a Google Home
        - There is no denying Alexa is everywhere and can be in anything, but the Google assistant is wherever I am. It is in my phone, and if you have an android phone whether you are using it or not, it is likely in your phone. Even if you have an iPhone, it can be in your phone too. While it is usually nothing more than a timer, it is also more and more the first place I go when I would normally be googling for simple information. Lit the temprature of the sun, or what is the largest north american dinosaur.

  h2 What is alexa and why is it leading?
  h3 Amazon devices
  div(style="column-count: 2;")
    ul
      li.fragment Echo
      li.fragment Echo Dot
      li.fragment Echo Show
      li.fragment Echo Spot
      li.fragment Echo plus
      li.fragment Echo Look
      li.fragment Fire TV
      li.fragment Fire Tablet
      li.fragment Amazon app on your phone
      li.fragment Invoxia Triby
      li.fragment Ultimate Ears Blast
      li.fragment Sonos One
      li.fragment Eufy Genie

section
  aside.notes
    :markdown-it
      Why does Alexa domminate 3rd party apps?

      - I use Google Assistant but I don't have any published google voice apps.
      - I don't have an Alexa enabled device, but I have built and published Alexa skills.
      - Alexa Skills Kit makes it easier to just pick it up and build it.
      - A lot of DIYers will use Alexa to connect to any enpoint with ngrok and do home automation or something else.
      - Amazon has developer programs to help, everything from mothly payments to top application to AWS vouchers to pay for the AWS services that they hope you will be using.
      - I am not sure if they are still doing it, but when I made my voice app Amazon would give the developer a free echo dot if they had over 80 users in the first month. Mine got 78. So close!
        - as an example of that this is a video from the Ben Heck show where he used Alexa to automate his work bench.
          - https://www.youtube.com/watch?v=3TaLlI4BqeI

  h2 What makes Alexa so appealing to developers
  div.fragment
    iframe(width="560" height="315" src="https://www.youtube-nocookie.com/embed/3TaLlI4BqeI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)

section
  aside.notes
    :markdown-it
      - AWS serverless comput service
      - Serverless ooooooo
        - Of corse there is a server because there has to be a place for the code to run.
      - Lambda provides developers with a place to run simple single purpose scripts
        - This allows us to keep the code as simple as possible without having to worry about lingering effects and server maint
      - Multiple languages
        - php isn't one of them
        - I like python, it is well suited for this task
          - So many great libraries exist for python to do many amazing things in scripts
        - Others
          - Javascript
          - go
          - C#
          - Java
  h2 Another reason Alexa dominate in apps
  h3.fragment lambda and tight AWS integration
  div.fragment
    h4 Lambda languages
    :markdown-it
      - Python
      - Javascript
      - Go
      - C#
      - Java

section
  aside.notes
    :markdown-it
      - why we are here!
      - Drupal is an awesome content management system.
      - Why use Drupal
        - Fieldable content
        - User permissions/Content Access
          - Gates access to content
          - Limits access to published content
        - Content Workflow
        - Content Translations
          - Language Matters
        - RESTFULL capible
          - Not limited to the browser
        - Still has a frontend
          - Not limited to not the browser

  h2 How does Drupal fit in?
  img(src="/content/images/druplicon-large.png" style="width:25%")

section
  aside.notes
    :markdown-it
      - There are other voice assistants and it is only fair that I give them some attention too.
      - google assistant
        - Apps are built with "Acitons" on Google using api.ai formerly dialogflow.
        - really well built
        - has a unique training interface
          - Allows you to better see what people are saying
        - focused more on good design less on adoption
        - links
          - console.actions.google.com
          - g.co/dev/facts-about-google
          - g.co/actionsdev
      - microsoft cortana
        - low market share
        - harmon kardon speaker
        - still in preview
        - nice thing is it is built on the bot framework
          - means there is a unified framework for working with voice and text based skills.
      - apple siri
        - sirikit
          - confusing, tied to maps for some reason, very limited in what kinds of things can be done (limited to pre defined domains)
      - likeness to chatbots
      - aws lex
      - microsoft chatbot api
      - ibm watson

  h2 Other Voice Interfaces
  ul
    li.fragment Google Assistant
    li.fragment Microsoft Cortana
    li.fragment Apple Siri

section
  aside.notes
    :markdown-it
      - Eventually,
      - like this puppy, NLP will need to be recued
      - But it isn't so bad right now. Remember that it wasn't too long ago that most people used closed source web browsers.
      - If an open source alternative is available and it is good people will use it.
      - Some people will use it, others will just continue using Edge and Safari

  h2 Call to action
  p Rescue NLP
  div(style="background-image: url(/content/images/puppy.jpg);background-size:100%;width: 75%;height: 0;padding-bottom: 45%;margin-left:auto;margin-right:auto;")
    img(src="/content/images/cage.png" class="fragment fade-out")
  p.fragment Eventually
