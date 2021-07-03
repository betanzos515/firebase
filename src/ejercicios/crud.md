const docRef = db.collection('usuarios');

db.collection('usuarios').add(usuario); //<- linea para agregar campos a la base de datos.

db.collection('usuarios').doc('qEYCA7T9lmT2sSousDye').update({activo:false}) //<-linea que nos sirve para actualizar un registro


//el metodo set tambien nos sirve para borrar solo que este actualiza el objeto al registro que se le envia sobreescribiendo el objeto y agregando solo el campo a modificar
docRef.doc('9X14lnFCc8M8VV78QdR0').set({
    activo:true
})

//eliminar un registro de la colecion.
docRef.doc('9X14lnFCc8M8VV78QdR0').delete(); //<- linea para eliminar un documento o registro de la base de datos.


//seleccionar todos los registros de una colecion.

//onSnapshot es un callback que se va a ejecutar cada vez que la informacion de la base de datos cambie.

docRef.onSnapshot(snap=>{ //<- Snapshot es una funcion que nos desencadena una nueva peticion en tiempo real cuando se realiza un cambio en el backend 

    const data = retornarDocumentos(snap);
    console.log(data)
})

docRef
    .get().then(snap => 
        retornarDocumentos(snap)
    );

/* select * from usuarios where activo = true */
docRef.where('activo', '==', true).get().then(data => retornarDocumentos(data));
docRef.where('salario', '>=', 2000).get().then(data => retornarDocumentos(data));

/* select * from usuarios where salario > 1800 and salario < 2300 */
docRef.where('salario', '>', 1800)
    .where('salario', '<', 2200)
    .get().then(datos => retornarDocumentos(datos));

/* select * from usuarios where salario > 1800 and activo = true */
docRef.where('salario', '>=', 1800)
    .where('activo', '==', true)
    .get().then(datos => retornarDocumentos(datos));
