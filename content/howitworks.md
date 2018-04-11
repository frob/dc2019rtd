---
  parser: pug
---

section

  aside.notes
    :markdown-it
      - Intents, Utterances, and Slots
        - Intents
          - It all starts with Intents.
          - The goal, function, or command you want to happen
        - Utterances
          - The words you expect a user to say to make the intent happen
          - Really it is the training data for the AI part of all of this
        - Slots or Entities
          - Data that the intent needs to be fulfilled
          - If the Intent is a function then the slot is the paramater
          - Entities are somewhat selfcontained
            - Slots can be custom or one of Amazon's prebuilt data types
            - Slots also control how Alexa asks for the data
              - If Alexa needs a piece of data then it will ask the user for  it, how the user is asked is controlled by the slot
              - They also hold the validation logic and the formatting logic
              - Your code or API expects a date to be formatted a certain way, the Slot or Entity is what makes sure the words that come out of a persons mouth become a properly formatted date, or location, or color, or food, or whatever. 

  h1 Intents, Utterances, and Slots

  h2.fragment Intents
  p.fragment The goal, function, or command you want to happen
  h2.fragment Utterances
  p.fragment The words you expect a user to say to make the intent happen
  h2.fragment Entities
  div.fragment
    p Data that the intent needs
    p Intent Parameters

section
  aside.notes
    :markdown-it
      - Fulfillment
        - This is what happens when the Alexa thinks it know the intent  of the user and all the data slots are filled
        - This can be any https REST endpoint
        - This can also be a straigt up lambda function
        - Segway
          - https://en.wikipedia.org/wiki/Segway_PT#/media/File:Black_x2_and_white_i2.jpg
          - Maybe a gif of wierd al from the white and nerdy video

  h2 Fulfillment

  :markdown-it
    - This is what happens when the app thinks it know the intent  of the user and all the data slots are filled
    - This can be any https REST endpoint
    - This can also be a straigt up lambda function
