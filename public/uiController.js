let uiController = (() => {
    let domStrings = {
        worldDataStrings: {
            worldTotalConfirmed: ["totalConfirmed",null], //2nd Element is for badge
            worldTotalDeaths: ["totalDeaths",true],
            worldTotalRecovered: ["totalRecovered",true],
            worldTotalActiveCases: ["totalActiveCases",true],
        },
        topCountries: "topCountries"
        ,
        time: 120
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function insertWorldData(src, data,badge, val, sleepTimer) {
        src = document.getElementById(src)
        await sleep(sleepTimer);
        let addValue = Math.round(data[0] / val)
        let count = 0
        let loop = async () => {
            if (count <= data[0]) {
                await sleep(1);
                if (count + addValue > data[0]) {
                    count += (addValue - ((count + addValue) - data[0]))
                } else {
                    count += addValue
                }
                src.textContent = count
                loop()
            }
        }
        loop()
        if(badge){
            src.nextElementSibling.children[0].textContent=(Math.round(data[0]*100/data[1]))+"%"
            // console.log(data[1])
            
        }
        
        return true;
    }
    async function fadeOutandFadeIn(src) {
        let loader = document.getElementById(src).parentElement.parentElement.children[0];
        loader.classList.add("hidden")
        await sleep(900)
        loader.classList.add("display-none")
        let el = document.getElementById(src).parentElement
        el.classList.remove("display-none");
        await sleep(20)
        el.classList.add("visible")
    }
    function insertTopCountriesData(data) {
        console.log(data.length)
    }
    return {
        insertWorldData: function (data) {
            console.log(data)
            for (const key in domStrings.worldDataStrings) {
                if (domStrings.worldDataStrings.hasOwnProperty(key)) {
                    let timer = 1500 + (Math.random() * 2200)
                    fadeOutandFadeIn(key)
                    insertWorldData(key, [data[domStrings.worldDataStrings[key][0]],data[domStrings.worldDataStrings["worldTotalConfirmed"][0]]],domStrings.worldDataStrings[key][1] ,domStrings.time, timer);
                }
            }
        },
        insertTopCountriesData: (data) => insertTopCountriesData(data)
    }
})();
