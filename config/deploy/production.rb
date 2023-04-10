# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

# server "example.com", user: "deploy", roles: %w{app db web}, my_property: :my_value
# server "example.com", user: "deploy", roles: %w{app web}, other_property: :other_value
# server "db.example.com", user: "deploy", roles: %w{db}
set :branch, 'react_rails7'
set :stage, :production
set :rails_env, 'production'
set :deploy_to, "/home/deploy/libra"
server "54.152.117.159", user: "deploy", roles: %w(web db app)
