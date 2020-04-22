var scene, camera, renderer, mixer;
var controls;
var loader, model;
var width = window.innerWidth;
var height = window.innerHeight;
var clock = new THREE.Clock();
var pscale = 7.5;
var big = 20;
var grande = 70;
var container = $('.container');

// mouse detection movement
// $(document).mousemove(function handler(e) {
//     e = e || window.event;

//     var pageX = e.pageX;
//     var pageY = e.pageY;

//     // IE 8
//     if (pageX === undefined) {
//         pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//     }

//     console.log(pageX, pageY);
// });

// non lo so manco io se mi serve
// var cappellino = new THREE.Object3D();
// var manager = new THREE.LoadingManager();
// manager.onLoad = function () {
//     scene.add(cappellino);
// }
// var loader = new THREE.JSONLoader(manager);

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, width / height, 10, 500);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        preserveDrawingBuffer: true
    });
    // renderer.setClearColor( 0x00ff00, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize($(container).width(), $(container).height());
    var canvas = renderer.domElement;


    // obj follows mouse
    // var raycaster = new THREE.Raycaster();
    // var mouse = new THREE.Vector2();
    // var pointOfIntersection = new THREE.Vector3();
    // canvas.addEventListener("mousemove", onMouseMove, false);
    // var plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), -10);


    // CONTROLLO DELLA CAMERA
    controls = new THREE.OrbitControls(camera, canvas);
    controls.minDistance = 200;
    controls.maxDistance = 200;
    controls.enablePan = true;
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.addEventListener('change', render);

    camera.position.set(170,40,40);
    camera.lookAt(scene.position);

    // LUCI
    h1 = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    h1.position.set(-300,200, -3000);
    scene.add(h1);
    
    var ambientLight = new THREE.AmbientLight(0xffffff, 2);
    scene.add(ambientLight);

    var d1 = new THREE.DirectionalLight (0xffffff, 0.4);
    d1.position.set(0, 1000, 0);
    scene.add(d1);

    // LOADER
    // var loader = new THREE.GLTFLoader();
    // loader.load( 'wp-content/themes/Good\ ol%27\ theme/js/GLTF/fishA.gltf', function ( gltf ) {
        
    //     mixer = new THREE.AnimationMixer( gltf.scene );
    //     primo_pesce = gltf.scene;
    //     var action = mixer.clipAction( gltf.animations[ 0 ] );
    //     // action.play();

        // primo_pesce.traverse((node) => {
        //     if (!node.isMesh) return;
        //     node.material.wireframe = true;
        // });


    //     // Una soluzione un pelo più elaborata
    //     // primo_pesce.traverse((node) => {
    //     //     if (!node.isMesh) return;
    //     //     node.material.wireframe = true;
    //     //     node.material = new THREE.MeshBasicMaterial({
    //     //         color: 0x00ff00,
    //     //         wireframe: true
    //     //     });
    //     // });
          

    //     scene.add( primo_pesce );

    //     primo_pesce.scale.set(pscale, pscale, pscale);
    //     gltf.scene.position.set(0, 10, 0);
    // });

    var hat_loader = new THREE.GLTFLoader();
    hat_loader.load('wp-content/themes/GoodTheme/js/GLTF/cappellino.gltf', function ( gltf ) {
        hat = gltf.scene;
        scene.add( hat );
        gltf.scene.position.set(-0, 0, 10);
        hat.scale.set(pscale, pscale, pscale);
        // hat.rotation.y = Math.PI / 2;


        hat.traverse((node) => {
            if (!node.isMesh) return;
            node.material.wireframe = true;
            node.material = new THREE.MeshBasicMaterial({
                color: 0x001930,
                wireframe: true
            });
        });
    })

    // function onMouseMove(event){
    //     mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    //     mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    //     raycaster.setFromCamera(mouse, camera);
    //     raycaster.ray.intersectPlane(plane, pointOfIntersection);
    //     secondo_pesce.lookAt(pointOfIntersection);
    // }
    
    $(".container").append(canvas);
}

function render() {
}

function animate() {
    requestAnimationFrame(animate);
    render();
    renderer.render(scene, camera);
    controls.update(); // keep inertia after letting go

    // animation playing
    var delta = clock.getDelta();
    if ( mixer ) mixer.update( delta );
}

init();
animate();

$(window).resize(function () {
    // camera.aspect = window.innerWidth / window.innerHeight;
    // renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = $(container).width()/ $(container).height();
    renderer.setSize($(container).width(), $(container).height());
    camera.updateProjectionMatrix();
    // console.log('bnnn')
    // renderer.setSize($(container).width(), $(container).height());
});