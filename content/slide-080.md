---
  notes:
    - Content Strategy
    - Now thats out of the way we can talk about the site's content strategy.
    - In the end our site had 13 paragraphs item bundles for 1 content type
    - Three where interactive
      - Text response
      - Checkbox list
      - Drag and Drop

    - Four where used for custom inter and intra module navigation
    - The rest where videos, image, and text.
    - all can be combined to form larger whole components.
    - Linking the EntityForm Submission to the Paragraph item, each interactive paragraphs item had a corresponding entity form with an entity reference back to the paragraphs item that displayed the form. We used the paragraphs item's bundle machine name to pick the bundle of the EntityForm to display.
      - We put this all together, using Drupal's ingenious render array system that doesn't care if it is displaying a form, or content, or anything themable, we where able to HULK smash the entityforms into the paragraphs item displays and save any users response and know what they where responding to and who was responding to it.

    - We also had to allow for self evaluation. Our client wanted users to be able to share their responses and learn from the responses of others. So we used flags that let the users share their responses, in turn if they share their response then they see their peer's responses and then they can edit their old response and save a new one.
    - Our initial expectation was that we would have to build out all the content in a spreadsheet and at one point I was building a migration to import all the content from a CSV. Choosing the Paragraphs module gave our content editors an interface that allowed them to build the content in the site as we where adding functionality.
---

::: slide

### LMS Content Strategy

Arguably, the most important part of a site.

>>> notes
 - Content Strategy
 - Now thats out of the way we can talk about the site's content strategy.
>>>

:::

::: slide

#### 13 paragraphs types and 1 content type

Three where interactive
 - Text response
 - Checkbox list
 - Drag and Drop

>>> notes
 - In the end our site had 13 paragraphs item bundles for 1 content type
 - Three where interactive
   - Text response
   - Checkbox list
   - Drag and Drop
>>>

:::

::: slide

Text response

![](/content/images/p2s2-screens/dinn-7-drag-2.gif)

>>> notes
>>>

:::

::: slide

Checkbox list

![](/content/images/p2s2-screens/org-5-mult-check.gif)

>>> notes
>>>

:::

::: slide

Drag and Drop

![](/content/images/p2s2-screens/dinn-7-drag.gif)

>>> notes
>>>

:::

::: slide

#### The rest are multimedia/content.

Everything can be *combined* to form larger whole components.

![](/content/images/p2s2-screens/dinn-7-drag-2.gif)

>>> notes
 - Four where used for custom inter and intra module navigation
 - The rest where videos, image, and text.
 - all can be combined to form larger whole components.

>>>

:::

::: slide

#### Linking the EntityForm Submission to the Paragraph item

| Entity          |  Machine Name |
|:----------------|--------------:|
| Paragraph Type  | text_response |
| EntityForm Type | text_response |

>>> notes
 - Linking the EntityForm Submission to the Paragraph item, each interactive paragraphs item had a corresponding entity form with an entity reference back to the paragraphs item that displayed the form. We used the paragraphs item's bundle machine name to pick the bundle of the EntityForm to display.
   - We put this all together, using Drupal's ingenious render array system that doesn't care if it is displaying a form, or content, or anything themable, we where able to HULK smash the entityforms into the paragraphs item displays and save any users response and know what they where responding to and who was responding to it.

>>>

:::

::: slide

#### Evaluation

Sharing via Flags on the paragraphs items

![](/content/images/p2s2-screens/textandshare.png)

>>> notes
 - We also had to allow for self evaluation. Our client wanted users to be able to share their responses and learn from the responses of others. So we used flags that let the users share their responses, in turn if they share their response then they see their peer's responses and then they can edit their old response and save a new one.
 - Our initial expectation was that we would have to build out all the content in a spreadsheet and at one point I was building a migration to import all the content from a CSV. Choosing the Paragraphs module gave our content editors an interface that allowed them to build the content in the site as we where adding functionality.

>>>

:::
