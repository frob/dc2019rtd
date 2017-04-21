---
  notes:
    - Considerations Building with Drupal 8
      - Architectural differences
      - UI Changes
      - Module availability
      - Specifically What needs to change
        - Architecture
          - Custom Development
            - Content strategy

    - General Drupal 8 Considerations
      - devel kint debugging DO NOT USE KUMO it doesn't work on real objects
      - no longer cache clear now cache rebuilding
      - No more module disable, uninstall or die
      - Enable developer mode https://www.drupal.org/node/2598914
      - Nice thing is that there is lots of information available already for Drupal8 the problem is that there is lots of bad information available for Drupal 8. Check your sources and do not expect everything you read to actually work. Even d.o documentation can be out of date. poll module example.
    -
---

## Considerations Building a LMS with Drupal 8

  - Architectural differences
  - UI Changes
  - Module availability
  - Specifically What needs to change
    - Architecture
      - Custom Development
        - Content strategy

### General Drupal 8 Considerations

  - Setup the devel module
  - It is now cache rebuilding
  - Modules cannot be disabled
  - Enable Developer Mode
  - Beware of online sources
