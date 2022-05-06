AFRAME.registerComponent("building", {
  init: function () {
    //starting x position
    posX = -20;
    //starting z-position
    posZ = 85;

    for (var i = 0; i < 10; i++) {
      //create wire-fence entity
      var building1 = document.createElement("a-entity");
      var building2 = document.createElement("a-entity");
      var building3 = document.createElement("a-entity");
      var building4 = document.createElement("a-entity");


      //set x, y and z position
      posX = posX + 5;
      posY = 2.5;
      posZ = posZ - 10;

      //scale 
      var scale = { x: 2, y: 2, z: 2 };

      //set the id
      building1.setAttribute("id", "building1" + i);
      building2.setAttribute("id", "building2" + i);
      building3.setAttribute("id", "building3" + i);
      building4.setAttribute("id", "building4" + i);

      //set the position
      building1.setAttribute("position", { x: posX, y: 2.5, z: -35 });
      building2.setAttribute("position", { x: posX, y: 2.5, z: 85 });
      building3.setAttribute("position", { x: -30, y: 2.5, z: posZ });
      building4.setAttribute("position", { x: 50, y: 2.5, z: posZ });

      //set the scale
      building1.setAttribute("scale", scale);
      building2.setAttribute("scale", scale);
      building3.setAttribute("scale", scale);
      building4.setAttribute("scale", scale);

      //set the model
      wireFence1.setAttribute(
        "glb-model",
        "./models/building/building.gltf"
      );

      wireFence2.setAttribute(
        "gltf-model",
        "./models/building/building.gltf"
      );

      wireFence3.setAttribute(
        "gltf-model",
        "./models/building/building.gltf"
      );

      wireFence4.setAttribute(
        "gltf-model",
        "./models/building/building.gltf"
      );

      //set the rotation
      building3.setAttribute("rotation", { x: 0, y: 90, z: 0 });
      building4.setAttribute("rotation", { x: 0, y: 90, z: 0 });

      //set the physics body
      building1.setAttribute("static-body", {});
      building2.setAttribute("static-body", {});
      building3.setAttribute("static-body", {});
      building4.setAttribute("static-body", {});

      var sceneEl = document.querySelector("#scene");
      //attach the entity to the scene
      sceneEl.appendChild(building1);
      sceneEl.appendChild(building2);
      sceneEl.appendChild(building3);
      sceneEl.appendChild(building4);

      var sceneEl = document.querySelector("#scene");
      sceneEl.appendChild(building);

    }
  },
});




      
    