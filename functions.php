<?php

//CSS stylesheet
function load_stylesheets() {
    wp_register_style( 'style', get_template_directory_uri() . '/style.css', array(), false, 'all');
    wp_enqueue_style('style');
}
add_action( 'wp_enqueue_scripts', 'load_stylesheets' );

// jQuery
function include_jquery() {
    wp_deregister_script('jquery');
    wp_enqueue_script('jquery', get_template_directory_uri() . '/js/jquery.js', '', 1, true);
    add_action( 'wp_enqueue_scripts', 'jquery' );
}
add_action( 'wp_enqueue_scripts', 'include_jquery' );

// three.js library
function load_threejs(){
    wp_enqueue_script('threejs', get_template_directory_uri() . '/js/three.min.js', '', 1, true);
    wp_enqueue_script('GLTFLoader', get_template_directory_uri() . '/js/loaders/GLTFLoader.js', '', 1, true);
    wp_enqueue_script('OrbitControls', get_template_directory_uri() . '/js/libs/OrbitControls.js', '', 1, true);
    wp_enqueue_script('JSONLoader', get_template_directory_uri() . '/js/loaders/JSONLoader.js', '', 1, true);
}
add_action( 'wp_enqueue_scripts', 'load_threejs');

// 3D mainscene.js
function threejs_scene(){
    wp_register_script('3dmodel_scene', get_template_directory_uri() . '/js/mainscene.js', '', 1, true);
    wp_enqueue_script('3dmodel_scene');
}
add_action( 'wp_enqueue_scripts', 'threejs_scene');

// ScrollMagic
function ScrollMagic(){
    wp_enqueue_script('ScrollMagic_library', get_template_directory_uri() . '/js/ScrollMagic.min.js', '', 1, true);
    wp_enqueue_script('Indicators', get_template_directory_uri() . '/js/debug.addIndicators.min.js', '', 1, true);
}
add_action('wp_enqueue_scripts', 'ScrollMagic');

// script.js
function loadjs(){
    wp_register_script('customJS', get_template_directory_uri() . '/js/script.js', '', 1, true);
    wp_enqueue_script('customJS');
}
add_action( 'wp_enqueue_scripts', 'loadjs' );

?>