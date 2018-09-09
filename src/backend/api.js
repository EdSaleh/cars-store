module.exports = function(app) {
  let cars = [
    {'id':0, 'img':'/assets/images/ford-fseries.jpg', 'name':'Ford | F Series', 'make':'Ford', 'model':'F Series', 'availability':'Unavailabile'},
    {'id':1, 'img':'/assets/images/ram-pickup.jpg', 'name':'Ram | Pickup', 'make':'Ram', 'model':'Pickup', 'availability':'Out of Stock'},
    {'id':2, 'img':'/assets/images/civic.jpg', 'name':'Honda | Civic', 'make':'Honda', 'model':'Civic', 'availability':'Available'},
    {'id':3, 'img':'/assets/images/silverado.jpg', 'name':'Chevrolet | Silverado', 'make':'Chevrolet', 'model':'Silverado', 'availability':'Out of Stock'},
    {'id':4, 'img':'/assets/images/sierra.jpg', 'name':'GMC | Sierra', 'make':'GMC', 'model':'Sierra', 'availability':'Available'},
    {'id':5, 'img':'/assets/images/crv.jpg', 'name':'Honda | CR-V', 'make':'Honda', 'model':'CR-V', 'availability':'Available'},
    {'id':6, 'img':'/assets/images/rav4.jpg', 'name':'Toyota | RAV4', 'make':'Toyota', 'model':'RAV4', 'availability':'Available'},
    {'id':7, 'img':'/assets/images/escape.jpg', 'name':'Ford | Escape', 'make':'Ford', 'model':'Escape', 'availability':'Available'},
    {'id':8, 'img':'/assets/images/corolla.jpg', 'name':'Toyota | Corolla', 'make':'Toyota', 'model':'Corolla', 'availability':'Available'},
    {'id':9, 'img':'/assets/images/elantra.jpg', 'name':'Hyundai | Elantra', 'make':'Hyundai', 'model':'Elantra', 'availability':'Unavailabile'}];

  app.use('/cars', function(req, res) {
    res.json(cars);
  });

  app.use('/availability/:id', function (req, res) {
    let id = req.params.id;
    let car = cars.filter(x=>x.id===id);
    let availability = false;
    if(car.length>0) {availability = car[0].availability;}
    res.json({'available':availability});
  });
}