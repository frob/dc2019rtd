---
  parser: pug
---
section

  aside.notes
    :markdown-it
      - NLP is hard

  h1 NLP is hard

  img(src="/content/images/hellocomputer.png")

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
            - Lemmatization
            - Morphological segmentation
            - Sentence breaking
            - Stemming
      - Then feed the data from those into a machine learning framework, such as TensorFlow or SageMaker
      - or just use a prebuilt closed source NLP solution such as AWS Comprehend

  h2 NLP in 4 easy steps
  h3.fragment.fade-out ☑️ Voice to Text

  h3.fragment Open Source Language Parsing libraries
  div.fragment
    :markdown-it
      - **NLTK** for Python
      - **NLPTools** for PHP
  h3.fragment Do lots of data science processing to format the spoken language into something the computer can understand.
      ul
        li.fragment.fade-in Lemmatization
        li.fragment.fade-in Morphological segmentation
        li.fragment.fade-in Sentence breaking
        li.fragment.fade-in Stemming
  h3.fragment Do Machine Learning
    p TensorFlow

section
  h2 Roll your own Machine Learning library
  p.fragment Can't be to hard, this guy did it in Excell
    iframe(width="560" height="315" src="https://www.youtube-nocookie.com/embed/kCL065_0zTY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen)

section
  aside.notes
    p Lastly we get to do the thing that our clients wanted us to do.
    p To review
    ul
      li Do voice to text somehow
      li Process the text with AI and Machine learning
      li profit
      li but in my opinion that isn't the hardest part.

  p Do the thing your clients want done.

section
  aside.notes
    :markdown-it
      - There is still a very large hurdle to overcome.
      - Adoption
      - You might be able to convice the user on your website or app to allow you access to the microphone, most users will just click okay to anything you pop up to make the popup go away.
      - The rest of the problems are just technical, this is more of a sociaty issue.

  h2 The biggest hurdle to open source NLP
  div.fragment
    p Adoption
    div(style="background-image: url(/content/images/puppy.jpg);background-size:100%;width: 75%;height: 0;padding-bottom: 45%;margin-left:auto;margin-right:auto;")
      img(src="/content/images/cage.png")
    <!-- attribution puppy https://pixabay.com/en/dog-adoption-home-adopted-dog-2911444/ -->
    <!-- attribution bars https://pixabay.com/en/cage-bars-cell-jail-prison-1161869/ -->
