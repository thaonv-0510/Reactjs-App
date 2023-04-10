threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
threads threads_count, threads_count
port        ENV.fetch("PORT") { 3000 }
binding '54.152.117.159'
app_dir = File.expand_path("../..", __FILE__)
environment ENV.fetch("RAILS_ENV") { "production" }

# bind "unix:///home/deploy/libra/shared/tmp/sockets/puma.sock"
# pidfile '/home/deploy/libra/shared/tmp/pids/puma.pid'
# state_path '/home/deploy/libra/shared/tmp/pids/puma.state'
workers ENV.fetch("WEB_CONCURRENCY") { 2 }

plugin :tmp_restart
