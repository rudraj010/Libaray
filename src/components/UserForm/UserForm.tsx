import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './UserForm.css'

interface UserList{
  title:string,
  author: string,
    launchdate: string,
    image_link: string,
    description:string,
}
  
const UserForm:React.FC= ()=> {

    const [response,setResponse]=useState()

    const navigateToTable=useNavigate()

    const [userInput, setUserInput] = useState<UserList>({
      title: " ",  
        author: " ",               
        launchdate: " ",
        image_link: " ",
        description: " "
    })        
  
         const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
               const name=e.target.name ;
               const value =e.target.value;
               setUserInput({...userInput,[name]:value})
         }

         const handleSubmit=async()=>{
        
         const {title,author,  launchdate,image_link,description}=userInput
          await fetch("http://demo.api.admin.circlesnow.com/ProductRESTService.svc/schedMsg", {
            method: "POST", 
            headers: {
              "content-type": "application/json",
              "token":"rajendrakumar25.rk11@gmail.com" 
            },
      
            body: JSON.stringify({
                "author":  author,
                "title": title ,
                "launchdate":  launchdate,
                "image_link": image_link,
                "description":  description
            }),
          })
            .then((response)=>{
                response.json().then((result)=>{
                     setResponse(result)
                     navigateToTable('/')
                }).catch((error)=>{
                    console.log(error,'error')
                })
            })
           }  
    return (
        <div className='container user-form border col-md-6 mt-5 bg-light col-sm-10'>
             <p className='d-flex justify-content-center mt-5'>
                <h3 className='mb-0'>Please Fill The Details</h3>
             </p>
            <div className='m-3 p-2  '>
                <div className="form-group m-2 ">
                    <label htmlFor="exampleInputEmail1" className="mb-2">Author</label>
                    <input type="text" className="form-control p-2" id="exampleInputEmail1" name="author"
                      placeholder="Enter email"
                    onChange={onChangeHandler}
                    value={userInput?.author} />          
                </div>

                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1" className="mb-2">Title</label>
                    <input type="text" className="form-control  " id="exampleInputPassword1" name="title"
                       value={userInput?.title} placeholder="Title"
                     onChange={onChangeHandler} />
                </div>

                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1" className="mb-2">Launch Date</label>
                    <input type="date" className="form-control  " id="exampleInputPassword1" name="launchdate"
                     value={userInput?.launchdate}
                    onChange={onChangeHandler}/>
                </div>

                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1" className="mb-2">Cover Image</label>
                    <input type="text" className="form-control  " id="exampleInputPassword1" name="image_link"
                    placeholder="Image-Link"  
                    onChange={onChangeHandler} />
                </div>

                <div className="form-group m-2">
                    <label htmlFor="exampleInputPassword1" className="mb-2">Description</label>
                    <input type="text-area" className="form-control  " id="exampleInputPassword1" name="description"
                    placeholder="Description"  value={userInput?.description}
                    onChange={onChangeHandler}/>
                </div>
                  <div className='m-2'>
                  <button  onClick={handleSubmit} className="btn btn-success mt-2 px-4">Submit</button>
                  </div>
            </div>
        </div>
    )
}
export default UserForm