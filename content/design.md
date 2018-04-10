---
  parser: pug
---
section

  aside.notes
    :markdown-it
      - I would be remis if I told you to go yander and make voice apps and voice user interfaces without also telling you a bit about some of what makes a voice interaction good.
      - Luckily Google I/O 2017 was all about that. So here are the cliff notes.

  :markdown-it

    # VUI Design

    > It is imposible to have no design, you either have a good design or a bad design.

    *Adam Judge* said something like that.

section
  aside.notes
    :markdown-it
      - cartography & dialog trees
        - We cannot think about a VUI in the same way as we would a normal app.
        - For many things sematic markup, accessible markup, and SEO are the things that you still need to work on. Making sure the data on a site is consumable by a computer, or a screen reader goes a long way to make sure that it will work well with a Voice Assistant. After all, asking google something is pretty close to doing an "I feel lucky" search.
        - While that will work for sites, it isn't what will work for actual voice apps. That is if you are registering an app on Amazon or Google then you need to go a few steps farther and really design the voice of your app.
        - You will need to lead your users without showing them the way.

  h2 Cartography & Dialog Trees
  :markdown-it
    ![](https://vignette.wikia.nocookie.net/u5lazarus/images/d/dc/U4map.jpg)
    ![](http://static.neatorama.com/images/2007-07/dd-gaming-flowchart.jpg)

section
  aside.notes
    :markdown-it
      - vui basics
        - convertaional ui/conversational hacks
          - keeping the interface conversational
            - Give your app multiple ways to ask something and multiple ways to tell someone something
          - gleening information
          - https://www.youtube.com/watch?v=wuDP_eygsv
        - Dealing with errors in conversation

  h2 VUI basics

  ul
    li.fragment keep it conversational
    li.fragment never tell someone what to say
    li.fragment Allow for help, but handle errors gracefully

section
  aside.notes
    :markdown-it
      - voice design
        - There is no no design
        - Nothing has no attitude
        - Either define your apps voice or your users will define it for you
        - https://www.youtube.com/watch?v=0PmWruLLUoE
      - vui resources
        - https://www.youtube.com/playlist?list=PLJ21zHI2TNh9VkAu1EsOhpw92Wkm-XcuD

  h2 Voice Design

  ul
    li.fragment There is no <i>No Design</i>
    li.fragment Nothing has <i>No Attitude</i>
    li.fragment Nothing has <i>No Voice</i>
