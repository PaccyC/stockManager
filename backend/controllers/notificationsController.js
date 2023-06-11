const Notification = require('../models/notificationModel');

exports.getAllNotifications=async(req,res)=>{
try{

    const notifications= await Notification.find({});
    res.status(200).json({notifications,ok:true});
}
catch(err){
    return res.status(400).json({error:err.message})
}



}

exports.deleteNotification=async(req,res)=>{
    const {id} =req.params;
    try{
        const deletedNotification= await Notification.findByIdAndDelete(id);
        return res.status(200).json({deletedNotification:deletedNotification})
    }
    catch(error){
        throw new Error(error, "Failed to delete the notification")
    }
}