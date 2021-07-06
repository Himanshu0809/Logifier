#!/bin/sh

changedFiles="$(git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD)"

checkForChangedFiles() {
    echo "$changedFiles" | grep --quiet "$1" && eval "$2 $3"
}

packageJsonHasChanged() {
  echo "Changes to package.json detected, installing updates"
  if echo $1 | grep 'client';
  then
    pushd client
    npm i 
    popd
  else
    npm i 
  fi
}

checkForChangedFiles client/package.json packageJsonHasChanged client
checkForChangedFiles logifier/package.json packageJsonHasChanged

if [[ ! -e ./nohup.out ]]; 
then
  echo "nohup.out is not created .. creating here ...."
  touch nohup.out
fi

DIR="/server/uploads"
if [ -d "$DIR" ]; then
   echo "Uploads folder exits ..."
else
  mkdir -p server/uploads
fi

serverCmd="npm run server"
nohup $serverCmd &

# Storing the background process' PID.
server_bg_pid=$!

if echo $1 | grep 'browser';
then
  clientCmd="npm run client-browser"
else
  clientCmd="npm run client-app"
fi
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
