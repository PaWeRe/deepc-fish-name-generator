#!/bin/bash
#web scraping fish names into local db

curl=$(which curl)
outfile="/Users/PWR/Documents/deepc-fish-name-generator/backend/fish.txt"
url="https://www.purdue.edu/hhs/nutr/fish4health/mobile/list.html"

#checking for errors
function check_errors() {
    [ $? -ne 0 ] && echo "Error downloading page..." && exit -1
}

#dump webpage
function dump_webpage() {
    $curl -o $outfile $url
    check_errors
}

#clean webpage
function strip_html() {
    grep "<p>" $outfile | sed 's/[\t ]*<[^>]*>//g' > temp.txt && cp temp.txt $outfile
}

#############
#   MAIN    #
#############

dump_webpage
strip_html


#END