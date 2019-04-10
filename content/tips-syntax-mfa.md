
::: slide

>>> notes

- Mod.fun/arity
  - module
    - no classes only module namespaces





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

::: slide

>>> notes

- Here is your hello world example module.

>>>

```elixir
defmodule Example do
  def main do
    IO.puts "Hello World!"
  end
end
```

:::


::: slide

>>> notes

- functions are in the defined in the namespace with def
- arity is the number of arguments a function has
  - You will see error messages that say things like
    - No function defined foo/2
    - Meaning that somewhere foo(a, b) is getting called and it hasn't been defined

- this is really important, as we will soon see with recursion.

>>>

# Mod.fun/arity

```elixir
No function defined foo/2
```

This means there is no function defined with the name **foo** that takes two arguments.

:::

::: slide

>>> notes

- We can have two function definitions with two differnt numbers of argument
- Becuase the Arity is differnt the function's signature is differant and elixir knows what to execute based on the signature.

>>>

# Same name different arguments

```elixir
defmodule Greeter do
  def hello(name, place) do
    "Hello #{name}, from #{place}"
  end

  def hello(name) do
    "Hello #{name}"
  end
end
```

:::

::: slide

>>> notes

- functions
  - https://blog.carbonfive.com/2017/10/19/pattern-matching-in-elixir-five-things-to-remember/

- Multi-Clause Functions
  - The function that is executed is the one where the arguments that are passed in match the pattern of the arguments in that function’s signature.

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

>>>

# Multi-Clause Functions

```elixir
defmodule Greeter do
  def hello(:jane), do: "Hello Jane"

  def hello(name) do
    "Hello #{name}"
  end
end
```

:::

::: slide

>>> notes


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

>>>

# APIs like this become possible

:::

::: slide

>>> notes


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

>>>

# APIs like this become possible

## Drupal Form Alter

```php
function example_login_form_form_alter($form, $form_state) {
  ...
}
```

## A fake equivalent in Elixir

```elixir
def alter(:login_form, form, _form_state) :do nil
```

:::
