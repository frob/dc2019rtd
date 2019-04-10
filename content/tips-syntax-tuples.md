
::: slide

>>> notes

- 2 or more values
- not for enumerating, cannot use as a list
- ``` is_tuple({1, 3.14, :Drupal}) ``` => true
- append ```new_tuple = Tuple.append(old_tuple, 66) ```
- get element ```el = elem(some_tuple, 2) ```
- delete element ```new_tuple = Tuple.delete_at(old_tuple, 2) ```
- insert element ```new_tuple = Tuple.insert_at(old_tuple, 2, "foobar") ```
- get size ```new_tuple = tuple_size(old_tuple) ``` => 3
- bunch of elements ``` eleven_nines = Tuple.duplicate(9, 11)```

- ``` {name, quest, color} = {"Robin", "To find the holy grail", "red, no blue"}```
- ``` IO.puts("favorite \#{color}")``` => "red, no blue"

>>>

# Tuples & Maps

:::

::: slide

>>> notes

- 2 or more values
- not for enumerating, cannot use as a list
- ``` is_tuple({1, 3.14, :Drupal}) ``` => true
- append ```new_tuple = Tuple.append(old_tuple, 66) ```
- get element ```el = elem(some_tuple, 2) ```
- delete element ```new_tuple = Tuple.delete_at(old_tuple, 2) ```
- insert element ```new_tuple = Tuple.insert_at(old_tuple, 2, "foobar") ```
- get size ```new_tuple = tuple_size(old_tuple) ``` => 3
- bunch of elements ``` eleven_nines = Tuple.duplicate(9, 11)```

- ``` {name, quest, color} = {"Robin", "To find the holy grail", "red, no blue"}```
- ``` IO.puts("favorite \#{color}")``` => "red, no blue"

>>>

# Tuples

```
is_tuple({1, 3.14, :Drupal})  => true
```

append

```
new_tuple = Tuple.append(old_tuple, 66)
```

get element

```
el = elem(some_tuple, 2)
```

get size

```
new_tuple = tuple_size(old_tuple) => 3
```



:::

::: slide

>>> notes

- Like dictionaries
- ``` map = %{"key" => "value", "key2" => "value2"}```
- or an associaded array in php

>>>

# Maps

```elixir
 map = %{"key" => "value", "key2" => "value2"}
 ```

:::
