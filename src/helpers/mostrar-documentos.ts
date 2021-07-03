import firebase from 'firebase';
//funcion que nos retorna los documentos de una coleccion.
export const retornarDocumentos = (snapshot : firebase.firestore.QuerySnapshot)=>{
    const documentos : any[] = [];
    snapshot.forEach(( item )=>{
        documentos.push({
            id: item.id,
            ...item.data()
        });
    });
    console.log(documentos);
    return documentos;
}