document.addEventListener("DOMContentLoaded", () => {
    let controller = ((uiCtrl, dataCtrl) => {
        return {
            init: () => {
                dataCtrl.worldData().then(data => uiCtrl.insertWorldData(data));
                dataCtrl.topCountries().then(data => uiCtrl.insertTopCountriesData(data));
            }
        }
    })(uiController, dataController);

    controller.init()
})