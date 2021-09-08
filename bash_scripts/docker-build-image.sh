#!/bin/bash
echo "****** BUILD CONTAINER ******"
docker build -t patrem98/deepc-fish-name-gen_backend ../backend
echo "****** SUCCESS ******"