#!/bin/bash
echo "***** STARTING DEEPC FISH NAME SERVER *****"
docker run --name "deepc_fish_name_server" -p 80:8080 -d patrem98/deepc-fish-name-gen_backend
echo "***** SERVER STARTED *****"
cd ../backend
echo "***** TESTING SERVER *****"
npm test ./test/unit_tests.js