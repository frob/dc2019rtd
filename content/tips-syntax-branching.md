
::: slide

>>> notes

- 16:06 Decision Making

>>>

# Decision Making

:::

::: slide

>>> notes

- 13:30 Comparison
>>>

# Comparison

:::

::: slide

>>> notes

- 13:30 Comparison
  - Data is typed
    - int vs float
      - ``` 7 == 7.0``` => true
      - ``` 7 === 7.0``` => false
>>>

## Data is typed

``` elixir
7 == 7.0 => true
```

``` elixir
7 === 7.0 => false
```

:::

::: slide

>>> notes

  - and the rest
    - "> < <= >="
    - and or NOT && ||
  - if age >= 18 do \
      "can vote" \
    else
      "cannot vote"
    end
  - unless age === 18 do
      "You are 18"
    else
    end
>>>

## if/then and unless

```elixir
if age >= 18 do
  "can vote"
else
  "cannot vote"
end
```

```elixir
unless age !== 18 do
  "You are 18"
end
```

:::

::: slide

>>> notes

- switch like statements
  - case some_variable do
      1 -> "something"
      2 -> "something else"
      3 -> "something completely different"
    end

>>>

## Case

```elixir
case some_variable do
  1 -> "something"
  2 -> "something else"
  3 -> "something completely different"
end
```

:::

::: slide

>>> notes
  - Cond is useful for checking across many different statments
  - cond do
      age >= 18 -> "can vote"
      age >= 16 -> "can drive"
      age >= 14 -> "cannot drive"
      true -> "default"
    end

>>>

## Cond statement

```elixir
cond do
  age >= 18 -> "can vote"
  age >= 16 -> "can drive"
  age >= 14 -> "cannot drive"
  true -> "default"
end
```

:::

::: slide

>>> notes

- Ternatry
  - No actual ternary ? : operator
  - http://learningwithjb.com/posts/elixir's-version-of-the-ternary-operator
  - Just an if/else on one line

>>>

## Ternary

```elixir
message = if age > 18, do: "Can Vote", else: "Can't Vote"
```

:::
