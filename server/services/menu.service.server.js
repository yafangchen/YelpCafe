module.exports = function (app) {
    var menuModel = require("../models/menu/menu.model.server");

    app.get("/api/menu/:menuId", findMenuById);
    app.put("/api/menu/:menuId", updateMenu);
    app.delete("/api/menu/:menuId", deleteMenu);

    app.post("/api/cafe/:cafeId/menu", createMenu);
    app.get("/api/cafe/:cafeId/menus", findMenusByCafeId);

    function findMenuById(req, res) {
        var menuId = req.params['menuId'];
        menuModel.findMenuById(menuId).then(
            function (menu) {
                res.json(menu);
            }
        );
    }
    function updateMenu(req, res) {
        var menuId = req.params['menuId'];
        var menu = req.body;
        menuModel.updateMenu(menuId, menu).then(
            function (menu) {
                res.json(menu);
            }
        );
    }
    function deleteMenu(req, res) {
        var menuId = req.params['menuId'];
        menuModel.removeMenu(menuId)
            .then(function (status) {
                res.json(status);
            })
    }
    function createMenu(req, res) {
        var menu = req.body;
        var cafeId = req.params['cafeId'];
        menu.cafeId = cafeId;
        menuModel.createMenu(menu).then(
            function (menu) {
                res.json(menu);
            }
        );
    }
    function findMenusByCafeId(req, res) {
        var cafeId = req.params['cafeId'];
        menuModel.findMenusByCafeId(cafeId).then(
            function (menus) {
                res.json(menus);
            }
        );
    }
}

