
::: slide

>>> notes

- I didn't know where else to put this.
- List comprehension is like a map, but backwards.

>>>

# List Comprehension

:::

::: slide

>>> notes
>>>

## List Comprehension

```elixir
double_list = for el <- [1,2,3,4], do : el * 2
```

```elixir
even_list = for el <- [1,2,3,4], do : rem(el, 2) == 0
```

:::
