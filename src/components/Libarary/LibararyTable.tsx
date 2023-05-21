import React,{useState,useEffect} from 'react'
import './LibararyTable.css'
import { useNavigate } from 'react-router-dom'
import  moment  from 'moment'
 
interface UserList{
  title:string,
  author: string,
    launchdate: string,
    image_lnk: string,
    description:string,
    id:string
}
 
const LibararyTable:React.FC= ()=> {

  const [data,setData]=useState<UserList[]>([])

  const navigateToForm= useNavigate()

  const handleNavigate=()=>{
    navigateToForm('/userForm')
  }
          
  useEffect(()=>{
 fetch('http://demo.api.admin.circlesnow.com/ProductRESTService.svc/getschedmsg',{
  method: "GET",
  headers:{
    "content-type": "application/json",
    "token":"rajendrakumar25.rk11@gmail.com"   
  }})
 .then((response)=>response.json()).then((result)=>{  
   const userData = JSON.parse(result?.dt)  
   setData(userData.reverse())  
 }).catch((error)=>{
  console.log(error)
 })
  },[])

  return(  
    <div className='Libarary-Table container col-lg-8 mt-5'>  
    <div className='d-flex justify-content-between'>
         <h1>  Library  </h1>
        <span>
          <button className='new-blog-btn  mt-3' onClick={handleNavigate}>New blog</button>
          </span>
      </div>
      <table className="table    border">
  <thead className='table-active table-head'> 
    <tr>
      <th scope="col">Cover image</th>
      <th scope="col " className='mol'>Launch date</th>
      <th scope="col">Title</th>
      <th scope="col">Author</th>
    </tr>
  </thead>
  <tbody>   
{
    data?.map((item,index)=>{
      return(
        <tr key={index} >
        <th><img src ={item?.image_lnk} alt='' className="img-style"/></th>
        <td className='date-style'> {moment(item?.launchdate).format("MMMM D, YYYY")}</td>
        <td className='title-style' data-toggle="modal" data-target="#exampleModalCenter">{item?.title}</td>
        <td className='author-style'>{item?.author}</td>
        
      </tr>
      )
    }
  )
    } 
  </tbody>
</table>
    </div>
  )
}
export default LibararyTable