
::: slide

>>> notes

- Talk briefly about the different native data types in elixir and how they are used.

>>>

# Types

:::

::: slide

>>> notes

- is_int
  - no maximum size
- is_float

>>>

## Numbers

```elixir
is_int(1) => true
```

```elixir
is_float(1.0) => true
```

:::

::: slide

>>> notes

- is_atom
  - ``` Atom \#{is_atom(:Drupal)}```
  - ``` Atom \#{is_atom(:"Drupal dot Org")}```
- I don't expect the value of atoms to be apperent at first glance
- once I talk about pattern matching you will start to see how they are used
- We use atoms in php with the same syntax for placeholders
>>>

## Atoms

```elixir
is_atom(:an_atom)
```

```elixir
{is_atom(:Drupal)} => true
{is_atom(:"Drupal dot Org")} => true
```

:::

::: slide

>>> notes

- ranges
  ``` one_to_ten 1..10```

>>>

## Ranges

```elixir
one_to_ten = 1..10
```

:::

::: slide

>>> notes

- 06:38 Strings
  - double quotes ``` string = "Hello World!"```
  - String Length ``` String.length("Hello World!") ``` => 12
  - String concatination ``` "Hello" <> " " <> "World!"" ```
  - String search ``` String.contains?("foobar", "foo") ``` => true

    - notice in this contains function there is a question mark
    - This is common when the expectation is a boolean return
    - kind of like using "is" like is_present

  - String first char ``` String.first("foobar") ``` => "f"
  - String char at index ``` String.at("foobar", 3) ``` => "b"
  - String substring ``` String.slice("foobar", 3, 5) ``` => "bar"
  - String explode ``` String.split("foobar", "b") ``` => ["foo", "oo"]
  - String revers ``` String.revers("foobar", "b") ``` => ["foo", "oo"]
  - String upcase ``` String.upcase("foobar", "b") ``` => ["foo", "oo"]
  - String downcase ``` String.downcase("foobar", "b") ``` => ["foo", "oo"]
  - String capitalization ``` String.capitalize("foobar", "b") ``` => ["foo", "oo"]

>>>

## Strings

```elixir
string = "Hello World!"
```

```elixir
String.length("Hello World!") => 12
```

```elixir
"Hello" <> " " <> "World!"" => "Hello World!"
```

```elixir
String.contains?("foobar", "foo") => true
```

:::
