import React, { Component } from "react";
import * as THREE from "three";
import "./BackgroundScene.css";

class BackgroundScene extends Component {
  constructor(props) {
    super(props);

    this.createLights = this.createLights.bind(this);
    this.createFloor = this.createFloor.bind(this);
    this.createDog = this.createDog.bind(this);
    this.loop = this.loop.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.look = this.look.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.renderScene = this.renderScene.bind(this);
    this.rule3 = this.rule3.bind(this);
  }

  componentDidMount() {
    var scene,
      camera,
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane,
      shadowLight,
      backLight,
      light,
      renderer,
      threegroup;

    var floor;

    var height,
      width,
      windowHalfX,
      windowHalfY,
      mousePos = { x: 0, y: 0 };

    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.mousePos = mousePos;
    this.threegroup = threegroup;
    this.width = width;
    this.height = height;
    this.shadowLight = shadowLight;
    this.backLight = backLight;
    this.light = light;
    this.floor = floor;
    this.windowHalfX = windowHalfX;
    this.windowHalfY = windowHalfY;

    this.scene = new THREE.Scene();
    this.height = this.mount.clientHeight;
    this.width = this.mount.clientWidth;
    aspectRatio = this.width / this.height;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 2000;
    this.camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );
    this.camera.position.z = 1200; //800
    this.camera.position.y = -400; //0
    this.camera.lookAt(new THREE.Vector3(0, 0, 0));
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.shadowMap.enabled = true;
    this.mount.appendChild(this.renderer.domElement);
    this.windowHalfX = this.width / 2;
    this.windowHalfY = this.height / 2;

    window.addEventListener("resize", this.handleResize);
    document.addEventListener("mousemove", this.handleMouseMove, false);
    document.addEventListener("touchstart", this.handleTouchStart, false);
    document.addEventListener("touchend", this.handleTouchEnd, false);
    document.addEventListener("touchmove", this.handleTouchMove, false);

    this.createLights();
    this.createFloor();
    this.createDog();

