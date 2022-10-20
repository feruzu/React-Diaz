// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjcnqGRDhGKDJh5WwuECCsSf74znzYMts",
  authDomain: "react-serums.firebaseapp.com",
  projectId: "react-serums",
  storageBucket: "react-serums.appspot.com",
  messagingSenderId: "83967177205",
  appId: "1:83967177205:web:8fcc5216378b05a80930bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


// Items | Pedimos Documentos
export async function getData(){
  const miColeccion = collection( firestore, "productos");
  let snapShot = await getDocs(miColeccion);
    
  let dataDocs =  snapShot.docs.map( documento => {
    let docFormateado = { ...documento.data(), id: documento.id }
    return docFormateado;
});
return dataDocs;
}


// Detalle de items | Pedimos Documento
export async function getOneData(idParams){
    
  const docRef = doc(firestore, "productos", idParams);
  const docSnapShot =  await getDoc(docRef);
  
  return { ...docSnapShot.data(), id: docSnapShot.id }

}
  

// Categoria de Productos
export async function getItemsByCategory(catParams){
  const docsCollectionRef = collection(firestore, "productos");
  const q = query(docsCollectionRef, where("category", "==", catParams));

  const snapShot = await getDocs(q);

  let dataDocs =  snapShot.docs.map( documento => {
    let docFormateado = { ...documento.data(), id: documento.id }
    return docFormateado;
});

return dataDocs;
}

// Manda a Firebase un objeto en una determinadad colección
export async function createBuyOrder(orderData){
  const miColeccion = collection(firestore, "orders");
  let respuesta = await addDoc(miColeccion, orderData);
 
  return respuesta.id;
}



export default  firestore;