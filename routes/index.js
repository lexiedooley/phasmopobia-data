var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index')
const mapsCtrl = require('../controllers/mapsController')
const ghostCtrl = require('../controllers/ghostsController')

// UPDATE for new room
router.post('/maps/edit/:id', mapsCtrl.updateMap)

// //CREATE new map
router.post('/maps', mapsCtrl.createMap)


// CREATE new ghostx
router.post('/ghosts', ghostCtrl.createGhost)

// Delete Map
router.delete('/:id', mapsCtrl.deleteRoom)

//GET one map
router.get('/maps/:id', mapsCtrl.show); 

//GET one ghost
router.get('/ghosts/:id', ghostCtrl.show); 

//GET /maps
router.get('/maps', mapsCtrl.index);

//GET /ghosts
router.get('/ghosts', ghostCtrl.index);

//GET index 
router.get("/", indexCtrl.index);   

// // EDIT MAPS TO ADD ROOM 
// router.post('/:id/edit', mapsCtrl.edit)

module.exports = router;

