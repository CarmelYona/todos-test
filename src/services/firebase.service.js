import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs ,doc , setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD56MBcQeNeMDxR-dubR9u73fU4VvrrsK0",
  authDomain: "todos-test-3b0f0.firebaseapp.com",
  projectId: "todos-test-3b0f0",
  storageBucket: "todos-test-3b0f0.appspot.com",
  messagingSenderId: "840503591791",
  appId: "1:840503591791:web:178a22260443e6120e1e9a",
  measurementId: "G-6BJ357Z3KZ",
  databaseURL: "https://todos-test-3b0f0.firebaseio.com"
}

export default {
  get,
  save,
  update
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function save(user){
  try{
    return await setDoc(doc(db,'user',user.id.toString()), user)
  }catch(err){console.log(err)}
}

async function update(user){
  try{
    return await setDoc(doc(db,'user',user.id.toString()), user)
  }catch(err){console.log(err)}
}

async function get() {
  const userCol = collection(db, 'user')
  const userSnapshot = await getDocs(userCol)
  const userList = userSnapshot.docs.map(doc => doc.data())
  return userList
}