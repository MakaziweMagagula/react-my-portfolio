// Import the functions you need from the SDKs you need
    import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import { getFirestore} from "firebase/firestore"

    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBslwPkXyAAZIICCAAkIYQn1tdb0uegGVE",
      authDomain: "react-my-portfolio-481b6.firebaseapp.com",
      projectId: "react-my-portfolio-481b6",
      storageBucket: "react-my-portfolio-481b6.appspot.com",
      messagingSenderId: "504029236750",
      appId: "1:504029236750:web:33b54efb739124c325365f",
      measurementId: "G-MJW5E7DT87"
    };
    
    // Initialize Firebase
    export const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const db = getFirestore();

    export default db;

    