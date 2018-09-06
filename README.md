# Redux Saga Exercise

NOTE: If you are unsure about any questions please state your assumption and build your solution on that assumption.

IMPORTANT: Please send the code and system diagram either by uploading to Github or Google Docs or Dropbox. Please DON’T send it via ZIP file, the firewall will reject your email. 


Q1. You are hired by FancyCars.ca. FancyCars.ca has asked you to build their Home Page. On their Home Page they want to:

Show 10 cars and for each car, they want to show picture, name, make, model and availability of the car. 
Have a Sort Dropdown which can sort the results by both the name and availability of the car
Show a buy button that only shows up if Availability is “In Dealership”
Make the home page mobile optimized and responsive
 
For this exercise, please use React/Redux to build the Home Page for FancyCars.ca. Do not use any third party CSS themes for your styling.

For BE build BFF (BE for FE) which can call AvailabilityService and CarsService to get that API response (you can stub the API response from those services but make sure to stub the API response as far back as possible in the stack so they can easily be replaced with real calls). API spec is as follows: 

GET /availability?id=123 
RESPONSE: {available: “In Dealership”}  // all  options are [ “Out of Stock”, “Unavailable”]

GET /cars
RESPONSE:  [ {id: 1, img: http://myfancycar/image, name: “My Fancy Car”, make: “MyMake”, model: “MyModel”, year: 2018} ….]

Q2. You have been given an opportunity to re-architect the Walmart.ca website, which is an extremely high traffic website. For this re-architecture, please draw a detailed System architecture diagram describing different components to build a scalable web application. Please state any assumptions you would like to make. 

By Ahmed Saleh