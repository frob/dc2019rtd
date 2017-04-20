---
  notes:
    - First big problem with my re-architecture exercise.
      - EntityForm is not supported on Drupal 8
      - There is a discussion about whither or not this module is necessary. I of corse believe the module is necessary. However, this doesn't make the module stable today. The module works well enough for this experiment, but if this where a full client project we would have to explore some options.
        - Find an alternative
          - Comment module
          - Contact module extras
          - Relation module
            - Didn't bring this module up in the modules used because we didn't use it, but this is a really cool module. This module has the ability to supplant the functionality of flag and organic groups. It adds the concept of entity endpoints which allow us to make fieldable relations between entities. In the example of this LMS that entity would have all the fields for the response, an endpoint for the paragraphs item (renamed paragraph revision for Drupal 8), and an endpoint for the user.
            - I have used this module for saving user state in js apps and for keeping track of users completion status for resources in custom Professional Development portals.
        - Fund the development of a stable release
          - While I do encourage finding alternatives, at this state in Drupal 8 development I would encourage us to choose the final option because frankly aside from the comment module none of the above options are any more stable than eform and more importantly Drupal 8 needs more stability in contrib .
    - Second big problem
      - Paragraphs doesn't want me to reference paragraphs
      - It is possible, but requires use of the EXPERIMENTAL field widget. The main reason this is EXPERIMENTAL is that the paragraphs modules is not mean to be used to reuse content, that is more of a function of blocks. I spent more time on this than I would have liked, due to some of Drupal 8's UI changes that I didn't fully understand. But it turned out to be a non-problem.
---

### Module Availability
