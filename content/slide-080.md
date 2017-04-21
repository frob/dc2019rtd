---
  notes:
    - Modules Used
    - I gave a talk on modern Drupal 7 development at a meetup in Portland last year, and I am not going to go into great detail here. I wrote a blog post about it and if you would like more details I suggest you look there.
    - I will go over the modules that this site used (in its core functionality), what they do.
    - Later I will go over how they relate to Drupal 8.
    - Remember when building a site that the output that drupal give us is always a suggestion. The important part of site building is giving the content team everything they need, you can leave it up to the developers and themers to make sure that the content gets displayed properly.

    - Paragraphs -- If you are familiar with field collection then this module functions very similarly, with the main exception of the user being able to pick the bundle or paragraph type when creating content.
    - Entity Form -- In Drupal 8 this module was renamed to eform. The cool part of this module is that it allows us to use the field api to create webforms. Unlike the webform module, the form submissions are entities. This gives us flexibility use in views or displaying them with multiple view modes.
    - EVA -- Entity View Attachment. Allows us to embed views into fields. Handy for things like Taxonomy term views or anywhere an ID can be used as an argument in a view.
    @FLAGS
    - The last two modules don't have much to do with this site per-se but they are fantastic modules that will really help a site-builder.
    - Coffee -- Speed up your Drupal navigation by typing where you want to go. Much like unity for Ubuntu or Spotlight for Mac or Start for Windows, this module allows us to zip around our site's admin interface with ease.
    - Speedboxes -- Allows us to check multiple checkboxes at the same time. Super useful for setting up permissions. (@TODO create licecap demo gif)
---

## Drupal 7 Modules Used

*[Frank's list of modern site building tools](https://www.frobiovox.com/posts/2015/09/22/modern-drupal7-site-building-tools.html)*

### [Paragraphs](https://www.drupal.org/project/paragraphs)

Paragraphs allows us to create collections of fields. Each collection type is its own bundle and can have its own fields.

### [Entity Form](https://www.drupal.org/project/eform)

Named eForm in Drupal 8. Allows the use of the field api to create webform and have the submissions be entities.

### [Eva](https://www.drupal.org/project/eva)

Solves the problem of putting views into entities as pseudo-fields.

### [Flag](https://www.drupal.org/project/flag)

This module allow users to flag things. Largest use is probably the "Flag this as inappropriate" functionality.

### [Coffee](https://www.drupal.org/project/coffee)

Coffee works like Unity for Ubuntu or Spotlight search for Mac, or the Start Menu in Windows. Just start typing and a list of options will be presented. Pick the option and it will take you there.

### [Speedboxes](https://www.drupal.org/project/speedboxes)

Check more than one box with a click and drag mechanic.
