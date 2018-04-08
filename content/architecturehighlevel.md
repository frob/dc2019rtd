
::: slide

>>> notes
  - I talk to Alexa
  - Alexa calls Drupal
  - Drupal gives the response to Alexa
  - Alexa talks back to me

  This is how all this stuff works. We can add more complexity by having Alexa call lambda which can do more caching or turn everything after Alexa into a giant microservice based behemoth, but we don't have to. This is all that is required to get Drupal to back an alexa app.
>>>

# High level architecture

  - I talk to Alexa
  - Alexa calls Drupal
  - Drupal gives the response to Alexa
  - Alexa talks back to me

:::

::: slide

>>> notes
In this barebones sencario, Drupal would need to have some sort of integration module. And as usual. Theres a module for that.
>>>

## Theres a module for that

### [Chatbot API](https://www.drupal.org/project/chatbot_api)

![Chatbot API supports alexa and diagflow](/content/images/chatbotapi.png)

:::
