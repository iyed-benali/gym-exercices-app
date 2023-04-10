export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'd72c98894cmsh28b3af34c5863e1p19f360jsne4b9c3aa39ec',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const optionsYoutube = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/channel',
    params: {
      id: 'UCiTGKA9W0G0TL8Hm7Uf_u9A',
      next: '4qmFsgKFARIYVUNpVEdLQTlXMEcwVEw4SG03VWZfdTlBGjpFZ1oyYVdSbGIzTVlBeUFBTUFFNEFlb0RGa05uUVZORFoycHdNazVFTkRWT2VVcHNhMmR2VFdjJTNEmgIsYnJvd3NlLWZlZWRVQ2lUR0tBOVcwRzBUTDhIbTdVZl91OUF2aWRlb3MxMDI%3D',
      sort: 'n'
    },
    headers: {
      'X-RapidAPI-Key': 'd72c98894cmsh28b3af34c5863e1p19f360jsne4b9c3aa39ec',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }