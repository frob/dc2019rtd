---
  notes:
  - LMS Architecture
  - Need to deal with some prerequisite information so we all understand the goals of the project that I used as my test bed.
  - What is an LMS? An LMS is a Learning Management System.
  - It is software that allows for the organization and delivery of courses or training programs. If you have used buildamodule.com or drupalize.me then you have used a LMS.
  - Traditional LMS/Course schem
    - Curriculum or Lesson plan
      - Collection of Units or Modules
        - Collection of Lesson/Project/Assesment/Mini-lessons
  - Our custom LMS is structured as
    - Module -> Menu
      - Segments -> Nodes
        - Components -> Paragraphs Items
    - Lesson plan equivalents are built with select fields on the segment nodes.
---

## Custom LMS Architecture

<dl>
  <dt>Learning Management System</dt>
  <dd>An LMS is software that allows for the organization and delivery of courses or training programs.</dd>
</dl>

### Traditional LMS/Course schema

 - Curriculum or Lesson plan
   - Unit or Module
     - Lesson/Project/Assessment/Mini-lessons

### Our custom LMS is structured

 - Module -> Menu
   - Segments -> Nodes or Content Type
     - Components -> Paragraphs Items
