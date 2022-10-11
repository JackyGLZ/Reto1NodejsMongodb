const mongoose = require(`mongoose`);

let InscripcionSchema = new mongoose.Schema({
    idInscripcion: Number,
    TipoDocumento: String,
    DocumentoIdentificacion: String,
    Nombres: String,
    Apellidos: String,
    Direccion: String,
    CorreoElectronico: String,
    TelefonoFijo: String,
    Celular: String,
    LinkComprobanteConsignacion: String,
    CodigoICFES: String,
    FamiliarVinculado: String,
    EstratoSocial: String,
    TipoColegioGrado: String,
});

module.exports = mongoose.model(`Inscripcion`, InscripcionSchema,`Inscripciones`);
