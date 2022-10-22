module.exports = (on, config) => {
    // require('cypress-log-to-output').install(on, (type, event) => {
    //   if (event.level === 'info' || event.type === 'info') {
    //     return true
    //   }
    //   return false
    // });
    require('cypress-terminal-report/src/installLogsPrinter')(on);
};
