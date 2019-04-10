
::: slide

>>> notes

- pipes
  - https://youtu.be/gom6nEvtl3U?t=1308
  - wraps the paramaters to wrapping functions
  - so ```$array = reset(array_keys($old_array)) ```
    - would become ```$old_array |> array_keys, reset ```

>>>

# Pipes

```elixir
conn
  |> put_status(:created)
  |> put_resp_header("location", Routes._path(conn, :show, _))
  |> render("show.json", _: _)
```

:::

::: slide

>>> notes

- example

>>>

# Pipes

## PHP
```php
$array = array_sort(exploode(" ", $text))
```

## Elixir
```elixir
list1
  |> List.sort
  |> List.split(" ", list1)
```

:::
