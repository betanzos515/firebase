
refDoc.orderBy('nombre','asc').get().then(datos => retornarDocumentos(datos)); //<- ordena de manera ascendente.
refDoc.orderBy('salario','asc').get().then(datos => retornarDocumentos(datos));


/* select * from usuarios order by nombre asc, salario asc */

refDoc.orderBy('nombre').orderBy('salario','asc').get().then(datos => retornarDocumentos(datos));
