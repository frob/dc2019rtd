
::: slide

>>> notes

- 2 to 4 values
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
- 36:40 Maps
  - Like dictionaries
    - ``` map = %{"key" => "value", "key2" => "value2"}```

>>>

# Tuples & Maps

:::
