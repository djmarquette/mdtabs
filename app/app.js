/// <reference path="../typings/angularjs/angular.d.ts" />
(function () {
    angular.module('vendor', [
         'ngMaterial'
        // ,'ngMessages',
        // ,'ui.mask'
    ]);
    angular.module('mis', [
        // 'app.environment',
        // 'app.common',
        // 'app.validators',
        // 'app.lookupServices',
        // 'app.reportServices',
        // 'app.candidate',
        // 'app.candidateServices'
    ]);
    angular.module('app', [
        'vendor',
        'mis'
    ])
        .config(['$mdThemingProvider', function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('light-blue', {
                'default': '600'
            })
                .accentPalette('amber')
                .warnPalette('red');
        }]);
})();
//# sourceMappingURL=app.js.map