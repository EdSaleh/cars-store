export function Routes(app) {
  let cars = [
    {'id':0, 'img':'./images/ford-fseries.jpg', 'name':'Ford | F Series', 'make':'Ford', 'model':'F Series', 'availability':'Unavailabile'},
    {'id':1, 'img':'./images/ram-pickup.jpg', 'name':'Ram | Pickup', 'make':'Ram', 'model':'Pickup', 'availability':'Out of Stock'},
    {'id':2, 'img':'./images/civic.jpg', 'name':'Honda | Civic', 'make':'Honda', 'model':'Civic', 'availability':'Available'},
    {'id':3, 'img':'./images/silverado.jpg', 'name':'Chevrolet | Silverado', 'make':'Chevrolet', 'model':'Silverado', 'availability':'Available'},
    {'id':4, 'img':'./images/sierra.jpg', 'name':'GMC | Sierra', 'make':'GMC', 'model':'Sierra', 'availability':'Available'},
    {'id':5, 'img':'./images/crv.jpg', 'name':'Honda | CR-V', 'make':'Honda', 'model':'CR-V', 'availability':'Available'},
    {'id':6, 'img':'./images/rav4.jpg', 'name':'Toyota | RAV4', 'make':'Toyota', 'model':'RAV4', 'availability':'Available'},
    {'id':7, 'img':'./images/escape.jpg', 'name':'Ford | Escape', 'make':'Ford', 'model':'Escape', 'availability':'Available'},
    {'id':8, 'img':'./images/corolla.jpg', 'name':'Toyota | Corolla', 'make':'Toyota', 'model':'Corolla', 'availability':'Available'},
    {'id':9, 'img':'./images/elantra.jpg', 'name':'Hyundai | Elantra', 'make':'Hyundai', 'model':'Elantra', 'availability':'Available'}];
  app.use('/cars', (req, res) => {
    res.send(cars);
  });

  app.use('/availability/:id', (req, res) => {
    let id = req.params.id;
    let car = cars.filter(x=>x.id===id);
    let availability = false;
    if(car.length>0) {availability = car[0].availability;}
    res.send({'available':availability});
  });
}