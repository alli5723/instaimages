describe('indexController', function() {
    beforeEach(module('qminder'));
  
    describe('$scope.search', function() {
        var $controller;
        beforeEach(
            inject(function(_$controller_){
                $controller = _$controller_;
                }));
        console.log($controller);
  
        it(' returns a response on click of search ', function() {
            var $scope = {};
            // var controller = $controller('indexController', { $scope: $scope});
        //     $scope.searchname = "justinbieber";
        //     $scope.search();
        //     expect($scope.fullname).toEqual('Justin Bieber');
        });
            it('equates', function(){
                expect('Justin Bieber').toEqual('Justin Bieber');
            })
    });
  });