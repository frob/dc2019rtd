---
  parser: pug
---
section

  aside.notes
    :markdown-it
      - Low level
      - How does it all fit together?
        - User -> Alexa -> Lambda -> Drupal
        - Drupal -> Lambda -> Alexa -> User
        - It might sounds like lots of moving parts
      - Why put lambda into the flow, Drupal can do REST
        - Alexa needs an endpoint that can format the call responce a certain way
        - Lambda allows us a graceful fallback in case of Drupal availability allowing the service to scale better

  h1 Low level

  p How does it all fit together?

  ul
    li.fragment User -> Alexa -> Lambda -> Drupal
    li.fragment Drupal -> Lambda -> Alexa -> User
    li.fragment It might sounds like lots of moving parts
    li.fragment Why put lambda into the flow, Drupal can do REST
      ul.fragment
        li Alexa needs an endpoint that can format the call responce a certain way
        li Lambda allows us a graceful fallback in case of Drupal availability allowing the service to scale better

section
  aside.notes
    :markdown-it
      - architecture overview
        - I talk to Alexa
        - Alexa calls lambda
        - Lambda calls Drupal
        - Drupal returns to lambda
        - Lambda gives the response to Alexa
        - Alexa talks back to me
        - Notice I am not using the chatbot api module in this architecture
        - @TODO This doesn't really work.

  :markdown-it

    h2 architecture overview

      - I talk to Alexa
      - Alexa calls lambda
      - Lambda calls Drupal
      - Drupal returns to lambda
      - Lambda gives the response to Alexa
      - Alexa talks back to me
