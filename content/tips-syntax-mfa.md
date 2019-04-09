
::: slide

>>> notes

- Mod.fun/arity
  - module
    - no classes only module namespaces
  - functions are in the defined in the namespace with def
  - arity is the number of arguments a function has
    - You will see error messages that say things like
      - No function defined foo/2
      - Meaning that somewhere foo(a, b) is getting called and it hasn't been defined
  - function
    - https://blog.carbonfive.com/2017/10/19/pattern-matching-in-elixir-five-things-to-remember/
      - Multi-Clause Functions
        - https://gist.github.com/aneyzberg/5cec0f73c6454e5ad0255b0538d650ed/raw/574d4731ec0a59b4827e3a4c65ab93d61a77c0ad/pattern-matching-9.md
    - How many people here are familiar with Drupal 7 and hook based development?
      - remember how we would do this?
        - ``` function example_login_form_form_alter($form, $form_state) ```
      - Pattern matching makes this a part of the language in an interesting way.
        - https://youtu.be/gom6nEvtl3U?t=1159
        - you don't need to use switch or if as much for branching
      - So (hook alter example) becomes
        - ``` def hook_alter(form_id = 'login_form', form, _form_state) ```
    - underscores in front of arguments are ignored by compiler
    - default values with double backslash \\
      - ``` def somefunc(foo \\ "bar") do
              IO.puts foo
            end```
  - 41:01 Anonymous Functions
    - normal syntax, should be familiar
      - ```add_things = fn (a, b) -> a + b end```
    - short syntax
      - ```add_things = &(&1 + &2)```
    - one function many definitions
      - ``` add_things = fn
              {a, b} -> a + b
              {a, b, c} -> a + b + c
            end```
      - ```add_things.({1, 2})

>>>

# Mod.fun/arity

:::
