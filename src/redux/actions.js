import axios from "axios";

export const getDogs = () => {
   try { 
      return async (dispatch)=>{
         const {data} = await axios.get(`/dogs`)
         dispatch({type: 'GET_DOGS', payload: data});
      }
   } catch (error) {
      console.log(error);
   }
}

export const getDogById = (id) => {
   return async (dispatch)=>{
      try {
         const {data} = await axios.get(`/dogs/${id}`)
         dispatch({type: 'GET_BY_ID', payload: data})
      }
      catch (error) {
      console.log(error);
      }
   }
}


export const getDogByName = (name) => {
   return async (dispatch) => {
      try {
         const {data} = await axios.get(`/dogs?name=${name}`)
         return dispatch({
            type: 'GET_BY_NAME', 
            payload: data
         })
      }
   catch (error) {
      alert(`There isn't such breed`)
      }
   }
}
export const removeFinder =() => {
   return{ 
      type:'REMOVE_FINDER',
      payload: 'nada'
   }
}
export const getTemperaments = () => {
   try {
      return async (dispatch)=>{
         const {data} = await axios.get('/temperaments');
         return dispatch({type: 'GET_TEMPERAMENTS', payload: data});
      }
   } catch (error) {
      console.log(error);
   }
}

export const postDogs = (userData) => {
   try {
      return async (dispatch)=>{
         const {data} = await axios.post('/dogs', userData);
         console.log(data);
         alert(data);
         return dispatch({type: 'POST_DOGS', payload: data})
      }
   } catch (error) {
      alert(error.response.data)
   }
}
export const removeDetails = () => {
   return{ 
      type:'REMOVE_DETAILS',
      payload: 'nada'
   }
}

export const filterByOrigin = (origin) => {
   return  {type: 'FILTER_ORIGIN', payload: origin}
}

export const filterCards = (temp) => {
    return {type: 'FILTER', payload: temp}
}

export const orderCardsName = (orden) => {
    return {type: 'ORDER_BY_NAME', payload: orden}
}

export const orderCardsWeight = (orden) => {
   return {type: 'ORDER_BY_WEIGHT', payload: orden}
}