import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs ,doc , setDoc} from 'firebase/firestore'
import { utilService } from './util.service'

const firebaseConfig = {
  apiKey: "AIzaSyCX7cG-0NIZ5bFgZNEI4ZOVoXH-mlgM-0k",
  authDomain: "todos-f937f.firebaseapp.com",
  projectId: "todos-f937f",
  storageBucket: "todos-f937f.appspot.com",
  messagingSenderId: "1087115933080",
  appId: "1:1087115933080:web:3bfbf854094a80cc04a7ed",
  measurementId: "G-Y3VY4ZKNX6"
}

export default {
  get,
  add
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function add(user){
  return await setDoc(doc(db,'users',user.id), user)
}

async function get() {
  const userCol = collection(db, 'users')
  const userSnapshot = await getDocs(userCol)
  const userList = userSnapshot.docs.map(doc => doc.data())
  return userList
}