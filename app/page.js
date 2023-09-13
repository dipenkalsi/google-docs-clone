'use client'
import Image from 'next/image'
import { useState } from 'react'
import Header from './Components/Header'
import { Button, Dialog, DialogBody, DialogHeader, DialogFooter, Input } from '@material-tailwind/react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {FaFolder} from 'react-icons/fa'
import { UserAuth } from './context/AuthContext';
import SignIn from './Components/SignIn'
export default function Home() {
  const [isModalOpen, setModalOpen] = useState(false)
  const [newDocName, setNewDocName] = useState('');
  const handleOpen = () =>{
     setModalOpen(!isModalOpen);
     setNewDocName('');
    }
  const createDocument = () =>{
    handleOpen();
    console.log(newDocName);
  }
  const {user} = UserAuth();
  return (
    <div>
      {!user? 
      <SignIn/>
    :<>
   
    <Header/>

    <section className='bg-[#F8F9FA] pb-10 px-10'>
      <div className='max-w-3xl mx-auto'>
        
        <div className='py-6 flex items-center justify-between'>
            <h2 className='text-xl text-gray-700'>Create a new document</h2>
            <Button variant='text' className='p-3 rounded-full'>
              <BsThreeDotsVertical size={20} color='gray'/>
            </Button>
        </div>
        <div>
          <div onClick={handleOpen} className='relative h-52 w-40 border cursor-pointer  transition hover:shadow-md rounded-md'>
          <Image src='https://links.papareact.com/pju' layout='fill'/>
          </div>
          <p className='mt-2 font-semibold text-gray-700 text-sm'>Blank</p>
        </div>
      </div>
    </section>


    <section className='bg-white px-10 md:px-0'>
      <div className='max-w-3xl mx-auto py-8 text-sm text-gray-700'>
        <div className='flex items-center justify-between pb-5'>
          <h2 className='font-medium flex-grow'>My Documents</h2>
          <p className='mr-12'>Day Created</p>
          <FaFolder size={20} color='gray'/>
        </div>
      </div>
    </section>

        {/* MODAL */}
    <Dialog open={isModalOpen} handler={handleOpen} size='xs'>
        <DialogHeader>Name your document</DialogHeader>
        <DialogBody divider>
          <Input label='Document Name' color='blue' value={newDocName} onKeyDown={(e)=>e.key=="Enter" && createDocument() && handleOpen()} onChange={e=>setNewDocName(e.currentTarget.value)}/>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 rounded"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" className='rounded' color="blue" onClick={createDocument}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>}
  </div>
      
  )
}
