
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
