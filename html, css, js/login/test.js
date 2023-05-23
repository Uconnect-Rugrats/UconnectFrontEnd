const fetchData = async(url) =>{
    try{
      const response = await fetch(url);

      const data = await response.json();

      console.log(data);
    }catch(err){
      console.log(err)
    }
  }

  fetchData("http://localhost:8080/publiuco/api/v1/estado/dummy")