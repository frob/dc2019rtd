---
class: narrow-image
---

::: slide

>>> notes

- These are some of the nicities of the elixir developer ecosystem

>>>

# Introduction to the Elixir Ecosystem

:::

::: slide

>>> notes

- I will start with a link to the Elixir Forum

>>>

# Elixir forum

https://elixirforum.com/

:::

::: slide

>>> notes

- iex

>>>

# IEX

:::

::: slide

>>> notes

- mix
  - https://elixir-lang.org/getting-started/mix-otp/introduction-to-mix.html
  - This is the built in build tool for elixir, liken to npm or composer
  - But with other generators built in
    - Think Drupal console and composer mixed together and fully supported as native parts of the language


>>>

# Mix

```bash
mix --help
Mix is a build tool for Elixir

Usage: mix [task]

Examples:

    mix             - Invokes the default task (mix run) in a project
    mix new PATH    - Creates a new Elixir project at the given path
    mix help        - Lists all available tasks
    mix help TASK   - Prints documentation for a given task

The --help and --version flags can be given instead of a task for usage and versioning information.
```

:::

::: slide

>>> notes

- rebar
  - Kind of like mix, but for Erlang.
  - Technically Rebar3

>>>

# Rebar

![](/content/images/rebar.png)

:::

::: slide

>>> notes

- unit tests
  - ExUnit - built in unit test framework
  - Notice how simple this command is. Its because it is just another mix task

>>>

# Unit Tests

```bash
mix test
```

:::

::: slide

>>> notes

- Hex Packages
  - documentation
    - https://hexdocs.pm/
    - Hexdocs is a place for hex packages to host their documentation

>>>

# Hex Packages

![](/content/images/hex.png)

:::
