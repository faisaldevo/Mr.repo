
// import React from 'react'

// export const Usecallback = () => {
//     function mynam(){
//         return(1+1);
//     }
//   return (
//     <>
//    { console.log(mynam())}

    
//     </>
//   )
// }

// use ref
import React from 'react'
import { useEffect, useRef } from 'react';

const Usecallback = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
       console.log(inputRef)
    }, []);
  return (
    <>
    <input ref={inputRef}
    type="text" />
    {/* <h1>{inputRef.current}</h1> */}

    
    </>
  )
}

export default Usecallback
