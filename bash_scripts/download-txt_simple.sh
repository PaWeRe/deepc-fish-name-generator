#!/usr/local/bin/...
#web scraping fish names into local db

curl=$(which curl)
outfile="fish.txt"
url="https://raw.githubusercontent.com/janelleshane/fish-common-names/master/fish.txt"
path="../backend/"

#dump webpage
function dump_webpage() {
    curl -o $outfile $url > $path
}

#############
#   MAIN    #
#############

dump_webpage


#END