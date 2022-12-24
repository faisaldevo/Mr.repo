import React,{useState} from 'react'
import { useMutation } from 'react-query';

const Login = () => {
  const [login, setLogin] = useState({
    id: 0,
    FirstName: "",
    LastName: ""
  });
  const handleChange = (events) => {
    setLogin({...login,[events.target.name]:events.target.value});
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    mutation_post.mutate(mutation_post);
    console.log(login)
  }; 
 

  const mutation_post = useMutation(async () => {
    const rawResponse = await fetch ("http://localhost:3009/posts",{
    method:"POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body:JSON.stringify(login),
  });
  const content = await rawResponse.json();
  console.log(content);
})
  return (
    <>
    <br></br>
    <form onSubmit={handleSubmit}>
  <div class="form-group">
   
  &nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; ID   <input type="number" label="id" name='id' value={login.id} onChange={handleChange} placeholder="Enter id"/>
  </div><br/>
  <div class="form-group">
  &emsp;&emsp;&emsp; FirstName  <input type="text" label="FirstName" value={login.FirstName} name="FirstName" onChange={handleChange}  placeholder="FirstName"/>
  </div><br></br>
  <div class="form-group">
  &nbsp;&nbsp;&emsp;&emsp;&emsp;LastName  <input type="text" name="LastName" label="LastName" value={login.LastName} onChange={handleChange} placeholder="LastName"/>
  </div><br></br>
  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<button type="submit" class="btn btn-warning">Submit</button>
</form>
    </>
  )
}

export default Login