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