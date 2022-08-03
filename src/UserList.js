import axios from 'axios'
import React, { useState, useEffect } from 'react'

function UserList() {
    function userData() {
        axios.get('https://jsonplaceholder.typicode.com/users',{
            headers:{
             
                Accept: "application/json",
                "Content-Type": "application/json"
              
           
            }
          })
            .then(res => setuserlist(res.data))
            .catch(err => err)
    }
    const [userlist, setuserlist] = useState()
    useEffect(() => {
        userData(); console.log(userlist)

    }, [])

    return (
    <div class="container">
        <p>List of users</p>
        <section class="display">
        {userlist.map(e =>
           
                <div class="userlist">
                    <div class="info"><span>Id :</span><p>{e.id}</p></div>
                    <div class="info"><span>name :</span><p>{e.name}</p></div>
                    <div class="info"><span>username :</span><p>{e.username} </p></div>
                    <div class="info"><span>email :</span><p>{e.email}</p></div>
                    <div class="info"><span>website :</span><p>{e.website}</p></div>
                </div>
            )}
            </section>
            </div>
    )
}

export default UserList