import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp, getDocs, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { UserAuth } from "./AuthContext";
import { EditorState } from "draft-js";
const DbContext = createContext();

export const DbContextProvider = ({children}) =>{
    const {user} = UserAuth();
    const [docs, setDocs] = useState([])

    const addDocument = async(_name)=>{
        try {
            const docRef = await addDoc(collection(db, "userDocs"), {
              name:_name,
              owner:user.email,
              timeStamp:serverTimestamp(),
              editorState: null
            });
            return docRef.id;
          } catch (e) {
            console.error("Error adding document: ", e);
          }          
    }
    
    const getUserDocs = async()=>{
        try{
            const colRef = collection(db, 'userDocs');
            const snapshots = await getDocs(colRef)
            const temp = snapshots.docs;
            const docs = snapshots.docs.map(doc => doc.data())
            for(let i=0; i<temp.length; i++){
                docs[i] = {...docs[i], "id":temp[i].id}
            }
            console.log(docs);
            //checking if the doc belongs to the user or not
            let result = docs.filter(function (doc) {
                return doc.owner === user.email;
            })
            setDocs(result);
        }catch(err){
            console.log(err);
        }
    }

    const getDocument = async(id) =>{
        try{
            const docRef = doc(db, 'userDocs', id);
            const temp = await getDoc(docRef);
            return temp.data();
        }
        catch(err){
            console.log(err);
        }
    }

    const updateData = (id, _es) =>{
        const docRef = doc(db, 'userDocs', id);
        updateDoc(docRef, {
            editorState:_es
        })
    }

    const getEditorState = async(id) =>{
        try{
            const docRef = doc(db, 'userDocs', id);
            const temp = await getDoc(docRef);
            // console.log(temp.data().editorState)
            return temp.data().editorState;
        }
        catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getUserDocs();
    }, [user])
    return (
        <DbContext.Provider value = {{addDocument, docs, getUserDocs, getDocument, updateData, getEditorState}}>
            {children}
        </DbContext.Provider>
    )
}


export const useDb = () => {
    return useContext(DbContext);
  };