(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(t,i,e){t.exports=e(22)},16:function(t,i,e){},18:function(t,i,e){},20:function(t,i,e){},22:function(t,i,e){"use strict";e.r(i);var s=e(1),h=e.n(s),o=e(9),a=e.n(o),n=(e(16),e(3)),r=e(4),d=e(6),c=e(5),l=e(7),w=e(2),m=e(0),p=(e(18),function(t){function i(t){var e;return Object(n.a)(this,i),(e=Object(d.a)(this,Object(c.a)(i).call(this,t))).createLights=e.createLights.bind(Object(w.a)(Object(w.a)(e))),e.createFloor=e.createFloor.bind(Object(w.a)(Object(w.a)(e))),e.createDog=e.createDog.bind(Object(w.a)(Object(w.a)(e))),e.loop=e.loop.bind(Object(w.a)(Object(w.a)(e))),e.handleResize=e.handleResize.bind(Object(w.a)(Object(w.a)(e))),e.handleTouchStart=e.handleTouchStart.bind(Object(w.a)(Object(w.a)(e))),e.handleTouchEnd=e.handleTouchEnd.bind(Object(w.a)(Object(w.a)(e))),e.handleTouchMove=e.handleTouchMove.bind(Object(w.a)(Object(w.a)(e))),e.handleMouseMove=e.handleMouseMove.bind(Object(w.a)(Object(w.a)(e))),e.look=e.look.bind(Object(w.a)(Object(w.a)(e))),e.updateBody=e.updateBody.bind(Object(w.a)(Object(w.a)(e))),e.renderScene=e.renderScene.bind(Object(w.a)(Object(w.a)(e))),e.rule3=e.rule3.bind(Object(w.a)(Object(w.a)(e))),e}return Object(l.a)(i,t),Object(r.a)(i,[{key:"componentDidMount",value:function(){var t;this.scene=void 0,this.camera=void 0,this.renderer=void 0,this.mousePos={x:0,y:0},this.threegroup=void 0,this.width=void 0,this.height=void 0,this.shadowLight=void 0,this.backLight=void 0,this.light=void 0,this.floor=void 0,this.windowHalfX=void 0,this.windowHalfY=void 0,this.scene=new m.k,this.height=this.mount.clientHeight,this.width=this.mount.clientWidth,t=this.width/this.height,this.camera=new m.i(60,t,1,2e3),this.camera.position.z=1200,this.camera.position.y=-400,this.camera.lookAt(new m.n(0,0,0)),this.renderer=new m.o({alpha:!0,antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.mount.appendChild(this.renderer.domElement),this.windowHalfX=this.width/2,this.windowHalfY=this.height/2,this.mousePos={x:this.windowHalfX,y:this.windowHalfY};var i=Math.tan(Math.PI/180*this.camera.fov/2);this.tanFOV=i;var e=window.innerHeight;this.windowHeight=e,window.addEventListener("resize",this.handleResize),document.addEventListener("mousemove",this.handleMouseMove,!1),document.addEventListener("touchstart",this.handleTouchStart,!1),document.addEventListener("touchend",this.handleTouchEnd,!1),document.addEventListener("touchmove",this.handleTouchMove,!1),this.createLights(),this.createFloor(),this.createDog(),this.loop()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("touchstart",this.handleTouchStart),document.removeEventListener("touchend",this.handleTouchEnd),document.removeEventListener("touchmove",this.handleTouchMove)}},{key:"handleResize",value:function(){this.height=window.innerHeight,this.width=window.innerWidth,this.windowHalfX=this.width/2,this.windowHalfY=this.height/2,this.camera.aspect=this.width/this.height,this.camera.fov=360/Math.PI*Math.atan(this.tanFOV*(this.height/this.windowHeight)),this.camera.updateProjectionMatrix(),this.camera.lookAt(this.scene.position),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.render(this.scene,this.camera)}},{key:"handleMouseMove",value:function(t){this.mousePos={x:t.clientX,y:t.clientY}}},{key:"handleTouchStart",value:function(t){t.touches.length>1&&(t.preventDefault(),this.mousePos={x:t.touches[0].pageX,y:t.touches[0].pageY})}},{key:"handleTouchEnd",value:function(t){this.mousePos={x:this.windowHalfX,y:this.windowHalfY}}},{key:"handleTouchMove",value:function(t){1===t.touches.length&&(t.preventDefault(),this.mousePos={x:t.touches[0].pageX,y:t.touches[0].pageY})}},{key:"createLights",value:function(){this.light=new m.e(16777215,16777215,.5),this.shadowLight=new m.c(16777215,.7),this.shadowLight.position.set(200,200,200),this.shadowLight.castShadow=!0,this.backLight=new m.c(16777215,.3),this.backLight.position.set(-100,200,50),this.backLight.castShadow=!0,this.scene.add(this.light),this.scene.add(this.shadowLight),this.scene.add(this.backLight),this.shadowLight.shadow.mapSize.width=512,this.shadowLight.shadow.mapSize.height=512,this.shadowLight.shadow.camera.near=100,this.shadowLight.shadow.camera.far=1500,this.shadowLight.shadow.camera.fov=40,this.shadowLight.shadow.camera.left=-this.width/2,this.shadowLight.shadow.camera.right=this.width/2,this.shadowLight.shadow.camera.top=-this.height/2,this.shadowLight.shadow.camera.bottom=this.height/2,this.shadowLight.shadow.bias=-.005,this.backLight.shadow.mapSize.width=512,this.backLight.shadow.mapSize.height=512,this.backLight.shadow.camera.near=100,this.backLight.shadow.camera.far=1500,this.backLight.shadow.camera.fov=40,this.backLight.shadow.camera.left=-this.width/2,this.backLight.shadow.camera.right=this.width/2,this.backLight.shadow.camera.top=-this.height/2,this.backLight.shadow.camera.bottom=this.height/2,this.backLight.shadow.bias=-.005}},{key:"createFloor",value:function(){var t=new m.j(1e3,500);t.rotateX(-Math.PI/2);var i=new m.l;i.opacity=.2,this.floor=new m.g(t,i),this.floor.position.y=-500,this.floor.receiveShadow=!0,this.scene.add(this.floor)}},{key:"createDog",value:function(){this.windTime=0,this.bodyInitPositions=[],this.threegroup=new m.d,this.yellowMat=new m.h({color:16634486,flatShading:!0,clipShadows:!0}),this.redMat=new m.h({color:11351333,flatShading:!0,clipShadows:!0}),this.pinkMat=new m.h({color:15031595,flatShading:!0,clipShadows:!0}),this.whiteMat=new m.h({color:16777215,flatShading:!0,clipShadows:!0}),this.purpleMat=new m.h({color:4528468,flatShading:!0,clipShadows:!0}),this.greyMat=new m.h({color:6635340,flatShading:!0,clipShadows:!0}),this.blackMat=new m.h({color:3156261,flatShading:!0,clipShadows:!0});var t=new m.b(30,80,140,4),i=new m.a(80,80,60),e=new m.a(30,70,20),s=new m.a(20,20,20),h=new m.a(16,16,5),o=new m.a(10,10,4),a=new m.a(20,20,10),n=new m.m(12,4,2,10,Math.PI),r=new m.a(40,15,20),d=new m.a(25,81,20),c=new m.a(82,40,40),l=new m.a(25,80,80);l.applyMatrix((new m.f).makeTranslation(0,50,0));var w=new m.a(40,20,20);this.body=new m.g(t,this.blackMat),this.body.position.z=-60,this.body.position.y=-30,this.bodyVertices=[0,1,2,3];for(var p=0;p<this.bodyVertices.length;p++){var g=this.body.geometry.vertices[this.bodyVertices[p]];g.setZ=70,this.bodyInitPositions.push({x:g.getComponent(0),y:g.getComponent(1),z:g.getComponent(2)})}this.leftKnee=new m.g(l,this.blackMat),this.leftKnee.position.x=65,this.leftKnee.position.z=-20,this.leftKnee.position.y=-110,this.leftKnee.rotation.z=-.3,this.rightKnee=new m.g(l,this.blackMat),this.rightKnee.position.x=-65,this.rightKnee.position.z=-20,this.rightKnee.position.y=-110,this.rightKnee.rotation.z=.3,this.backLeftFoot=new m.g(w,this.blackMat),this.backLeftFoot.position.z=30,this.backLeftFoot.position.x=75,this.backLeftFoot.position.y=-90,this.backRightFoot=new m.g(w,this.blackMat),this.backRightFoot.position.z=30,this.backRightFoot.position.x=-75,this.backRightFoot.position.y=-90,this.frontRightFoot=new m.g(w,this.whiteMat),this.frontRightFoot.position.z=40,this.frontRightFoot.position.x=-22,this.frontRightFoot.position.y=-90,this.frontLeftFoot=new m.g(w,this.whiteMat),this.frontLeftFoot.position.z=40,this.frontLeftFoot.position.x=22,this.frontLeftFoot.position.y=-90,this.face=new m.g(i,this.blackMat),this.face.position.z=95,this.leftEye=new m.g(h,this.whiteMat),this.leftEye.position.x=33,this.leftEye.position.z=125,this.leftEye.position.y=22,this.rightEye=new m.g(h,this.whiteMat),this.rightEye.position.x=-33,this.rightEye.position.z=125,this.rightEye.position.y=22,this.leftIris=new m.g(o,this.purpleMat),this.leftIris.position.x=33,this.leftIris.position.z=127,this.leftIris.position.y=25,this.rightIris=new m.g(o,this.purpleMat),this.rightIris.position.x=-33,this.rightIris.position.z=127,this.rightIris.position.y=25,this.mouth=new m.g(a,this.blackMat),this.mouth.position.z=141,this.mouth.position.y=-35,this.mouth.scale.set(.5,.5,1),this.smile=new m.g(n,this.greyMat),this.smile.position.z=143,this.smile.position.y=-15,this.smile.rotation.z=-Math.PI,this.lips=new m.g(r,this.whiteMat),this.lips.position.z=135,this.lips.position.y=-45,this.rightEar=new m.g(e,this.blackMat),this.rightEar.position.x=-30,this.rightEar.position.y=50,this.rightEar.position.z=75,this.leftEar=new m.g(e,this.blackMat),this.leftEar.position.x=30,this.leftEar.position.y=50,this.leftEar.position.z=75,this.nose=new m.g(s,this.greyMat),this.nose.position.z=140,this.nose.position.y=-10,this.snout=new m.g(d,this.whiteMat),this.snout.position.z=126,this.snout.position.y=0,this.snoutTwo=new m.g(c,this.whiteMat),this.snoutTwo.position.z=126,this.snoutTwo.position.y=-21,this.head=new m.d,this.head.add(this.face),this.head.add(this.rightEar),this.head.add(this.leftEar),this.head.add(this.nose),this.head.add(this.leftEye),this.head.add(this.rightEye),this.head.add(this.leftIris),this.head.add(this.rightIris),this.head.add(this.mouth),this.head.add(this.smile),this.head.add(this.lips),this.head.add(this.snout),this.head.add(this.snoutTwo),this.head.position.y=60,this.threegroup.add(this.body),this.threegroup.add(this.head),this.threegroup.add(this.leftKnee),this.threegroup.add(this.rightKnee),this.threegroup.add(this.backLeftFoot),this.threegroup.add(this.backRightFoot),this.threegroup.add(this.frontRightFoot),this.threegroup.add(this.frontLeftFoot),this.threegroup.traverse(function(t){t instanceof m.g&&(t.castShadow=!0,t.receiveShadow=!0)}),this.threegroup.position.y=-400,this.scene.add(this.threegroup)}},{key:"updateBody",value:function(t){this.head.rotation.y+=(this.tHeagRotY-this.head.rotation.y)/t,this.head.rotation.x+=(this.tHeadRotX-this.head.rotation.x)/t,this.head.position.x+=(this.tHeadPosX-this.head.position.x)/t,this.head.position.y+=(this.tHeadPosY-this.head.position.y)/t,this.head.position.z+=(this.tHeadPosZ-this.head.position.z)/t,this.rightKnee.rotation.z+=(this.tRightKneeRotZ-this.rightKnee.rotation.z)/t,this.leftKnee.rotation.z+=(this.tLeftKneeRotZ-this.leftKnee.rotation.z)/t,this.lips.position.x+=(this.tLipsPosX-this.lips.position.x)/t,this.lips.position.y+=(this.tLipsPosY-this.lips.position.y)/t,this.smile.position.x+=(this.tSmilePosX-this.smile.position.x)/t,this.mouth.position.z+=(this.tMouthPosZ-this.mouth.position.z)/t,this.smile.position.z+=(this.tSmilePosZ-this.smile.position.z)/t,this.smile.position.y+=(this.tSmilePosY-this.smile.position.y)/t,this.smile.rotation.z+=(this.tSmileRotZ-this.smile.rotation.z)/t}},{key:"look",value:function(t,i){this.tHeagRotY=this.rule3(t,-200,200,-Math.PI/4,Math.PI/4),this.tHeadRotX=this.rule3(i,-200,200,-Math.PI/4,Math.PI/4),this.tHeadPosX=this.rule3(t,-200,200,70,-70),this.tHeadPosY=this.rule3(i,-140,260,20,100),this.tHeadPosZ=0,this.tLipsPosX=0,this.tLipsPosY=-45,this.tSmilePosX=0,this.tMouthPosZ=144,this.tSmilePosZ=143,this.tSmilePosY=-15,this.tSmileRotZ=-Math.PI,this.tRightKneeRotZ=this.rule3(t,-200,200,.3-Math.PI/8,.3+Math.PI/8),this.tLeftKneeRotZ=this.rule3(t,-200,200,-.3-Math.PI/8,Math.PI/8-.3),this.updateBody(10);for(var e=0;e<this.bodyVertices.length;e++){var s=this.bodyInitPositions[e];this.body.geometry.vertices[this.bodyVertices[e]].setX(s.x+this.head.position.x/2)}this.body.geometry.verticesNeedUpdate=!0}},{key:"loop",value:function(){this.renderScene();var t=this.mousePos.x-this.windowHalfX,i=this.mousePos.y-this.windowHalfY-50;this.look(t,i),window.requestAnimationFrame(this.loop)}},{key:"renderScene",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"rule3",value:function(t,i,e,s,h){return s+(Math.max(Math.min(t,e),i)-i)/(e-i)*(h-s)}},{key:"render",value:function(){var t=this;return h.a.createElement("div",{className:"bgscene",ref:function(i){t.mount=i}})}}]),i}(s.Component)),g=(e(20),function(t){function i(){return Object(n.a)(this,i),Object(d.a)(this,Object(c.a)(i).apply(this,arguments))}return Object(l.a)(i,t),Object(r.a)(i,[{key:"render",value:function(){return h.a.createElement("section",{className:"hero"},h.a.createElement(p,null),h.a.createElement("div",{className:"hero-body"},h.a.createElement("div",{className:"container"},h.a.createElement("p",{className:"title"},"Hello! I'm Biko Allen."),h.a.createElement("p",{className:"subtitle"},"A full-stack web developer who loves DevOps and architecting cloud infrastructure."," ",h.a.createElement("a",{href:"https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2018-11-02&ci=AWS00334004"},h.a.createElement("strong",null,"AWS Certified Cloud Practitioner"))," ","and"," ",h.a.createElement("a",{href:"https://www.certmetrics.com/amazon/public/badge.aspx?i=1&t=c&d=2018-11-15&ci=AWS00334004"},h.a.createElement("strong",null,"AWS Certified Solutions Architect Associate"))," ","who is studying for addiitonal certifications and learning Kubernetes and Golang. Aside from work, I enjoy photography, basketball, traveling, technology, video games and 3D animation."),h.a.createElement("p",null,h.a.createElement("a",{href:"https://github.com/kobi1021"},h.a.createElement("span",{className:"icon is-medium"},h.a.createElement("i",{className:"fab fa-lg fa-github"}))),h.a.createElement("a",{href:"https://www.linkedin.com/in/bikoallen/"},h.a.createElement("span",{className:"icon is-medium"},h.a.createElement("i",{className:"fab fa-lg fa-linkedin"}))),h.a.createElement("a",{href:"https://codepen.io/kobi1021/"},h.a.createElement("span",{className:"icon is-medium"},h.a.createElement("i",{className:"fab fa-lg fa-codepen"}))),h.a.createElement("a",{href:"https://keybase.io/kobi1021"},h.a.createElement("span",{className:"icon is-keybase"},h.a.createElement("i",{className:"fab fa-lg fa-keybase"}))),h.a.createElement("a",{href:"https://www.instagram.com/kobi1021/"},h.a.createElement("span",{className:"icon is-medium"},h.a.createElement("i",{className:"fab fa-lg fa-instagram"}))),h.a.createElement("a",{href:"https://twitter.com/kobi1021"},h.a.createElement("span",{className:"icon is-medium"},h.a.createElement("i",{className:"fab fa-lg fa-twitter"}))),h.a.createElement("a",{href:"https://www.facebook.com/biko.allen"},h.a.createElement("span",{className:"icon is-medium"},h.a.createElement("i",{className:"fab fa-lg fa-facebook"})))))))}}]),i}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=e(10);e.n(u).a.load({google:{families:["Montserrat:300,400,500,600,700","Nunito:300,400,500,600,700","sans-serif"]}}),a.a.render(h.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.141a08f8.chunk.js.map