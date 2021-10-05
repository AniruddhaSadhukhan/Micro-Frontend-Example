# npm i --no-package-lock

ng build --output-hashing none --single-bundle true --watch true &
PID="$!"

npx http-server "./dist/" --cors="*" --gzip=true --port=4201 $1 -c-1
PID0="$!"

trap "kill $PID" exit INT
wait