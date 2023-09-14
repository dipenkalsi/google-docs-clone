'use client'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import React, { useEffect, useState } from 'react'
import { useDb } from '@/app/context/DbContext';
import EditorHeader from '@/app/Components/EditorHeader'; 
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

import dynamic from 'next/dynamic';
const Editor = dynamic(()=>import("react-draft-wysiwyg").then((module)=>module.Editor),{
  ssr:false
})
const page = ({params}) => {
  const {getDocument, updateData, getEditorState} = useDb();
  const [document, setDocument] = useState({});
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  useEffect(()=>{
    const temp = getDocument(params.document);
    temp.then((value)=>{
      setDocument(value)
    })
  }, [])
  useEffect(()=>{
    const temp = getEditorState(params.document);
    temp.then((value)=>{
      // editorState.set(editorState.currentContent, JSON.parse(value).currentContent)
      console.log(JSON.parse(value));
    })
  }, [])
  
  const onEditorStateChange = (editorState) =>{
    setEditorState(editorState)
    updateData(params.document, JSON.stringify(editorState))
  }

// console.log(editorState.set())
  return (
    <div>
      <EditorHeader docName={document.name}/>
      <div className="flex flex-col items-center bg-[#F8F9FA] min-h-screen pb-16">
      <Editor toolbarClassName="flex sticky top-0 w-full bg-white !justify-center mx-auto border border-1 border-black" editorClassName="mt-6 bg-white shadow-lg max-w-5xl  mx-auto mb-12 border p-10 rounded mx-2" editorState={editorState} onEditorStateChange={onEditorStateChange}/>
      </div>
    </div>
  )
}

export default page
