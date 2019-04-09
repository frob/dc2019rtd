
::: slide

>>> notes

- There is no looping, You will need to use recursion or Enumerables
- 45:52 Recursion
  - ``` def print_list([element|list]) do
          IO.puts element
          print_list(list)
        end
          def print_list([]), {do:} nil
          remove the curly brackets
    ```
- 53:05 Enumerables
  - Enum.each
  - Enum.map
  - Enum.reduce([], fn)
  - Enum.uniq([])

>>>

# Loops

:::
