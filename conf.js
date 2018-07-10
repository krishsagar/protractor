

exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
   // specs:['spec.js'],
    specs:['dataEntry.js'],
   capabilities: {
       'browserName': 'chrome'
    }
//     multiCapabilities: [{   
//     browserName: 'firefox'
//   }, {
//     browserName: 'chrome'
//   }]


// onPrepare() {
//     browser.driver.manage().window().maximize();
// }
};
