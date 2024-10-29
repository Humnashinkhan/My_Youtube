import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
     dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
    <div className="flex col-span-1">
      <img
        onClick={() => toggleMenuHandler()}
        className="h-12 cursor-pointer"
        alt="menu"
        src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
         className="h-14 mx-2 w-24 pb-1"
         alt="youtube-logo"
         src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-logo-icon.png"
         />
    </div>
     <div className="col-span-10 px-10">
       <input
        className="w-1/2 border border-gray-400 p-2 rounded-l-full"
       type="text"/>
       <button
        className="border border-gray-400 p-2 rounded-r-full bg-gray-100"
       >
        Search
        </button>
     </div>
     <div className="col-span-1">
        <img
         className="h-8"
         alt="user"
         src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
         />
     </div>
</div>
  )
}

export default Head