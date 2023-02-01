// using image 
const fs= require('fs')
const HttpError= require('../models/http-error');
const uuid = require('uuid/v4');
// const path= require('path')
const mongoose= require('mongoose')
const {validationResult}= require('express-validator')
const User= require('../models/user')
const Place= require('../models/place')
const Customer= require('../models/customer')


const getPlaces = async (req, res, next) => {
  let places;
  try {
    places = await Place.find({});
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ places: places.map(place => place.toObject({ getters: true })) });
};


const getPlaceById= async(req, res, next)=>{
    const placeId= req.params.pid;    
    let place
    try{
        place= await Place.findById(placeId)
    }catch(err){
        const error= new HttpError('could not find place by id', 500)
        return next(error)
    }
    
    if(!place){
        const error= new HttpError('place not found', 500)
        return next(error)
    }     
    res.status(201).json({place:place.toObject({getters: true })})
}



const getPlaceUserById=async(req, res, next)=>{
    const userId= req.params.uid;
    let userplaces
    try{
        userplaces= await User.findById(userId).populate('places');
    }catch(err){
        const error= new HttpError('could not find places by userid', 500)
        return next(error)
    }    
    
    if(!userplaces || userplaces.length===0){
        const error= new HttpError('place not found', 500)
        return next(error)
    }  

    res.status(201).json({places:userplaces.places.map(p=>p.toObject({getters:true}))})
}


const getPlaceByName= async(req, res, next)=>{
  const placeId= req.params.nid;    
  let place
  try{
      place= await Place.find({name:placeId})
      console.log(place)
  }catch(err){
      const error= new HttpError('could not find product by name', 500)
      return next(error)
  }
  
  if(!place){
      const error= new HttpError('product not found', 500)
      return next(error)
  }     
  res.status(201).json({places:place.map(p=>p.toObject({getters: true }))})
}



const createPlace= async (req, res, next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }    
    const{name, title, description, mrp, price, time}= req.body;
    const a = new Date()
    const b =a.getDate()+"/"+a.getMonth()+1+"/"+a.getFullYear()

    const createdPlace= new Place({
        // id: uuid(),
        name,
        title:title,
        description:description,
        price:price,
        mrp:mrp,
        image:req.file.path, 
        // image1:req.file.path, 
        // image2:req.file.path, 
        // image3:req.file.path, 
        // => File Upload module, will be replaced with real image url    
        // creator:creator
        time:b,
        creator:req.userData.userId
    });
    
  let user;
  try {
    // user = await User.findById(creator);
    user = await User.findById(req.userData.userId);
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again...',
      500
    );
    return next(error);
  }
  console.log(user)
  if (!user) {
    const error = new HttpError('Could not find user for provided id.', 404);
    return next(error);
  }
  console.log(user)

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createdPlace.save({ session: sess }); 
    user.places.push(createdPlace); 
    await user.save({ session: sess }); 
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Creating place failed, please try again..',
      500
    );
    return next(error);
  }    
    res.status(201).json({place:createdPlace})
    
}

const updatePlace= async(req, res, next)=>{
    const error= validationResult(req);
    if(!error.isEmpty()){
        const error= new HttpError('invalid input updated', 500)
        return next(error)
    }
    const{title, description, mrp, price}= req.body;
    const placeId= req.params.pid;

    let updatedplace
    try {
        updatedplace=await Place.findById(placeId)        
    } catch (err) {
        const error= new HttpError('could not find id or update', 500)
        return next(error)
    }
    if(!updatedplace){        
        const error= new HttpError('could not find id', 500)
        return next(error)
    }
//token authincantaion
    if(updatedplace.creator.toString() !==req.userData.userId){
      const error= new HttpError('you are not allow to edit this product', 500)
      return next(error)
    }
    //


    updatedplace.title= title;
    updatedplace.description= description;
    updatedplace.mrp= mrp;
    updatedplace.price= price;
    

    try{
        await updatedplace.save()
    }catch(err){
        const error= new HttpError('could not updated place', 500)
        return next(error)
    }
    res.json({updatedplace:updatedplace.toObject({getters:true})})
}





const deletePlace= async(req, res, next)=>{
    const placeId= req.params.pid;

let place
try{
    place = await Place.findById(placeId).populate('creator');
}catch(err){
    const error= new HttpError('could not fetch...', 500)
        return next(error)
}
if(!place){    
    const error= new HttpError('could not find place', 500)
        return next(error)
}


//token authincantaion
if(place.creator.id !==req.userData.userId){
  const error= new HttpError('you are not allow to delete this product', 500)
  return next(error)
}
//

// const imagePath= place.image
try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await place.remove({session: sess});
    place.creator.places.pull(place);
    await place.creator.save({session: sess});
    await sess.commitTransaction();
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not delete place.',
      500
    );
    return next(error);
  }

  // // image 
  // fs.unlink(imagePath, err=>{
  //   console.log(err)
  // })
///////////////
  res.status(200).json({ message: 'Deleted place.' });
};


exports.getPlaceById = getPlaceById;
exports.getPlaceUserById = getPlaceUserById;
exports.createPlace = createPlace;
exports.updatePlace= updatePlace;
exports.deletePlace= deletePlace
exports.getPlaces= getPlaces
exports.getPlaceByName =getPlaceByName
// exports.createCustomerPlace= createCustomerPlace
// exports.getPlaceCustomerCreatorId= getPlaceCustomerCreatorId




