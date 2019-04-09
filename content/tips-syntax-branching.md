
::: slide

>>> notes

- 16:06 Decision Making
  - 13:30 Comparison
    - Data is typed
      - int vs float
        - ``` 7 == 7.0``` => true
        - ``` 7 === 7.0``` => false
    - and the rest
      - "> < <= >="
      - and or NOT && ||
    - if age >= 18 do \
        "can vote" \
      else
        "cannot vote"
      end
    - unless age === 18 do
        "You are 18"
      else
      end
    - switch like statements
      - case some_variable do
          1 -> "something"
          2 -> "something else"
          3 -> "something completely different"
        end
      - Cond is useful for checking across many different statments
      - cond do
          age >= 18 -> "can vote"
          age >= 16 -> "can drive"
          age >= 14 -> "cannot drive"
          true -> "default"
        end
    - Ternatry
      - Just an if/else on one line

>>>

# Slide title

:::
