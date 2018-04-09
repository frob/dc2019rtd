
::: slide

>>> notes
  - Open Source Voice and NLP
  - NLP is hard
>>>

# Open Source Voice and NLP

Natural Language Processing is hard.

:::

::: slide

>>> notes
- You might remember or have used Dragon Naturally Speaking by Nuance.
- That isn't what I am talking about.
- Dragon was strictly a voice to text converter. It uses an old style of voice recognition that requires extensive training.
- On its best day that approuch to voice to text is only around 60% accurate.
- The new approach from Google and the like is based on Nureal Networks and Machine Learning and in the stric sense of converting the spoken word to written text, it is in the high 90% of accuracy.
- But that isn't even Natural Language Processing.
- That is just voice to text.
- NLP is when the computer doesn't just figure out what you are saying, but also what you mean. Or in the case of a Voice Assistant, what you want.
- Nuance has been doing voice to text forever, they are getting into NLP.
>>>

## Nuance has been doing voice to text forever, they are getting into NLP

@TODO, Dragon Natrually Speaking Logo

:::

::: slide

>>> notes
I love open source.
So why don't we use open source to do NLP?
There are many people trying to do that. wit.ai for example is an open source alternative. But we can roll our own.
>>>

## NLP in open source

@TODO, get wit.ai info for here.

:::

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
  - wit.ai

:::
