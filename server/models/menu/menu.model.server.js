var mongoose = require("mongoose");
var MenuSchema = require("./menu.schema.server");
var MenuModel = mongoose.model('MenuModel', MenuSchema);

MenuModel.findMenusByCafeId = findMenusByCafeId;
MenuModel.findMenuById = findMenuById;
MenuModel.createMenu = createMenu;
MenuModel.updateMenu = updateMenu;
MenuModel.removeMenu = removeMenu;

module.exports = MenuModel;

function findMenusByCafeId(cafeId) {
    return MenuModel.find({"cafeId": cafeId});
}

function findMenuById(menuId) {
    return MenuModel.findOne({"_id": menuId});
}

function createMenu(menu) {
    return MenuModel.create(menu).then(
        function (respMenu) {
            return respMenu;
        }
    );
}

function updateMenu(menuId, menu) {
    return MenuModel.update({_id: menuId}, {
        $set: {
            name: menu.name,
            price: menu.price,
            description: menu.description,
            image: menu.image
        }});
}

function removeMenu(menuId) {
    return MenuModel.remove({"_id": menuId});
}