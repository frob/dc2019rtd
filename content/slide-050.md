---
  notes:
    - Entities are things in Drupal, starting in drupal 7 we got content entities.
    - In Drupal 6 custom things where typically nodes or totally custom
    - In Drupal 7 the entity-field system brought the CCK into core without making everything a node
    - Drupal 8 has a fully fledged entity api which is derived from the capabilities of the contrib entity api module for drupal 7. Now that Drupal is using semver, over time more and more functionality can be added to subsequent versions of drupal 8 and the entity api can only get more robust.
    - Users, Taxonomy Terms, and Nodes, are all Entities
    - An Entity can have Bundles to allow for multiple collections of fields instances on a single type of entity.
    - Field instances are unique to that bundle.
    - An Entity has properties which span all bundles.
      - created date
      - node status
      - who created are all properties
    - A field instance is a place for complex data in a Entity Bundle
    - A property is simple storage for Entity level data
    - Properties are linked to an Entity, such as Node. Fields are linked to the Bundle, such as Content Type.
    - Properties are stored on the entity's table and fields are stored in their own table.
---

### Entities

Entities are things in Drupal; things do not have to be nodes.

 - A bundle is a collection of fields instances on an Entity
 - A field instance is a place for complex data in a Entity Bundle
 - A property is simple storage for Entity level data

Properties are linked to an Entity, such as Node. Fields are linked to the Bundle, such as Content Type.

Properties are stored on the entity's table and fields are stored in their own table.
