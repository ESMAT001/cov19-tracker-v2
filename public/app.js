$(document).ready(function() {
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function insert(src, data, val) {
        src = document.getElementById(src)
        await sleep(2000);
        let addValue = Math.round(data / val)
        let count = 0
        let loop = async() => {
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
    insert("worldTotalCases", 1112332233, 500)
    insert("worldTotalRecovered", 29232439, 500)
    insert("worldTotalDeath", 3012010, 500)
    insert("worldTotalActive", 80332535, 500)
})