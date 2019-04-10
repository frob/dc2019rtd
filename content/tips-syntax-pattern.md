
::: slide

>>> notes

- 39:33 Pattern Matching
  - In Elixir the = isn't about assignment event though that seems to happen
  - Assignment is about assigning a memory location to a value and that isn't what is happening
  - the = is actually the match operator and it allows us to define matching rules
  - For example
    - ```foo = "bar"```
    - ```{a, b, c} = {:hello, "world", 42}```
    - ```a == :hello``` => true
    - ```{a, b, c} = {:hello, "world"}```
      - Causes a match error, The Tuples are of different lengths

>>>

# Pattern Matching

:::

::: slide

>>> notes

- Do you notice anythin interesting about this from my last example?
- head and tail are pattern maching in list 1
  - head is matched against the first element
  - tial no matches the rest of the elements

>>>

# Notice anything?

```elixir
[1,2,3]
[head | tail] = list1 => 1, [2, 3]
```

:::
