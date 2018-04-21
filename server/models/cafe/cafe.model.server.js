var mongoose = require("mongoose");
var CafeSchema = require("./cafe.schema.server");
var CafeModel = mongoose.model('CafeModel', CafeSchema);

CafeModel.findCafeById = findCafeById;
CafeModel.createCafe = createCafe;
CafeModel.updateCafe = updateCafe;
CafeModel.removeCafe = removeCafe;
CafeModel.findCafesByOwnerId = findCafesByOwnerId;

module.exports = CafeModel;

function findCafesByOwnerId(ownerId) {
    return CafeModel.find({"ownerId": ownerId});
}

function findCafeById(cafeId) {
    return CafeModel.findOne({_id: cafeId});
}

function updateCafe(cafeId, cafe) {
    return CafeModel.update({_id: cafeId}, {
        $set: {
            placeId: cafe.placeId,
            name: cafe.name,
            address: cafe.address,
            openHour: cafe.openHour,
            phone: cafe.phone,
            priceLevel: cafe.priceLevel,
            rating: cafe.rating,
            isOpen: caef.isOpen,
            weekdayText: cafe.weekdayText,
            icon: cafe.icon,
            avatar: cafe.avatar,
            photos: cafe.photos
        }});
}

function createCafe(cafe) {
    return CafeModel.create(cafe)
        .then(function(responseCafe){
            return responseCafe;
        });
}

function removeCafe(cafeId) {
    // TODO: remove all reviews and menus.
    return CafeModel.remove({_id: cafeId});
}