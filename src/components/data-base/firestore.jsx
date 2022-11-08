// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_apykey,
  authDomain: process.env.REACT_APP_FIREBASE_authDomain,
  projectId: process.env.REACT_APP_FIREBASE_projectId,
  storageBucket: process.env.REACT_APP_FIREBASE_storageBucket,
  messagingSenderId: process.env.REACT_APP_FIREBASE_messagingSenderId,
  appId: process.env.REACT_APP_FIREBASE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

// Items
export async function getData() {
  const miColeccion = collection(firestore, "productos");
  let snapShot = await getDocs(miColeccion);

  let dataDocs = snapShot.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

// Detalle de items
export async function getOneData(idParams) {
  const docRef = doc(firestore, "productos", idParams);
  const docSnapShot = await getDoc(docRef);

  return { ...docSnapShot.data(), id: docSnapShot.id };
}

// Categoria de Productos
export async function getItemsByCategory(catParams) {
  const docsCollectionRef = collection(firestore, "productos");
  const q = query(docsCollectionRef, where("category", "==", catParams));

  const snapShot = await getDocs(q);

  let dataDocs = snapShot.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });

  return dataDocs;
}

// Ordenes de compra
export async function createBuyOrder(orderData) {
  const miColeccion = collection(firestore, "orders");
  let respuesta = await addDoc(miColeccion, orderData);

  return respuesta.id;
}

export default firestore;
