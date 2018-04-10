---
  parser: pug
---
section

  aside.notes
    :markdown-it
      - @TODO put notes here.

  :markdown-it
    # NLP is hard

    @TODO maybe a good place for the StarTrek Hello Computer gif.

section
  aside.notes
    :markdown-it
      - Lets say the voice to text problem is solved. You can do that.
      - All of them start with some sort of natual language tool kit
        - NLTK in python
        - NLPTools in php
        - lots of processing of the text must be done in order to make the data suitable for a computer. @TODO write blog post on this.
          - To learn more you can read
            - Not going into it in this session. Just know it is very hard.
            - https://en.wikipedia.org/wiki/Natural-language_processing
            - My blog post
      - Then feed the data from those into a machine learning framework, such as TensorFlow or SageMaker
      - or just use a prebuilt closed source NLP solution such as AWS Comprehend

  h2 NLP in 4 easy steps
  div.fragment
    input(type="checkbox" checked)
    label Voice to Text

  ol
    li.fragment Open Source Language Parsing libraries
      :markdown-it
        - **NLTK** for Python
        - **NLPTools** for PHP
    li.fragment Do lots of data science processing to format the spoken language into something the computer can understand.
      ul
        li.fragment @TODO, List out a few steps from the wikipedia article.
    li.fragment Do Machine Learning
      ul
        li TensorFlow
        li @TODO, list out another open source ML library
        li Roll your own Machine Learning library
          p.fragment @TODO Link to the guy who did it with Excell
    li.fragment Do the thing your clients want done
      p Achievement unlocked, Open Source NLP

section
  aside.notes
    p To review
    ul
      li Do voice to text somehow
      li Process the text with AI and Machine learning
      li profit
      li but in my opinion that isn't the hardest part.

  p @TODO, picture of underpants trolls from southpark

section
  aside.notes
    :markdown-it
      - There is still a very large hurdle to overcome.
      - Adoption
      - You might be able to convice the user on your website or app to allow you access to the microphone, most users will just click okay to anything you pop up to make the popup go away.
      - The rest of the problems are just technical, this is more of a sociaty issue.

  h2 The biggest hurdle to open source NLP
  div.fragment
    h3 adoption
    p @TODO, Put a picture of a puppy in a kennel here.
