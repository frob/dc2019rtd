---
  notes:
    - Custom development
    - This is where the largest changes where made, but maybe not where it was expected.
    - In Drupal 7 we accomplished the HULK SMASH part, where we smash the form from the entity form into the display of the paragraphs item, with a hook_entity_view_alter implementation coupled with a hook_form_alter implementation. In Drupal 8 with its Object Oriented Architecture I was able to accomplish it in the exact same way.
    - "But Wait" you say, "Drupal 8 is OOP we aren't supposed to put stuff into the .module file anymore. That is just there for decoration!"
    - Oh no, the joy of modifying aspects of the program with hooks is not gone in D8. Hooks are good things, and even though Drupal is want to change things with new version and add modern development practices to Drupal, Drupal also isn't going to ditch what is likely the most flexible pattern of php development just because it stepped in some OOP.
    - The Object Oriented Architecture is designed to make common things easier.
    - For example.
    - When building this with Drupal 7, we had to reimplement parts of the form builder from the entity forms module in order to display entity forms programatically. This was likely due to the incomplete nature of the entity api in Drupal 7.
    - In Drupal 8 the entity api is far more flushed out. We still use Entity Field Queries to get the EntityForm Submission for the current user and the current paragraph revision, but this time Drupal has an api for creating the empty EntityForm submission object if the user has never submitted. And it has an interface for building forms for Entities, new or old. Thus we can get a form for a new entity in the same way we get the form for the old entity, with all the right fields filled in.
    - To build a new entity, this would be a node, eform_submission, or comment, We user the Drupal::entityTypeManager class and call the create method or to load an existing one we use the same class with the load method and the entity id.
    - Then we user the entity form builder service to build the form for the entity. I tested this with nodes as well. It is the same generic interface for all content entities.
    - Mind Blown
---

## Custom Development

### Not Much

 - We still use hook_entity_view_alter
 - We still use hook_form_alter

![Incoming Transmission](http://i.imgur.com/vj1IG.gif)

### Okay, really lots

But all good!

*Drupal 8 version*:

```php

// This creates a new eform submission.
$eform_submission = \Drupal::entityTypeManager()->getStorage('eform_submission')->create(['type' => 'multiple_choice_question']);
// This loads an existing eform submission.
$submitted_eform = \Drupal::entityTypeManager()->getStorage('eform_submission')->load(2);
// Either way we build the form with a call to the entity.form_builder service.
$form = \Drupal::service('entity.form_builder')->getForm($submitted_eform);
// Then we append it to the render array.
$build[] = $form;
```

 - No more Drupal 7 non-existent entity api
 - Drupal 8 has intelligent use of OOP that makes site building easier
 - Over 100 lines of code in reduced to under 10

![Incoming Rainbow](http://i.imgur.com/KP6cR.gif)
