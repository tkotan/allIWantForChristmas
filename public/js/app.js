const app = angular.module('ChristmasList', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.items = [];
    // this.purchased = false;
    this.indexOfEditFormToShow;


    this.getItems = function(){
        $http({
            method:'GET',
            url:'/christmas'
        }).then(
            function(response){
                controller.items = response.data;
            },
            function(error){

            }
        );
    },
    this.createItem = function(){
        $http({
            method:'POST',
            url:'/christmas',
            data: {
                name: this.name,
                price: this.price,
                description: this.description,
            }
        }).then(
            function(response){
                controller.name = "";
                controller.price = "";
                controller.description = "";
                // controller.purchased = false;
                controller.getItems();
            },
            function(error){

            }
        );
    },
    this.updateItem = function(item){
        let newPurchased;
        if(item.purchased === true){
            newPurchased = false;
        } else {
            newPurchased = true;
        }

        $http({
            method:'PUT',
            url: '/christmas/' + item._id,
            data: {
              name: item.name,
              price: item.price,
              description: "",
              purchased: newPurchased
            }
        }).then(
            function(response){
                controller.getItems();
            },
            function(error){

            }
        );
    }

    this.editItem = function(item){
        $http({
            method:'PUT',
            url: '/christmas/' + item._id,
            data: {
              name: this.updatedName,
              price: this.updatedPrice,
              description: this.updatedDescription,
              purchased: item.purchased
            }
        }).then(
            function(response){
                controller.getItems();
            },
            function(error){

            }
        );
    }

    this.deleteItem = function(item){
        $http({
            method:'DELETE',
            url: '/christmas/' + item._id
        }).then(
            function(response){
                controller.getItems();
            },
            function(error){

            }
        );
    }

    this.getItems();
}])
