---
  parser: pug
---
section(data-background-image="/content/images/brandbgtop.png")

  aside.notes
    :markdown-it
      *Cool Stuff*
      - I believe presentations are more insteresting if you show the cool stuff first
      - Originally this was going to be a live demo
        - I would Ask Alexa for something
        - It would respond
        - I would edit something in Drupal and ask again
        - It would respond differently



  h2 Live Demo

  ul
    li.fragment I would Ask Alexa for something
    li.fragment It would respond
    li.fragment I would edit something in Drupal and ask again
    li.fragment It would respond differently

section

  aside.notes
    :markdown-it

      - But then I had a realization
      - Everyone here has seen the node edit page.
      - About that time my bosses boss came back with some interesting stats from SXSW

  :markdown-it

    ## Realization

    Everyone here has likely seen the node edit page.


section

  aside.notes
    :markdown-it
      - Most of these numbers come from Christonpher Farrel's SXSW presentation I've got no strings https://www.slideshare.net/cwferrel/ive-got-no-screens-internets-screenless-future-sxsw-2018-90319757

  :markdown-it
    ![](/content/images/ivegotnoscreens.png)

    https://twitter.com/chrisferrel/status/972861513928032256

section

  aside.notes
    :markdown-it

      - @TODO add stats from Thors presentation
      - The cool thing he starts with is a prediction from Gartner
        - by 2020, 2 years from now, 30% of webbrowsing will be done without a screen.

  :markdown-it

    ## Numbers are cool

    ### By 2020, 30% of *web* browsing will be done without a screen.

    > Gartner research

section

  aside.notes
    :markdown-it

      - Voice is the new mobile
      - Bottom line
        - Mobile first will be voice first
        - Screens will become speakers
        - Hopefully,
          - People will go from face-down in their phone to face up

  :markdown-it

    ## Voice first is the new mobile first

    ![screenshot of spacejam website](/content/images/spacejam.png)

    > Best viewed on Internet Explorer at 800x600 resolution.

section

  aside.notes
    :markdown-it
      - This graph really shows how imparative this revolution is.
      -
      - The adoption rate of Digital Voice Assistants is outpacing the adoption of smartphones

  :markdown-it

    ## Voice Assistants Adoption

    ![voice assistant adoption is outpacing smartphone adoption](/content/images/todoremakethisgraph.png)

section

  aside.notes
    :markdown-it
      - Was that more insteresting than the node edit page?

  p.
   Much cooler than the node edit page.

section

  aside.notes
    :markdown-it
      *By now you have decided to build a voice app*
      - you have a client that wants to have a chatbot that tells one new joke  every day.
      - This can be done multiple ways.
        - you can manage the jokes through the vendor console
          - log in every day at the same time, every morning, and copying in  the joke.
        - you can have the response pre-programmed with hardcoded responses that get cycled through.
      -  If only there was some sort of system that could manage this content.

  h2.
    So you have decided to build a voice app

  ul
    li.fragment want to have a voice app that tells one new joke every day
    li.fragment This can be done multiple (bad) ways.
    li.fragment you can manage the jokes through the vendor console
    li.fragment you can have the response pre-programmed with hardcoded responses that get cycled through.
