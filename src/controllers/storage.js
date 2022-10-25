/**
 * Cargar un archivo
 * @param {*} req 
 * @param {*} res 
 */
const uploadFiles = (req, res) => {
    const { file } = req;
    res.json(file);
};

module.exports = {
    uploadFiles
}