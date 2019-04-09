
::: slide

>>> notes
- https://hexdocs.pm/distillery/home.html
- Deployments
  - Remember that this is a compiled language
  - OTP Has the ability to do no downtime releases
  - Elixir is built on OTP
  - Deployments code diff
    - Elixir has a build tool called distillery
    - A distillery build is a tarbal that includes everything needed to deploy
      - The build
      - Tools for running in these modes
        - console, foreground, and daemonized
      - and connecting to the running application
        - remote_console
        - you can open an interactive shell in the running application

>>>

# Deployments

:::

::: slide

>>> notes

- Remember that this is a compiled language
- OTP Has the ability to do no downtime releases
- Elixir is built on OTP
- Deployments code diff

>>>

# No Downtime Deployments

:::

::: slide

>>> notes

- Where can I deploy my code?
- Self hosted
  -  AWS, Linode, Digital Ocean
- Heroku
  - Elixir has roots in Ruby and so Heroku is obviously a target
  - I have heard mixed things about using Heroku
- gigalixir
  - This is another managed Elixir hosting, free for one instance with one database
- Serverless
  - I have mixed feeling about this.
  - It is easy managed and fire/forget
  - It is also more about request/response

>>>

## Where to deploy elixir

_ AWS, Linode, Digital Ocean
- Heroku
- gigalixir
- Serverless

:::
