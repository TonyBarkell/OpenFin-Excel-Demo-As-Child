function openChild(){
    var app = new fin.desktop.Application({
        url: "http://openfin.github.io/excel-api-example/web/",
        uuid: "ChildApp",
        name: "Child App",
        mainWindowOptions: {
            defaultHeight: 600,
            defaultWidth: 800,
            defaultTop: 300,
            defaultLeft: 300,
            autoShow: true,
            "preload": [
                {
                  "url": "http://openfin.github.io/excel-api-example/plugin/service-loader.js"
                },
                {
                  "url": "http://openfin.github.io/excel-api-example/plugin/fin.desktop.Excel.js"
                }
              ]
        }
    }, function () {
        console.log("Application successfully created");
        app.run();
    }, function (error) {
        console.log("Error creating application:", error);
    });
}