    this.loop();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("touchstart", this.handleTouchStart);
    document.removeEventListener("touchend", this.handleTouchEnd);
    document.removeEventListener("touchmove", this.handleTouchMove);
  }

  handleResize() {
    this.height = window.innerHeight;
    this.width = window.innerWidth;

    this.windowHalfX = this.width / 2;
    this.windowHalfY = this.height / 2;

    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();
  }

  handleMouseMove(event) {
    this.mousePos = { x: event.clientX, y: event.clientY };
  }

  handleTouchStart(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
      this.mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
    }
  }

  handleTouchEnd(event) {
    this.mousePos = { x: this.windowHalfX, y: this.windowHalfY };
  }

  handleTouchMove(event) {
    if (event.touches.length === 1) {
      event.preventDefault();
      this.mousePos = { x: event.touches[0].pageX, y: event.touches[0].pageY };
    }
  }

  createLights() {
    this.light = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);

    this.shadowLight = new THREE.DirectionalLight(0xffffff, 0.7);
    this.shadowLight.position.set(200, 200, 200);
    this.shadowLight.castShadow = true;

    this.backLight = new THREE.DirectionalLight(0xffffff, 0.3);
    this.backLight.position.set(-100, 200, 50);
    this.backLight.castShadow = true;

    this.scene.add(this.light);
    this.scene.add(this.shadowLight);
    this.scene.add(this.backLight);

    //Set up shadow properties for the shadowLight
    this.shadowLight.shadow.mapSize.width = 512;
    this.shadowLight.shadow.mapSize.height = 512;
    this.shadowLight.shadow.camera.near = 100;
    this.shadowLight.shadow.camera.far = 1500;
    this.shadowLight.shadow.camera.fov = 40;
    this.shadowLight.shadow.camera.left = -this.width / 2;
    this.shadowLight.shadow.camera.right = this.width / 2;
    this.shadowLight.shadow.camera.top = -this.height / 2;
    this.shadowLight.shadow.camera.bottom = this.height / 2;
    this.shadowLight.shadow.bias = -0.005;

    //Set up shadow properties for the backLight
    this.backLight.shadow.mapSize.width = 512;
    this.backLight.shadow.mapSize.height = 512;
    this.backLight.shadow.camera.near = 100;
    this.backLight.shadow.camera.far = 1500;
    this.backLight.shadow.camera.fov = 40;
    this.backLight.shadow.camera.left = -this.width / 2;
    this.backLight.shadow.camera.right = this.width / 2;
    this.backLight.shadow.camera.top = -this.height / 2;
    this.backLight.shadow.camera.bottom = this.height / 2;
    this.backLight.shadow.bias = -0.005;
  }

  createFloor() {
    var planeGeometry = new THREE.PlaneBufferGeometry(1000, 500);
    planeGeometry.rotateX(-Math.PI / 2);

    var planeMaterial = new THREE.ShadowMaterial();
    planeMaterial.opacity = 0.2;

    this.floor = new THREE.Mesh(planeGeometry, planeMaterial);

    this.floor.position.y = -500; //-100
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);
  }

  createDog() {
    this.windTime = 0;
    this.bodyInitPositions = [];
    this.threegroup = new THREE.Group();

    this.yellowMat = new THREE.MeshPhongMaterial({
      color: 0xfdd276,
      flatShading: true,
      clipShadows: true
    });

    this.redMat = new THREE.MeshPhongMaterial({
      color: 0xad3525,
      flatShading: true,
      clipShadows: true
    });

    this.pinkMat = new THREE.MeshPhongMaterial({
      color: 0xe55d2b,
      flatShading: true,
      clipShadows: true
    });

    this.whiteMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      flatShading: true,
      clipShadows: true
    });

    this.purpleMat = new THREE.MeshPhongMaterial({
      color: 0x451954,
      flatShading: true,
      clipShadows: true
    });

    this.greyMat = new THREE.MeshPhongMaterial({
      color: 0x653f4c,
      flatShading: true,
      clipShadows: true
    });

    this.blackMat = new THREE.MeshPhongMaterial({
      color: 0x302925,
      flatShading: true,
      clipShadows: true
    });

    var bodyGeom = new THREE.CylinderGeometry(30, 80, 140, 4);
    var faceGeom = new THREE.BoxGeometry(80, 80, 60);
    var mustacheGeom = new THREE.BoxGeometry(30, 2, 1);
    mustacheGeom.applyMatrix(new THREE.Matrix4().makeTranslation(15, 0, 0));

    var earGeom = new THREE.BoxGeometry(30, 70, 20);
    var noseGeom = new THREE.BoxGeometry(20, 20, 20);
    var eyeGeom = new THREE.BoxGeometry(16, 16, 5);
    var irisGeom = new THREE.BoxGeometry(10, 10, 4);
    var mouthGeom = new THREE.BoxGeometry(20, 20, 10);
    var smileGeom = new THREE.TorusGeometry(12, 4, 2, 10, Math.PI);
    var lipsGeom = new THREE.BoxGeometry(40, 15, 20);
    var snoutGeom = new THREE.BoxGeometry(25, 81, 20);
    var snoutTwoGeom = new THREE.BoxGeometry(82, 40, 40);
    var kneeGeom = new THREE.BoxGeometry(25, 80, 80);
    kneeGeom.applyMatrix(new THREE.Matrix4().makeTranslation(0, 50, 0));
    var footGeom = new THREE.BoxGeometry(40, 20, 20);

    // body
    this.body = new THREE.Mesh(bodyGeom, this.blackMat);
    this.body.position.z = -60;
    this.body.position.y = -30;
    this.bodyVertices = [0, 1, 2, 3]; //Select vertices to move on the body geometry

    for (var i = 0; i < this.bodyVertices.length; i++) {
      var tv = this.body.geometry.vertices[this.bodyVertices[i]];
      tv.setZ = 70;
      this.bodyInitPositions.push({
        x: tv.getComponent(0),
        y: tv.getComponent(1),
        z: tv.getComponent(2)
      });
    }

    // knee
    this.leftKnee = new THREE.Mesh(kneeGeom, this.blackMat);
    this.leftKnee.position.x = 65;
    this.leftKnee.position.z = -20;
    this.leftKnee.position.y = -110;
    this.leftKnee.rotation.z = -0.3;

    this.rightKnee = new THREE.Mesh(kneeGeom, this.blackMat);
    this.rightKnee.position.x = -65;
    this.rightKnee.position.z = -20;
    this.rightKnee.position.y = -110;
    this.rightKnee.rotation.z = 0.3;

    // feet
    this.backLeftFoot = new THREE.Mesh(footGeom, this.blackMat);
    this.backLeftFoot.position.z = 30;
    this.backLeftFoot.position.x = 75;
    this.backLeftFoot.position.y = -90;

    this.backRightFoot = new THREE.Mesh(footGeom, this.blackMat);
    this.backRightFoot.position.z = 30;
    this.backRightFoot.position.x = -75;
    this.backRightFoot.position.y = -90;

    this.frontRightFoot = new THREE.Mesh(footGeom, this.whiteMat);
    this.frontRightFoot.position.z = 40;
    this.frontRightFoot.position.x = -22;
    this.frontRightFoot.position.y = -90;

    this.frontLeftFoot = new THREE.Mesh(footGeom, this.whiteMat);
    this.frontLeftFoot.position.z = 40;
    this.frontLeftFoot.position.x = 22;
    this.frontLeftFoot.position.y = -90;

    // face
    this.face = new THREE.Mesh(faceGeom, this.blackMat);
    this.face.position.z = 95; //135

    // eyes
    this.leftEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.leftEye.position.x = 33;
    this.leftEye.position.z = 125;
    this.leftEye.position.y = 22;

    this.rightEye = new THREE.Mesh(eyeGeom, this.whiteMat);
    this.rightEye.position.x = -33;
    this.rightEye.position.z = 125;
    this.rightEye.position.y = 22;

    // iris
    this.leftIris = new THREE.Mesh(irisGeom, this.purpleMat);
    this.leftIris.position.x = 33;
    this.leftIris.position.z = 127;
    this.leftIris.position.y = 25;

    this.rightIris = new THREE.Mesh(irisGeom, this.purpleMat);
    this.rightIris.position.x = -33;
    this.rightIris.position.z = 127;
    this.rightIris.position.y = 25;

    // mouth
    this.mouth = new THREE.Mesh(mouthGeom, this.blackMat);
    this.mouth.position.z = 141; //171
    this.mouth.position.y = -35;
    this.mouth.scale.set(0.5, 0.5, 1);

    // smile
    this.smile = new THREE.Mesh(smileGeom, this.greyMat);
    this.smile.position.z = 143; //173
    this.smile.position.y = -15;
    this.smile.rotation.z = -Math.PI;

    // lips
    this.lips = new THREE.Mesh(lipsGeom, this.whiteMat);
    this.lips.position.z = 135; //165
    this.lips.position.y = -45;

    // ear
    this.rightEar = new THREE.Mesh(earGeom, this.blackMat);
    this.rightEar.position.x = -30;
    this.rightEar.position.y = 50;
    this.rightEar.position.z = 75; //105

    this.leftEar = new THREE.Mesh(earGeom, this.blackMat);
    this.leftEar.position.x = 30;
    this.leftEar.position.y = 50;
    this.leftEar.position.z = 75; //105

    // nose
    this.nose = new THREE.Mesh(noseGeom, this.greyMat);
    this.nose.position.z = 140; //170
    this.nose.position.y = -10;

    // snout
    this.snout = new THREE.Mesh(snoutGeom, this.whiteMat);
    this.snout.position.z = 126;
    this.snout.position.y = 0;

    this.snoutTwo = new THREE.Mesh(snoutTwoGeom, this.whiteMat);
    this.snoutTwo.position.z = 126;
    this.snoutTwo.position.y = -21;

    // head
    this.head = new THREE.Group();
    this.head.add(this.face);
    this.head.add(this.rightEar);
    this.head.add(this.leftEar);
    this.head.add(this.nose);
    this.head.add(this.leftEye);
    this.head.add(this.rightEye);
    this.head.add(this.leftIris);
    this.head.add(this.rightIris);
    this.head.add(this.mouth);
    this.head.add(this.smile);
    this.head.add(this.lips);
    this.head.add(this.snout);
    this.head.add(this.snoutTwo);

    this.head.position.y = 60;

    this.threegroup.add(this.body);
    this.threegroup.add(this.head);
    this.threegroup.add(this.leftKnee);
    this.threegroup.add(this.rightKnee);
    this.threegroup.add(this.backLeftFoot);
    this.threegroup.add(this.backRightFoot);
    this.threegroup.add(this.frontRightFoot);
    this.threegroup.add(this.frontLeftFoot);

    this.threegroup.traverse(function(object) {
      if (object instanceof THREE.Mesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });

    this.threegroup.position.y = -400;
    this.scene.add(this.threegroup);
  }

  updateBody(speed) {
    this.head.rotation.y += (this.tHeagRotY - this.head.rotation.y) / speed;
    this.head.rotation.x += (this.tHeadRotX - this.head.rotation.x) / speed;
    this.head.position.x += (this.tHeadPosX - this.head.position.x) / speed;
    this.head.position.y += (this.tHeadPosY - this.head.position.y) / speed;
    this.head.position.z += (this.tHeadPosZ - this.head.position.z) / speed;

    this.rightKnee.rotation.z +=
      (this.tRightKneeRotZ - this.rightKnee.rotation.z) / speed;
    this.leftKnee.rotation.z +=
      (this.tLeftKneeRotZ - this.leftKnee.rotation.z) / speed;

    this.lips.position.x += (this.tLipsPosX - this.lips.position.x) / speed;
    this.lips.position.y += (this.tLipsPosY - this.lips.position.y) / speed;
    this.smile.position.x += (this.tSmilePosX - this.smile.position.x) / speed;
    this.mouth.position.z += (this.tMouthPosZ - this.mouth.position.z) / speed;
    this.smile.position.z += (this.tSmilePosZ - this.smile.position.z) / speed;
    this.smile.position.y += (this.tSmilePosY - this.smile.position.y) / speed;
    this.smile.rotation.z += (this.tSmileRotZ - this.smile.rotation.z) / speed;
  }

  look(xTarget, yTarget) {
    this.tHeagRotY = this.rule3(xTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    this.tHeadRotX = this.rule3(yTarget, -200, 200, -Math.PI / 4, Math.PI / 4);
    this.tHeadPosX = this.rule3(xTarget, -200, 200, 70, -70);
    this.tHeadPosY = this.rule3(yTarget, -140, 260, 20, 100);
    this.tHeadPosZ = 0;

    this.tLipsPosX = 0;
    this.tLipsPosY = -45;

    this.tSmilePosX = 0;
    this.tMouthPosZ = 144; //174
    this.tSmilePosZ = 143; //173
    this.tSmilePosY = -15;
    this.tSmileRotZ = -Math.PI;

    this.tRightKneeRotZ = this.rule3(
      xTarget,
      -200,
      200,
      0.3 - Math.PI / 8,
      0.3 + Math.PI / 8
    );
    this.tLeftKneeRotZ = this.rule3(
      xTarget,
      -200,
      200,
      -0.3 - Math.PI / 8,
      -0.3 + Math.PI / 8
    );

    this.updateBody(10);

    for (var k = 0; k < this.bodyVertices.length; k++) {
      var tvInit = this.bodyInitPositions[k];
      var tv = this.body.geometry.vertices[this.bodyVertices[k]];
      tv.setX(tvInit.x + this.head.position.x / 2);
    }
    this.body.geometry.verticesNeedUpdate = true;
  }

  loop() {
    this.renderScene();
    var xTarget = this.mousePos.x - this.windowHalfX;
    var yTarget = this.mousePos.y - this.windowHalfY - 50; //150
    this.look(xTarget, yTarget);
    window.requestAnimationFrame(this.loop);
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera);
  }

  rule3(v, vmin, vmax, tmin, tmax) {
    var nv = Math.max(Math.min(v, vmax), vmin);
    var dv = vmax - vmin;
    var pc = (nv - vmin) / dv;
    var dt = tmax - tmin;
    var tv = tmin + pc * dt;
    return tv;
  }

  render() {
    return (
      <div
        className="bgscene"
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default BackgroundScene;
