import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
 const [searchQuery, setSearchQuery] = useState("");
 const [suggestions, setSuggestions] = useState([]);
 const [showSuggestions, setShowSuggestions] = useState(false);
 const searchCache = useSelector((store) => store.search);
 const dispatch = useDispatch();

    useEffect(() => {
     const Timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions()
      }
    }, 200);

     return () => {
       clearTimeout(Timer);
     };
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
    };



   const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-2 m-2 shadow-lg">
    <div className="flex col-span-1">
      <img
        onClick={() => toggleMenuHandler()}
        className="h-8 cursor-pointer"
        alt="menu"
        src="https://static.vecteezy.com/system/resources/previews/021/190/402/non_2x/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
         className="h-8 mx-2"
         alt="youtube-logo"
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
         />
    </div>
     <div className="col-span-10 px-10">
      <div>
       <input
        className="w-1/2 border border-gray-400 p-2 rounded-l-full"
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setShowSuggestions(false)}
      />
        <button
        className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
       >           
        🔍
      </button>
      </div>
      {showSuggestions && (
      <div className="fixed bg-white py-2 px-5 w-[32rem] shadow-lg rounded-lg border border-gray-3
      00">
        <ul>
          {suggestions.map((s) => (
            <li key={s} className="py-2 px-3 hover:bg-gray-100 shadow-sm">🔍 {s}</li>
            
          ))}
          </ul>
      </div>
      )}
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