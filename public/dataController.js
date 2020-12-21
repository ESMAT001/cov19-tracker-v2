let dataController = (() => {
    let urls = {
        worldData: "https://api.coronatracker.com/v3/stats/worldometer/global",
        topCountries:"https://api.coronatracker.com/v3/stats/worldometer/topCountry?limit=8&sort=-confirmed"
    }
    let getData =async (url,props)=>{
        let xhttp;
        let data= await fetch(url)
        data=await data.json()
        return data;
    }
    return {
        worldData: () => getData(urls.worldData),
        topCountries:()=>getData(urls.topCountries)
    }
})();
