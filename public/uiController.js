let uiController = (() => {
    let domStrings = {
        worldDataStrings: {
            worldTotalConfirmed: "totalConfirmed",
            worldTotalDeaths: "totalDeaths",
            worldTotalRecovered: "totalRecovered",
            worldTotalActiveCases: "totalActiveCases"
        },
        topCountries: "topCountries"
        ,
        time: 120         
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function insertWorldData(src, data, val,sleepTimer) {
        src = document.getElementById(src)
        await sleep(sleepTimer);
        let addValue = Math.round(data / val)
        let count = 0
        let loop = async () => {
            if (count <= data) {
                await sleep(1);
                if (count + addValue > data) {
                    count += (addValue - ((count + addValue) - data))
                } else {
                    count += addValue
                }
                src.textContent = count
                loop()
            }
        }
        loop()
        return true;
    }
    function insertTopCountriesData(data) {
        console.log(data.length)
    }
    return {
        insertWorldData: function (data) {
            console.log(data)
            for (const key in domStrings.worldDataStrings) {
                if (domStrings.worldDataStrings.hasOwnProperty(key)) {
                    let timer=450+(Math.random()*1500)
                    console.log(timer)
                    insertWorldData(key, data[domStrings.worldDataStrings[key]], domStrings.time,timer);
                }
            }
        },
        insertTopCountriesData: (data) => insertTopCountriesData(data)
    }
})();
