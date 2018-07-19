<?php

$app->on('admin.init', function() {
    $this->helper('admin')->addAssets('customfields:assets/component.js');
    $this->helper('admin')->addAssets('customfields:assets/field-cloudinary.tag');
});