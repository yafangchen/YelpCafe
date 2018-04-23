#!/usr/bin/env bash
#export PATH=$PATH:[path to mongodb bin]
mongodump --db yelp -o backup.yelp
