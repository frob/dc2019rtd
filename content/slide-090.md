---
  notes:
    - Custom Development
    - The meat of how we are putting this together is in the hook_entity_view_alter implementation and the hook_form_alter implementation.
    - Remember we used the bundle type machine names to add the correct entity form types? We do that with call_user_func which calls a function based on the name we give it. We check beforehand if the function exists, this way it is extensible without having to modify too much existing code. So if we want to add another interactive element we can do so without modifying anything to do with our current interactive elements.
    - In the case of the text response this checks for a valid callback and runs this code to include the entity form.
    - Then in the form_alter we change the actual form options or the text area label to use the correct text.
    - Things get complicated at this point, because ajax.
      - We have to ajaxify each of the paragraph items. I'm not going to go into code here because that would just be boring, and it is better documented elsewhere.
      - An interesting thing about saving a response is, only after it is saved can we make the paragraphs item sharable. Then after it is shared only then can we make show the shared responses. All of these things required heavy development for Drupal 7, and will likely also require lots of custom work for Drupal 8 too.
---

### Custom Development

```php
    if (!empty($build['#bundle'])) {
      $bundle = $build['#bundle'];
      if (function_exists("_component_{$bundle}_alter")) {
        // We need to pass build in an array in order to trick call user func
        // into passing the build by reference.
        call_user_func("_component_{$bundle}_alter", array(&$build));
      }
    }
  }
```

```php
/**
 * Implements custom _component_TYPE_alter().
 */
function _npo_component_text_response_alter(&$build) {
  if (isset($build[0]['#entity']) && !empty($build[0]['#entity']->item_id)) {
    module_load_include('inc', 'entityform', 'entityform.admin');
    $entity_form_name = 'text_submissions';
    $component_id = $build[0]['#entity']->item_id;
    $entity = $build[0]['#entity'];
    $form = _npo_get_entityform(entityform_empty_load($entity_form_name), array('component_id' => $component_id, 'entity' => $entity));
    $form['field_component_submission']['#attributes']['class'][] = 'element-invisible';
    $form['field_component_submission']['#attributes']['data-entityform-id'] = $build[0]['#entity']->item_id;
    $form['field_text_response_submission']['#attributes']['class'][] = 'component-text-response-textarea';
    $form['field_text_response_submission']['#attributes']['class'][] = 'component-input';
    $form['field_text_response_submission']['#attributes']['class'][] = 'component-input-no-label';
    $form_rendered = drupal_render($form);
    // $build must be an array so that it can be passed by reference.
    $build[0][] = array(
      '#type' => 'markup',
      '#markup' => $form_rendered,
      '#prefix' => '<div class="component-text-response">',
      "#suffix" => '</div>',
      "#weight" => 100,
    );
  }
}
```
