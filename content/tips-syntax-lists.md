
::: slide

>>> notes
- a list is not an array
  - arrays do not exist in erlang or elixir
  - an array's speed comes from the way the memory is handled and that isn't a thing in the VM
- List.insert_at
- List.delete_at
- List.first
- List.last

>>>

# Lists

- List.insert_at
- List.delete_at
- List.first
- List.last

:::

::: slide

>>> notes

- list concatination ```[1,2,3] ++ [4,5,6]```
- list subtraction ```list3 = list1 -- list2```

>>>

# List Concatniation and Subtraction

```elixir
[1,2,3] ++ [4,5,6]
list3 = list1 -- list2
```

:::

::: slide

>>> notes
- search
  - if 4 in list3 do end
- A list can also be a key value pair with tuples.
  - ``` list = [{name:} "Robin", {quest:} "To find the holy grail"] ```
  - remove the curly braces
>>>

# List with key value pair

```elixir
list = [name: "Robin", quest: "To find the holy grail"]
```

:::

::: slide

>>> notes
- ```[1,2,3]```
- first and everything lese
  - ```[head | tail] = list1``` => 1, [2, 3]
- this is super important when we do recursion
>>>

# List operations

```elixir
[1,2,3]
[head | tail] = list1 => 1, [2, 3]
```

:::

::: slide

>>> notes
- How to go through the lists
- Enumerate through list
  - ``` Enum.each ["words", "in", "list"], fn word ->
          IO.puts word
        end
    ```
>>>

# Enumeration

```elixir
Enum.each ["words", "in", "list"], fn word ->
  IO.puts word
end
```
:::
