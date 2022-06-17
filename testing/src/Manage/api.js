import React from 'react'
// here place code all manage.

export const GetData = async (results) => {
    try {
        let url = `https://randomuser.me/api/?results=${results}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('error here', error)
    }    
 }
 
 export const FieltSear = async(page=0, seed='',results=50) => {
   try {
       let url = `https://randomuser.me/api/?page=${page}&results=${results}&seed=${seed}`
       const response = await fetch(url)
       return await response.json()     
   } catch (error) {
     console.log('here error Fieltsearch', error)
   }
 }