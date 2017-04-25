---
  notes:
    - I am not going to give you an exhaustive list of new Drupal 8 features and in the end I will just give you a list of things to google.
    - Configuration Entities
      - I am not going into detail about them other than to say generally that the configuration management initiative changed so much with regard to developing and deploying Drupal. All for the better. If you are committed to stick with the db-sync workflow, it still works with Drupal 8 but really learn as much as you can about configuration entities and what you can do with them. Really this could be a talk or two on this, and I don't have the time in this talk to do them justice.
      - I will say that configuration entities gives drupal a place other than a random variable to store configuration and keeps developers from having to manage a bunch of tables if they needed something more complex than a simple variable could offer.
    - Blocks
      - Blocks now function much like nodes insofar as they are full fledged entities with bundles and fields.
      - Blocks still have an Achilles heel in that they are both content and configuration. The content lives in the database and isn't easy to export and sync and the placement of the block is configuration and is easy to sync. This can lead to embarrassing deployment gaffs. Where the placement of a block that doesn't exist is possible. Here is a good article about avoiding that. http://valuebound.com/resources/blog/how-to-sync-blocks-between-different-environments-a-drupal-8-website
    - Display Modes
      - Content View Modes
        - If you used the entity view modes modules or display suite to provide view modes for content types and such, then you should already be familiar with this. If you don't know what view modes are, they are ways for providing different ways to display the same content. So for a node we could have a teaser or a full view mode or a grid view mode. Basically anything that the design called for. These existed for content in Drupal 7 but they required a contrib module such as entity view modes or the display suite module to configure them without code. Drupal 8 gave a full fledged UI to work with.
      - Form View Modes
        - All that stuff I said about being able to display content in different configurable ways now also applies to forms with Drupal 8. So, as an example, let say you have a very complicated user registration form because your client wants to collect a bunch of information about the user, but none of it is required. Now you can create a new simplified form for adding users. You can do this in the UI in Drupal 8.
    - New field types (entity reference, link, telephone)
    - Things to google (many have been backported to Drupal 7)
      - Composer support
      - Toolbar update (Navbar in Drupal 7)
      - Responsive Image Styles (Picture Module in Drupal 7)
      - File Entities
      - RESTful api
      - Experimental Core Modules
        - Content Moderation
        - Workflows
        - Field Layout
        - Migrate Drupal UI
        - Place Blocks <- outside in
    - Switching to semver should allow for smaller backward compatible changes.
    - Testing infrastructure should ensure backward compatible changes are backward compatible. The DA infrastructure team has made this a reality..
---

::: slide

### Architectural Differences

 - Configuration Entities
 - Quick Edit
 - Blocks
 - View Modes
 - New field types (entity reference, link, telephone)

:::

::: slide

### Things to google (many have been backported to Drupal 7)
   - Composer support
   - Toolbar update (Navbar in Drupal 7)
   - Responsive Image Styles (Picture Module in Drupal 7)
   - File Entities
   - RESTful api
   - Experimental Core Modules
    - Content Moderation
    - etc...

:::
