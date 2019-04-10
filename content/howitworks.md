---
parser: pug
---

section

  aside.notes
    :markdown-it
      - Phoenix

  h1 How to get started

section

  aside.notes
    :markdown-it
      - Framework build on Elixir
      - app vs app_web | seperate the frontend code from the web frontent
        - it is an MVC but not like most MVCs
          - They have removed the model (dumping ground) and streamlined the consept
      - context | Dedicated modules that expose related functionallity

  h1 Phoenix
  ul
    li.fragment MVC Framework with no "Models"
    li.fragment Contextual Functionality separated into related apps
  div.fragment
    :markdown-it
      ```
      lib/
      ├── demo
      │   ├── accounts
      │       ├── accounts.ex
      │       └── user.ex
      └── demo_web
             └─── user_live
                 ├── edit.ex
                 ├── index.ex
                 ├── new.ex
                 ├── presence_index.ex
                 └── show.ex
      ```

section

  aside.notes
    :markdown-it
      - Phoenix feature walkthrough
        - Channels | websockets
          - The connection from client to server
        - HTTP/2 | push only, browsers don't support stateful connections
          - templates support pushing assets
        - generator | mix plugins
          - helps you understand what to do and where to put things
          - The generators are a type of self documentation
        - live reloading
        - built in test
          - this means that it is built with the idea that there will be tests and test drivin development
        - What is so special here? | https://youtu.be/bk3icU8iIto?t=680

  h1 Phoenix Features
  ul
    li.fragment Channels for websockets
    li.fragment HTTP/2
    li.fragment Useful Generators
    li.fragment Live Reloading
    li.fragment Front-end tool agnostic
    li.fragment Built in tests
