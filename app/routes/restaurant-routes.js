module.exports = app => {
    const controller = require('../controllers/restaurant-controller')

    var router = require('express').Router();
    
    //add menu for restaurant
    router.post('/addMenu', controller.addMenu);

    //fetch menu for a restaurant
    router.get('/getMenu', controller.getMenu);

    //update details of restaurant by Id
    router.put('/updateMenu', controller.updateMenu);

    //update restaurant active status
    router.put('/status', controller.status);

    //delete item in menu of a restuarant
    router.delete('/deleteMenu', controller.deleteMenu);

    //update order status to user
    router.put('/updateOrder', controller.updateOrder);

    //get all order for a restaurant
    router.get('/getAllOrders', controller.getAllOrders);

    app.use('/restaurant-service', router);
};