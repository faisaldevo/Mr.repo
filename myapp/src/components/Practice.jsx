import React,{useState,} from 'react'
import { useEffect } from 'react';
import {useQuery,useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom';

const Practice = () => {

  const[deleteId,setdeleteId]=useState('')
  const mutation_delete= useMutation(async () => {
    const rawResponse = await fetch (`http://localhost:3009/posts/${deleteId}`,{
    method:"DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body:JSON.stringify({'delete':deleteId}),
  });
  const content = await rawResponse.json();
  console.log(content);
})
  useEffect(()=>{
    if(deleteId===''){

    }else{
      mutation_delete.mutate(mutation_delete);      
    }
  },[deleteId])
  
  const handleDelete = (event) => {
    event.preventDefault();
    setdeleteId(event.target.id)
    console.log(deleteId)
    //mutation_delete.mutate(mutation_delete);
    
  }; 
 
const navigate = useNavigate();
  const getTodos = async () => {
    const rop = await fetch ("http://localhost:3009/posts")
    return rop.json();
  }
  const {data} = useQuery('todos' , getTodos)
  console.log(data)
  const handleClick = () => {
    navigate('/Login')
  }
  // const editPost = ({ postId, FirstName, LastName}) => {
  //   return Put(`http://localhost:3009/posts/${postId}`,{
  //     FirstName,
  //     LastName,
  //   });
  // }
  // const[mutate] = useMutation(editPost)
  // const onSubmitHandler = (values) => {
  //   const { FirstName, LastName} = values;
  //   mutate({
  //     postId,
  //     FirstName,
  //     LastName
  //   })
  //   .then(() =>{
  //     onClose();
  //     refetch();
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //   })
  // }
  return (
    <>
    <br></br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
    <button className='btn btn-danger' onClick={handleClick}>Add user</button><br></br>
    <br></br><main>
      <table>
        <thead>
          <tr>&nbsp;&nbsp;&nbsp;&nbsp;
            <th>id</th>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            <th>FistName</th>&nbsp; 
            <th>LastName</th>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <th>Action</th>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
            <th>Edit</th>&nbsp; 
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            (<tr key={item.id}>
             &nbsp; <td>{item.id}</td>&nbsp; 
              <td>{item.FirstName}</td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              <td>{item.LastName}</td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              <td><button id={item.id} onClick={handleDelete} className='btn btn-danger' >Delete</button></td>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
              <td><button className='btn btn-success'>Edit</button></td>
            </tr>)
          ))}
        </tbody>
      </table>

    </main>
    </>
  )
}

export default Practice