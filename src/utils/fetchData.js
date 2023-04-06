export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '995ec309d4mshca2792b1eee4021p13a3b2jsn600c2fe9d2cd',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData=async (url,option)=>{
    const response=await fetch (url,option);
    const data=await response.json()
    return data;
}