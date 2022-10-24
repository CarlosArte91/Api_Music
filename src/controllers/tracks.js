const { tracksModel } = require("../models");

/**
 * Obtener todas las canciones
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.json(data);
};

/**
 * Crear una nueva canción
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body } = req;
    const data = await tracksModel.create(body);
    res.json(body);
};

/**
 * Actualizar una canción
 * @param {*} req
 * @param {*} res 
 */
const updateItem = (req, res) => {};

/**
 * Eliminar una canción
 * @param {*} req 
 * @param {*} res 
 */
const deleteteItem = (req, res) => {};

module.exports = {
    getItems,
    createItem,
    updateItem,
    deleteteItem
}