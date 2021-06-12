import React,{ useContext,useState, useEffect } from "react"
import {db} from '../firebase/firebase'
import {google_login} from './authentication'
import {auth} from '../firebase/firebase'

// Tạo biến Context và sử dụng createContext của React để tạo Context trên biến đó
const Context = React.createContext()

// Sử dụng context vào biến Context vừa tạo
export const useNewContexts = () => {
    return useContext(Context)
}

// Tạo 1 compononent bọc children với store chứa dữ liệu cung cấp cho children 
export const ContextProvider = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState()
    // Tạo store chứa dữ liệu

    useEffect(()=> {
        setCurrentUser()
        // Call this function when mounted = will call firebase auth.onStateChange and set Current User and Unmount it to cause unsubscribe
        const unsubscribe = auth.onAuthStateChanged( async user=> {
            if (user) {
                const userRef = await handleUserProfile(user)
                userRef.onSnapshot(snapshot=> {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                    console.log(snapshot.data());
                })
            }
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    // Code có sẵn, lấy user đã login về


    const store = {
        users: db.collection('users').get().then(doc => doc.docs.map(item => item.data())),
        addidas: db.collection('addidas').get().then(doc => doc.docs.map(item => item.data())),
        google_login,
        currentUser,
    }

    // Xuất component có value={store} cho children sử dụng 
    return <Context.Provider value={store}>
        {!loading && children}
    </Context.Provider>
}

export const handleUserProfile = async(userAuth, additionalData) => {
    // Nếu không có user thì không làm gì cả
    if (!userAuth) return
    // Lấy uid của user
    const {uid,photoURL} = userAuth
    // user = lấy thông tin của user trong documents
    const userRef = db.doc(`users/${uid}`)
    // Snapshot = lấy thông tin user
    const snapshot = await userRef.get()
    // Nếu thông tin user không tồn tại
    if (!snapshot.exists) {

        // DisplayName và email lấy trong 
        const {displayName, email} = userAuth
        const timestamp = new Date()
        // Sau đó tạo user = cách user.set(thông tin)
        try {
            await userRef.set({
                displayName,
                email,
                photoURL: photoURL,
                createdDate: timestamp,
                cart: [],
                ...additionalData
            }, {merge: true})
        } catch(err) {
            console.log(err);
        }
    } return userRef
}