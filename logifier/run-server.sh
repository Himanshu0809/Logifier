#!/bin/sh

serverCmd="npm run server"
nohup $serverCmd &

# Storing the background process' PID.
server_bg_pid=$!

clientCmd="npm run client"
nohup $clientCmd &

# Storing the background process' PID
client_bg_pid=$!

# Trapping SIGINTs so we can send them back to $bg_pid.
trap "kill -2 $server_bg_pid" 2
trap "kill -2 $client_bg_pid" 2

tail -f nohup.out

# In the meantime, wait for $bg_pid to end.
wait $server_bg_pid
wait $client_bg_pid

cat /dev/null >  nohup.out
