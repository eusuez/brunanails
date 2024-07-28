'use strict'

//export default app;
import React, {useState} from 'react';
import{View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')


    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "light";
    }

    console.log('current class name: '+ className);
});

const styles = StyleSheet.create({
    
})
