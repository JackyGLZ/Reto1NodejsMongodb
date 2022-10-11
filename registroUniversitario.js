//CRUD en Nodejs 
//Autor: Jackeline Gonzalez Lozano - Grupo 39

const express = require(`express`);
const mongoose = require(`mongoose`);
const InscripcionSchema = require("./modelos/Inscripcion.js");

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion con Base de Datos
mongoose.connect("mongodb+srv://jackygl:Admin1510@clusterinmobiliariajack.z5fxbm5.mongodb.net/PortalUniversidadBD?retryWrites=true&w=majority");

//Operaciones CRUD
//Función Obtener
router.get(`/`, (req, res) =>{
    res.send("El inicio de mi API");
})

router.get(`/inscripcion`, (req, res)=>{
        InscripcionSchema.find(function(err,datos){
            if(err){
                console.log("Error leyendo las inscripciones");
            }else{
                res.send(datos);
            }
        })

});

//Función Crear
router.post(`/inscripcion`, (req, res) =>{
    let nuevaInscripcion = new InscripcionSchema({
        idInscripcion: req.body.id,
        TipoDocumento: req.body.Tipo,
        DocumentoIdentificacion: req.body.Documento,
        Nombres: req.body.Nombres,
        Apellidos: req.body.Apellidos,
        Direccion: req.body.Direccion,
        CorreoElectronico: req.body.Correo,
        TelefonoFijo: req.body.Telefono,
        Celular: req.body.Celular,
        LinkComprobanteConsignacion:req.body.Link,
        CodigoICFES:req.body.Codigo,
        FamiliarVinculado: req.body.Familiar,
        EstratoSocial: req.body.Estrato,
        TipoColegioGrado: req.body.TipoColegio
    });

    nuevaInscripcion.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Inscripción almacenada correctamente.")
    })
});

//Función Actualizar
router.put(`/inscripcion-actualizar`, (req, res)=>{
    InscripcionSchema.updateOne({idInscripcion:req.body.id}, {
       
   },

   function (err,info){
       if(err){
           res.json({
               resultado:false,
               msg: 'No se puede actualizar la inscripcion',
               error
           });
       }else{
           res.send('La informacion fue actualizada');
       }
   }
   )

});

//Función Eliminar
router.delete('/inscripcion-eliminar/:id', (req, res ) => {
    let params = req.params;
    InscripcionSchema.deleteOne( {'idInscripcion': params.id}, {
        $set: req.body
    },
    function (error, info){
        if (error){
            res.json({
                resultado:false,
                msg: 'No se puedo actualizar el documento ',
                error
            });
        }else{
            res.json({
                resultado:true,
                msg: 'Se elimnó la información ',
                info: info,
                body: req.params
            });
        }
    })
});


app.use(router);
app.listen(3000, () => {
    console.log("servidor corriendo en el puerto 3000")  
  });
  
  module.exports = router;