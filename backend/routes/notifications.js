const express =require('express');
const notificationsController= require('../controllers/notificationsController')
const router = express.Router();

router.get('/',notificationsController.getAllNotifications)

router.delete('/:id',notificationsController.deleteNotification);
module.exports =router;