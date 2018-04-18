# Change to mongoimport path
MONGOIMPORT="../../mongodb/bin/mongoimport"
DB_NAME="yelp"

$MONGOIMPORT --db $DB_NAME --collection cafe_profile --drop --file cafe_profile.json
