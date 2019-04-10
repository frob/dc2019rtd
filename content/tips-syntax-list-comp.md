
::: slide

>>> notes

- I didn't know where else to put this.
- List comprehension is like a map, but the sytax is backwards.
- https://stackoverflow.com/a/47478020/1054656

>>>

# List Comprehension

:::

::: slide

>>> notes
>>>

## Example

```elixir
double_list = for el <- [1,2,3,4], do : el * 2
```

```elixir
even_list = for el <- [1,2,3,4], do : rem(el, 2) == 0
```

:::
