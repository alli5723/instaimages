var app = angular.module('qminder', ['angular.filter']);
loadProgressBar()

var base_url = "https://www.instagram.com/";
var url_suffix = "/?__a=1";

app.controller('indexController', function($scope, $interval) {
    $scope.searchname = "justinbieber"
    $scope.fullname = ""
    $scope.profile_pic_url = "";
    $scope.error = "";
    $scope.edges = [];
    $scope.search = function(){
        var searchurl = base_url+ $scope.searchname + url_suffix;
        callApi(searchurl);
    }

    $interval(function () {
        $scope.error = ""
        callApi(base_url+ $scope.searchname + url_suffix);
    }, 10000);

    function callApi(url){
        axios.get(url)
            .then(function (response) {
                $scope.$apply(function(){
                    $scope.error = ""
                    $scope.edges = response.data.graphql.user.edge_owner_to_timeline_media.edges;
                    $scope.fullname = response.data.graphql.user.full_name;
                    $scope.biography = response.data.graphql.user.biography;
                    $scope.external_url = response.data.graphql.user.external_url;
                    $scope.profile_pic_url = response.data.graphql.user.profile_pic_url;
                });
            })
            .catch(function (error) {
                $scope.$apply(function(){
                    $scope.error = 'Error, Could not fetch Images for ' +$scope.searchname + "'s profile"
                });
                alertify.error('Error, Could not fetch Images for ' +$scope.searchname + "'s profile"); 
            });
    }

    callApi(base_url+ $scope.searchname + url_suffix);
});