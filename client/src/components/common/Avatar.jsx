import React from "react";
import Image from "next/image";
import { FaCamera } from "react-icons/fa";
import { useState}   from "react";
import PhotoPicker from "./PhotoPicker";
import ContextMenu from "./ContextMenu";
function Avatar({type,image, setImage}) {
  const [hover,setHover] = useState(false);
  const [isContextMenuVisible,setContextMenuVisible] = useState(false);
  const[contextMenuCordinates,setContextMenuCoordinates] = useState({x:0,y:0});

  const showContextMenu = (e) => {
    e.preventDefault();
    setContextMenuCoordinates({x:e.pageX,y:e.pageY});
    setContextMenuVisible(true);
  }

  const  contextMenuOptions= [{name: "Take Photo", callback:()=> {}}]
  return(
  <>
  
  <div className="flex items-center justify-center">
    { type ==="sm"&& (
    <div className="relative h-10 w-10">

      <Image src={image} alt="avatar" className="rounded-full" fill/> 
      
      
      
    </div>
    )}
   { type ==="lg"&& (
    <div className="relative h-14 w-14">

      <Image src={image} alt="avatar" className="rounded-full" fill/> 
      
      
      
    </div>
    )}

       { type ==="xl"&& (
        <div 
        className="relative cursor-pointer z-0"
        
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >

        <div className={`z-10 bg-photopicker-overlay-background h-60 w-60 absolute top-0 left-0 flex item-center rounded-full justify-center flex-col text-center gap-2
        ${hover ? "visible" : "hidden"}
        `}
        onClick={e=> showContextMenu(e)}
        >
          <FaCamera className="text-2xl" id="context-opener"
           onClick={e=> showContextMenu(e)}
          
           />
          <span   id="context-opener" onClick={e=> showContextMenu(e)}>Change <br/> Profile <br/> Photo</span>
          
        </div>
        <div className=" flex items-center justify-center h-60 w-60 ">

          <Image src={image} alt="avatar" className="rounded-full" fill/> 
      
      
      
        </div>
        </div>
    )}

    
   

  </div> {isContextMenuVisible && (
  <ContextMenu
  options={contextMenuOptions}
  cordinates={contextMenuCordinates}
  ContextMenu={isContextMenuVisible}
  setContextMenu={setContextMenuVisible}
  />
  )}
</>
  
  
 
  );
}

export default Avatar;
