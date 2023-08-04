import firebase from "firebase";
require("@firebase/firestore");

//var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyBC-_Kr2oAb3Qc-pDHzuQ07N3AfAJbiJkM",
    authDomain: "projeto-71-c319b.firebaseapp.com",
    projectId: "projeto-71-c319b",
    storageBucket: "projeto-71-c319b.appspot.com",
    messagingSenderId: "817678939057",
    appId: "1:817678939057:web:17e6a724d87b5935360390"
  };
  
  if (!firebase.apps.length)
{
 firebase.initializeApp(firebaseConfig);
}
  


export default firebase.firestore();
