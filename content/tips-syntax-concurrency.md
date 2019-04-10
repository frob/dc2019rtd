
::: slide

>>> notes

- In Elixir concurrency is based on the actor model
- That means you can spawn long running processes and then communicate with them by sending messages
- The BEAMVM handles sceduling for us and we don't have to worry about locking threads or anything like that.
-if you developed with python or ruby you maybe know they have something called GIL (global interpreter lock). In short, the GIL ensures that only one thread shared memory.
- the GIL ensures thread-safe code, but it also makes really difficult to write code that can scale out running in parallel on multiple cores
- It is possible to write multi-threaded php in cli but not cgi
- you can just leave it to the webserver to spawn a new php thread to handle the request, but this doesn't give you multi-thread in a single application request
- https://www.poeticoding.com/spawning-processes-in-elixir-a-gentle-introduction-to-concurrency/

>>>

# Concurrency

:::

::: slide

>>> notes
- 1:01:21 Concurrency
  - spawn(fn() -> do_stuff("foobar") end)
  - send(self(), {:greeting, "Robin"})
  - recieve do
      {:greeting, name} -> IO.puts "Hello \#{name}"
      {:farewell, name} -> IO.puts "Goodbye \#{name}"
    after
      500 -> IO.puts "I didn't want to talk to you anyway!"
    end
  - So we can spawn long running processes and have that process build a queue or something
  - Then we can have shorted processes receive messages from the long running process and do things for it.

>>>

# Concurrency

```elixir
spawn(fn() -> do_stuff("foobar") end)

send(self(), {:greeting, "Robin"})
recieve do
  {:greeting, name} -> IO.puts "Hello \#{name}"
  {:farewell, name} -> IO.puts "Goodbye \#{name}"
after
  500 -> IO.puts "I didn't want to talk to you anyway!"
end
```

:::
