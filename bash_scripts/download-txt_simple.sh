#!/bin/bash
#web scraping fish names into local db

curl=$(which curl)
outfile="/Users/PWR/Documents/deepc-fish-name-generator/backend/fish_simple.txt"
url="https://raw.githubusercontent.com/janelleshane/fish-common-names/master/fish.txt"

#dump webpage
function dump_webpage() {
    curl -o $outfile $url
}

#############
#   MAIN    #
#############

dump_webpage


#END