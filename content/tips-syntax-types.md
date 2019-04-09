
::: slide

>>> notes

- is_int
  - no maximum size
- is_float
- is_atom
  - ``` Atom \#{is_atom(:Drupal)}```
  - ``` Atom \#{is_atom(:"Drupal dot Org")}```
- ranges
  ``` one_to_ten 1..10```
- 06:38 Strings
  - double quotes ``` string = "Hello World!"```
  - String Length ``` String.length("Hello World!") ``` => 12
  - String concatination ``` "Hello" <> " " <> "World!"" ```
  - String search ``` String.contains?("foobar", "foo") ``` => true
  - String first char ``` String.first("foobar") ``` => "f"
  - String char at index ``` String.at("foobar", 3) ``` => "b"
  - String substring ``` String.slice("foobar", 3, 5) ``` => "bar"
  - String explode ``` String.split("foobar", "b") ``` => ["foo", "oo"]
  - String explode ``` String.revers("foobar", "b") ``` => ["foo", "oo"]
  - String explode ``` String.upcase("foobar", "b") ``` => ["foo", "oo"]
  - String explode ``` String.downcase("foobar", "b") ``` => ["foo", "oo"]
  - String explode ``` String.capitalize("foobar", "b") ``` => ["foo", "oo"]

>>>

# Slide title

:::
