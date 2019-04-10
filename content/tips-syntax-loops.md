
::: slide

>>> notes

- There is no looping, You will need to use recursion or Enumerables

>>>

# Loops & Enumeration

:::

::: slide

>>> notes

- A Type must implement the Enumerable protocol
- List, Map, and Range

>>>

# Loops & Enumeration

:::

::: slide

>>> notes

  - Enum.each performs action on each item
  - Enum.map returns array after performing some action
  - Enum.reduce([], fn) returns a single value
  - Enum.uniq([]) returns a list with all duplicates removed

>>>

# Enumeration

- Enum.each
- Enum.map
- Enum.reduce([], fn)
- Enum.uniq([])

:::

::: slide

>>> notes
- 45:52 Recursion
  - ``` def print_list([element|list]) do
          IO.puts element
          print_list(list)
        end
          def print_list([]), {do:} nil
          remove the curly brackets
    ```
>>>

# Recursion

```elixir
def print_list([element|list]) do
  IO.puts element
  print_list(list)
end

def print_list([]), do: nil
```
:::

::: slide

>>> notes
- 45:52 Recursion
  - ``` def print_list([element|list]) do
          IO.puts element
          print_list(list)
        end
          def print_list([]), {do:} nil
          remove the curly brackets
    ```
>>>

# Recursion

```elixir
def print_list([element|list]) do
  IO.puts element
  print_list(list)
end

def print_list([]), do: nil
```

```php
function print_list($array) {
  if (empty($array)) {
    return;
  }

  $first = array_shift($array);
  echo $first;
  print_list($array);
}
```
:::
