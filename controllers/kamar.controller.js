const kamarModel = require(`../models/index`).kamar
const tipekamarModel = require('../models/index').tipe_kamar
const Op = require(`sequelize`).Op
const { path } = require(`../models/tipe_kamar`)
const fs = require(`fs`)
const md5 = require(`md5`)
const kamar = require('../models/kamar')

exports.getAllkamar = async (request, response) => {
    let kamars = await kamarModel.findAll()
    return response.json({
        success: true,
        data: kamars,
        message: `All kamars have been loaded`
    })
}

exports.findkamar = async (request, response) => {
    let nomor_kamar = request.body.nomor_kamar
    let s = await kamarModel.findAll({
        where: {
            [Op.or]: [
                { nomor_kamar: { [Op.substring]: nomor_kamar } }
            ]
        }
    })
    return response.json({
        success: true,
        data: s,
        message: `All kamars have been loaded`
    })
}

exports.addkamar = async (request, response) => {
    try {
        let newkamar = {
            nomor_kamar: request.body.nomor_kamar,
            id_tipe_kamar: request.body.id_tipe_kamar
        }

        let cek = await kamarModel.findOne({
            where: {
                nomor_kamar:newkamar.nomor_kamar
            }
        })
        if (cek != null){
            return response.json({
                message:  "wleee gak bisa"
            })
        }

        let cekTipe = await tipekamarModel.findOne({
            where: {
                id:newkamar.id_tipe_kamar
            }
        })

        if(newkamar.id_tipe_kamar==cekTipe.id){
            await kamarModel.create(newkamar)
            .then(result => {
                return response.json({
                    success: true,
                    data: result,
                    message: `New kamar has been inserted`
                })
            })
        } 
    }
    catch (error) {
        return response.json({
            success: false,
            message: error.message
        })
    }
}


exports.updatekamar = (request, response) => {
    let datakamar = {
        id_kamar: request.body.id_kamar,
        nomor_kamar: request.body.nomor_kamar,
        id_tipe_kamar: request.body.id_tipe_kamar,
    }
    let idkamar = request.params.id
    kamarModel.update(datakamar, { where: { id: idkamar } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data kamar has been updated`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.deletekamar = (request, response) => {
    let idkamar = request.params.id
    kamarModel.destroy({ where: { id: idkamar } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data kamar has been delete `
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}