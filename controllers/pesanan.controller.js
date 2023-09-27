const pesananModel = require(`../models/index`).pemesanan
const Op = require(`sequelize`).Op

exports.getAllpesanan = async (request, response) => {
    let pesanans = await pesananModel.findAll()
    return response.json({
        success: true,
        data: pesanans,
        message: `All pesanans have been loaded`
    })
}

exports.findpesanan = async (request, response) => {
    let nama_pemesanan = request.body.nama_pemesanan
    let s = await pesananModel.findAll({
        where: {
            [Op.or]: [
                { nama_pemesanan: { [Op.substring]: nama_pemesanan } }
            ]
        }
    })
    return response.json({
        success: true,
        data: s,
        message: `All pesanans have been loaded`
    })
}

exports.addpesanan = (request, response) => {
    var random = Math.random() * 100;

    let newpesanan = {
        nomor_pemesanan: random,
        nama_pemesanan: request.body.nama_pemesanan,
        email_pemesanan: request.body.email_pemesanan,
        tgl_pemesanan: request.body.tgl_pemesanan,
        tgl_check_in: request.body.tgl_check_in,
        tgl_check_out: request.body.tgl_check_out,
        nama_tamu: request.body.nama_tamu,
        jumlah_kamar: request.body.jumlah_kamar,
        id_tipe_kamar: request.body.id_tipe_kamar,
        status_pemesanan: request.body.status_pemesanan,
        id_user: request.body.id_user
    }

    pesananModel.create(newpesanan)
        .then(result => {
            return response.json({
                success: true,
                data: result,
                message: `New pesanan has been inserted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.updatepesanan = (request, response) => {
    let datapesanan = {
        nomor_pemesanan: request.body.nomor_pemesanan,
        nama_pemesanan: request.body.nama_pemesanan,
        email_pemesanan: request.body.email_pemesanan,
        tgl_pemesanan: request.body.tgl_pemesanan,
        tgl_check_in: request.body.tgl_check_in,
        tgl_check_out: request.body.tgl_check_out,
        nama_tamu: request.body.nama_tamu,
        jumlah_kamar: request.body.jumlah_kamar,
        id_tipe_kamar: request.body.id_tipe_kamar,
        status_pemesanan: request.body.status_pemesanan,
        id_user: request.body.id_user
    }
    let idpesanan = request.params.id
    pesananModel.update(datapesanan, { where: { id: idpesanan } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data pesanan has been updated`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}

exports.deletepesanan = (request, response) => {
    let idpesanan = request.params.id
    pesananModel.destroy({ where: { id: idpesanan } })
        .then(result => {
            return response.json({
                success: true,
                message: `Data pesanan has been deleted`
            })
        })
        .catch(error => {
            return response.json({
                success: false,
                message: error.message
            })
        })
}