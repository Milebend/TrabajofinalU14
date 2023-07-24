const express = require('express')
const conexion = require('../database/db')

exports.consultar = (req,res) => {
    conexion.query('select * from doctores',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla doctor: "+ error)
            return
        }
        //res.send(consulta)
        res.render('indexf',{consulta1:consulta})
    })
}

exports.save = (req,res) => {
    const cedula = req.body.ceduladoc
    const nombre = req.body.name1
    const apellido = req.body.lastnamed
    const especialidad = req.body.especiald
    const consultorio = req.body.consul
    const correo = req.body.email
    var comando = "insert into doctores (cedula, nombre, apellido, especialidad,consultorio,correo) values ("
    comando += cedula+", '"+nombre+"','"+apellido+"','"+especialidad+"', '"+consultorio+"', '"+correo+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/indexf')
        }
    })
}


// --------------------------------API--------------------------------------

exports.api_consultatodos = (req,res) => {
    conexion.query('select * from doctores',(error, consulta) => {
        if(error){
            console.log("error consultando la tabla doctores: "+ error)
            return
        }
        res.send(consulta)
    })
}


exports.api_agregar = (req,res) => {
    const cedula = req.query.ceduladoc
    const nombre = req.query.name1
    const apellido = req.query.lastnamed
    const especialidad = req.query.especiald
    const consultorio = req.query.consul
    const correo = req.query.email
    //console.log(req.body, nombre, edad, genero, email)
    var comando = "insert into doctores (cedula, nombre, apellido, especialidad,consultorio,correo) values ("
    comando += cedula+", '"+nombre+ "','" +apellido+"','" +especialidad+"', '" +consultorio+"', '"+correo+"')"
    console.log(comando)
    conexion.query(comando, (error, resultado) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro agregado correctamente')
        }
    })
}



// -------------------------------- PACIENTES ---------------------------------//


exports.consultar1 = (req,res) => { // paciente
    conexion.query('select * from pacientes',(error, search) => {
        if(error){
            console.log("error consultando la tabla pacientes: "+ error)
            return
        }
        //res.send(search)
        res.render('indexpac',{search1:search})
    })
}

exports.save1= (req,res) => { // paciente
    const nombrepac = req.body.nombre
    const cedulapac = req.body.cedulapac
    const apellidopac = req.body.lastnamep
    const especialidadpa = req.body.especialpa
    const edad = req.body.age
    const telefono = req.body.phone
    //console.log(req.body, nombre, edad, genero, email)
    var comando2 = "insert into pacientes (nombre, cedula, apellido, especialidad, edad, telefono) values ('"
    comando2 += nombrepac +"', "+cedulapac+" ,'"+apellidopac+"','"+especialidadpa+"', "+edad+", "+telefono+")"
    console.log(comando2)
    conexion.query(comando2, (error, conclusion) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/indexpac')
        }
    })
}
// --------------------------------API--------------------------------------

exports.api_consultatodos1 = (req,res) => {
    conexion.query('select * from pacientes',(error, search) => {
        if(error){
            console.log("error consultando la tabla pacientes: "+ error)
            return
        }
        res.send(search)
    })
}

exports.api_agregar1 = (req,res) => { // pacientes
    const nombrepac = req.query.name
    const cedulapac = req.query.cedulapac
    const apellidopac = req.query.lastnamep
    const especialidadpa = req.query.especialpa
    const edad = req.query.age
    const telefono = req.query.phone
    //console.log(req.body, nombre, edad, genero, email)
    var comando2 = "insert into pacientes (nombre, cedula, apellido, especialidad, edad, telefono) values ('"
    comando2 += nombrepac+ "',"+cedulapac+",'" +apellidopac+"','" +especialidadpa+"', "+edad+", "+telefono+")"
    console.log(comando2)
    conexion.query(comando2, (error, conclusion) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro agregado correctamente')
        }
    })
}

// -------------------------- CITAS MÉDICAS -----------------------------//

exports.consultarcita = (req,res) => { // paciente
    conexion.query('select * from citas',(error, recherche) => {
        if(error){
            console.log("error consultando la tabla citas: "+ error)
            return
        }
        //res.send(search)
        res.render('indexcita',{recherche1:recherche})
    })
}

exports.save3= (req,res) => { 
    const fecha= req.body.fecha
    const cedulaci = req.body.cedulacita
    const especial = req.body.specil
    //console.log(req.body, nombre, edad, genero, email)
    var comando3 = "insert into citas (fecha, cedula, especialidad) values ('"
    comando3 += fecha +"', "+cedulaci+",'" +especial+"')"
    console.log(comando3)
    conexion.query(comando3, (error, respuesta) => {
        if(error){
            console.log(error)
            return
        } else {
            res.redirect('/indexcita')
        }
    })
}

//------------------- API -------------------------//

exports.api_consultatodos2 = (req,res) => { // paciente
    conexion.query('select * from citas',(error, recherche) => {
        if(error){
            console.log("error consultando la tabla citas: "+ error)
            return
        }
        res.send(recherche)
       
    })
}

exports.api_agregar2 = (req,res) => { 
    const fecha= req.query.fecha
    const cedulaci = req.query.cedulacita
    const especial = req.quey.specil
    //console.log(req.body, nombre, edad, genero, email)
    var comando3 = "insert into citas (fecha, cedula, especialidad) values ('"
    comando3 += fecha +"', "+cedulaci+",'" +especial+"')"
    console.log(comando3)
    conexion.query(comando3, (error, respuesta) => {
        if(error){
            console.log(error)
            return
        } else {
            res.send('Registro agregado correctamente')
        }
    })
            
}

// Es lo que quería hacer para consultar las tablas pero no logré que se mostrara en pantalla, creo que renderizar. 
/*
exports.consultarcitadocpac = (req,res) => {
    conexion.query('select cedula, especialidad, nombre from pacientes UNION select nombre, cedula, especialidad from doctores;',(error, recherche) => {
        if(error){
            console.log("error consultando la tabla citas: "+ error)
            return
        }
        //res.send(search)
        res.render('indexcita',{recherche1:recherche})
    })
}
*/