export const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': "81966b3032mshe96313088c908dap1b68c3jsn35e436365098",
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
      'X-RapidAPI-Key': "995ec309d4mshca2792b1eee4021p13a3b2jsn600c2fe9d2cd",
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };

  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }