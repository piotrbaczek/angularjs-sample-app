angular.module('SampleApp').service('randomString', function () {
    this.generateString = function () {
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (let i = 0; i < 23; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    };
});
