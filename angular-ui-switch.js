angular.module('uiSwitch', []).directive('switch', function () {
    return {
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            ngDisabled: '=',
            ngModel: '=',
            classes: '=',
            on: '=',
            off: '=',
            id: '=',
            name: '='
        },
        template: `
            <span class="switch {{classes}}"
                  ng-click="activated = !activated"
                  ng-class="{ checked: ngModel, disabled: ngDisabled }">
                <small></small>
                <input id="{{id}}"
                       name="{{name}}"
                       type="checkbox"
                       style="display: none"
                       ng-disabled="ngDisabled"
                       ng-model="ngModel">
                <span class="switch-text">
                    <span class="on" ng-if="on" ng-bind="on"></span>
                    <span class="off" ng-if="off" ng-bind="off"></span>
                </span>
            </span>
        `
    };
});
