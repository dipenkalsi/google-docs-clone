import React from 'react'
import { SiGoogledocs } from 'react-icons/si'
import { Button} from '@material-tailwind/react'
import {MdMenu} from 'react-icons/md'
import {BsFillShareFill} from 'react-icons/bs'
import {BsFillEyeFill} from 'react-icons/bs'
import {MdInsertLink} from 'react-icons/md'
import {AiFillFile} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import {AiFillFormatPainter} from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import {
    Drawer,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
const EditorHeader = ({docName}) => {
    const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const {user, logOut} = UserAuth();
  return (
    <header className='flex items-center sticky top-0 z-50 px-2 md:px-4 py-2 bg-white shadow-md justify-between'>
        <div className='flex space-x-2 items-center'>
            <Button variant='text' className='rounded-full p-3 md:hidden' onClick={openDrawer}>
             <MdMenu color='gray' size={30}/>
            </Button>
            <SiGoogledocs size={35} className='text-blue-500'/>
            <div className='flex flex-col space-y-1'>
                <p>{docName}</p>
                <ul className='text-sm text-gray-500  space-x-4  hidden md:flex'>
                    <li className='hover:underline underline-offset-2 cursor-pointer'>File</li>
                    <li className='hover:underline underline-offset-2 cursor-pointer'>Edit</li>
                    <li className='hover:underline underline-offset-2 cursor-pointer'>View</li>
                    <li className='hover:underline underline-offset-2 cursor-pointer'>Insert</li>
                    <li className='hover:underline underline-offset-2  cursor-pointer'>Format</li>
                </ul>
            </div>
        </div>
        <div>
        <div className='flex items-center justify-center space-x-5 md:ml-3 ml-2'>
            <Button  className='rounded p-2.5 hidden md:flex items-center justify-center space-x-2' color='blue' size='sm'>
            <BsFillShareFill color='white' size={15} className=''/>
            <p>Share</p>
            </Button>
            {user && <img src={user.photoURL} onClick={logOut} alt="" className='h-10 w-10 rounded-full cursor-pointer' loading='lazy'/>}
            </div>
        </div>
        <React.Fragment>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray ">
            {docName}
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <ListItem>
            <ListItemPrefix>
                <AiFillFile size={25} color='gray'/>
            </ListItemPrefix>
            <p className='text-lg'>File</p>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
                <AiFillEdit size={25} color='gray'/>
            </ListItemPrefix>
            <p className='text-lg'>Edit</p>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
                <BsFillEyeFill size={25} color='gray'/>
            </ListItemPrefix>
            <p className='text-lg'>View</p>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
                <MdInsertLink size={25} color='gray'/>
            </ListItemPrefix>
            <p className='text-lg'>Insert</p>
          </ListItem>
          <ListItem >
            <ListItemPrefix>
                <AiFillFormatPainter size={25} color='gray'/>
            </ListItemPrefix>
            <p className='text-lg'>Format</p>
          </ListItem>
        </List>
        <Button className='flex space-x-2 items-center justify-center rounded ml-3 mt-3' color='blue'>
            <BsFillShareFill size={20}/>
            <p>Share</p>
        </Button>
      </Drawer>
    </React.Fragment>
    </header>
  )
}

export default EditorHeader
