var mongoose = require("mongoose");
var CafeProfileSchema = require("./cafe_profile.schema.server");
var CafeProfileModel = mongoose.model('CafeProfileModel', CafeProfileSchema);

CafeProfileModel.findCafeProfileById = findCafeProfileById;
CafeProfileModel.createCafeProfile = createCafeProfile;
CafeProfileModel.updateCafeProfile = updateCafeProfile;
CafeProfileModel.removeCafeProfile = removeCafeProfile;
CafeProfileModel.findCafesByUserId = findCafesByUserId;

module.exports = CafeProfileModel;

function findCafesByUserId(userId) {
    return CafeProfileModel.find({"userId": userId});
}

function findCafeProfileById(cafeProfileId) {
    return CafeProfileModel.findOne({_id: cafeProfileId});
}

function updateCafeProfile(cafeProfileId, cafeProfile) {
    return CafeProfileModel.update({_id: cafeProfileId}, {
        $set: {name: cafeProfile.name,
            address: cafeProfile.address}});
}

function createCafeProfile(cafeProfile) {
    return CafeProfileModel.create(cafeProfile)
        .then(function(responseCafeProfile){
            return responseCafeProfile;
        });
}

function removeCafeProfile(cafeProfileId) {
    // TODO: remove all review.
    return CafeProfileModel.remove({_id: cafeProfileId});
}

/*
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.deletePage = deletePage;
PageModel.findPageById = findPageById;
PageModel.updatePageById = updatePageById;

module.exports = PageModel;

function updatePageById(pageId, page) {
    return PageModel.update({_id: pageId}, {
        $set: {name: page.name,
            title: page.title}});
}

function findPageById(pageId) {
    return PageModel.findOne({_id: pageId});
}

function deletePage(pageId) {
    return PageModel.findOne({_id: pageId})
        .then(function(responsePage){
            var websiteId = responsePage.websiteId;
            WebsiteModel.findWebsiteById(websiteId)
                .then(function(website) {
                    var pages = website.pages;
                    for(var i = 0; i < pages.length; i++) {
                        if (pages[i]._id.toString() === pageId) {
                            pages.splice(i, 1);
                            break;
                        }
                    }
                    website.save();
                    return PageModel.remove({_id: pageId});
                })
        });
}

function findAllPagesForWebsite(websiteId){
    return PageModel.find({"websiteId": websiteId});
}


function createPage(page){
    return PageModel.create(page)
        .then(function(responsePage){
            WebsiteModel.findWebsiteById(page.websiteId)
                .then(function(website){
                    website.pages.push(responsePage);
                    return website.save();
                })
        });
}
*/