import db from './firebase/config';
import { retornarDocumentos } from './helpers/mostrar-documentos';

const refDoc = db.collection('usuarios');

//paginacion
// refDoc.limit(3).get().then(docs => retornarDocumentos(docs)); //<- con limit establecemos el limite de registros que nos va a traer.

const btnNext = document.createElement('button');
btnNext.innerText = 'Next Page';
document.body.append(btnNext);

let lastDocument : any = null; //<- variable que nos permite la referencia al ultimo documento
let firstDocument : any = null;

btnNext.addEventListener('click',()=>{
    //query a ejecutar
    const query = refDoc
                    .orderBy('nombre') //<- queremos los registros ordenados por nombre
                    .startAfter(lastDocument) //<- queremos que los elementos que traigan sean los sigueintes al ultimo elemento mandado.

    query.limit(2).get().then(snap =>{ //<- ejecutamos el query 
        firstDocument = snap.docs[0] || null ;
        lastDocument = snap.docs[snap.docs.length - 1] || null //<- obtenemos el ultimo registro
        retornarDocumentos(snap)
    })
});


const btnPrev = document.createElement('button');
btnPrev.innerText = 'Previous Page';
document.body.append(btnPrev);

btnPrev.addEventListener('click',()=>{

    //query a ejecutar
    const query = refDoc
                    .orderBy('nombre') //<- queremos los registros ordenados por nombre
                    .endBefore(firstDocument) //<- queremos que los elementos que traigan sean los sigueintes al ultimo elemento mandado.

    query.limit(2).get().then(snap =>{ //<- ejecutamos el query 
        firstDocument = snap.docs[0] || null;
        lastDocument = snap.docs[snap.docs.length - 1] || null //<- obtenemos el ultimo registro
        retornarDocumentos(snap)
    })
});

btnNext.click();