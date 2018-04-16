module.exports = function (app) {
    var cafeProfileModel = require("../models/profile/cafe_profile.model.server");

    app.get("/api/cafe/:cafeId", findCafeProfileById);
    app.post("/api/cafe", createCafeProfile);
    app.put("/api/cafe/:cafeId", updateCafeProfile);
    app.delete("/api/cafe/:cafeId", removeCafeProfile);

    function findCafeProfileById(req, res) {
        var cafeProfileId = req.params['cafeProfileId'];
        cafeProfileModel.findCafeProfileById(cafeProfileId)
            .then(function (cafeProfile) {
                res.json(cafeProfile);
            })
    }

    function createCafeProfile(req, res) {
        var cafeProfile = req.body;
        cafeProfileModel.createCafeProfile(cafeProfile)
            .then(function (cafeProfile) {
                res.json(cafeProfile);
            })
    }

    function updateCafeProfile(req, res) {
        var cafeProfileId = req.params['cafeProfileId'];
        var cafeProfile = req.body;
        cafeProfileModel.updateCafeProfile(cafeProfileId, cafeProfile)
            .then(function (cafeProfile) {
                res.json(cafeProfile);
            })
    }

    function removeCafeProfile(req, res) {
        var cafeProfileId = req.params['cafeProfileId'];
        cafeProfileModel.removeCafeProfile(cafeProfileId)
            .then(function (status) {
                res.json(status);
            })
    }

    /*
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePageById);
    app.delete("/api/page/:pageId", deletePage);

    function findAllPagesForWebsite(req, res) {
      var websiteId = req.params['websiteId'];
      pageModel.findAllPagesForWebsite(websiteId)
        .then(function(pages){
          res.json(pages);
        })
    }

    function createPage(req, res) {
      var websiteId = req.params['websiteId'];
      var page = req.body;
      page.websiteId = websiteId;
      pageModel.createPage(page)
        .then(function(page){
          res.json(page);
        })
    }

    function findPageById(req, res) {
      var pageId = req.params['pageId'];
      pageModel.findPageById(pageId)
        .then(function(page){
          res.json(page);
        })
    }

    function updatePageById(req, res) {
      var pageId = req.params['pageId'];
      var newPage = req.body;
      pageModel.updatePageById(pageId, newPage)
        .then(function(page){
          res.json(page);
        })
    }

    function deletePage(req, res) {
      var pageId = req.params['pageId'];
      pageModel.deletePage(pageId)
        .then(function(status){
          res.send(status);
        })
    }
    */
}

