
export const getGifs = async( Category )=>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=5LOOX6wV7xyM46hc6x1Jte5Fq9Zg16nV&q=${ Category }&limit=10`
    const resp = await fetch(url);

    const {data} = await resp.json(); 

    const gifs =data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));

    return gifs;
  }
