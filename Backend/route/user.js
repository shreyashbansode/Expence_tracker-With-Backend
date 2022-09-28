const express =require('express');

const routes = express.Router();


routes.post("/",require("./../controllers/user").createItem);

routes.get("/",require("./../controllers/user").getItem);
routes.get("/:userID",require("./../controllers/user").getoneItem);


routes.delete("/:userID",require("./../controllers/user").deleteUser);
routes.put("/:userID",require("./../controllers/user").updateUser);


module.exports = routes;