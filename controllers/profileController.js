var express = require('express');

exports.getProfile = async (req, res) => {
    res.send({
        nama: 'Reka Alamsyah',
        email: 'rekaas@gmail.com',
        twitter: 'ascxxx'
    })
}