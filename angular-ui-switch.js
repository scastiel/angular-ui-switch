angular.module('uiSwitch', []).directive('switch', function () {
    return {
        restrict: 'E',
        scope: {
            ngDisabled: '=',
            classes: '=',
            on: '=',
            off: '=',
            id: '=',
            name: '='
        },
        template: `
            <span class="switch {{classes}}"
                  ng-click="toggle()"
                  ng-class="{ checked: activated, disabled: ngDisabled }">
                <small></small>
                <input id="{{id}}"
                       name="{{name}}"
                       type="checkbox"
                       style="display: none"
                       ng-disabled="ngDisabled"
                       ng-model="activated">
                <span class="switch-text">
                    <span class="on" ng-if="on" ng-bind="on"></span>
                    <span class="off" ng-if="off" ng-bind="off"></span>
                </span>
            </span>
        `,
        require: '?ngModel',
        link(scope, element, attrs, ngModel) {
            scope.activated = false;
            if (!ngModel) {
                return;
            }
            ngModel.$render = function() {
                scope.activated = ngModel.$viewValue;
            };
            scope.$watch('activated', (newValue, oldValue) => {
                if (newValue !== oldValue) {
                    ngModel.$setViewValue(newValue);
                }
            });
            scope.toggle = () => {
                if (!scope.ngDisabled) {
                    scope.activated = !scope.activated;
                }
            }
        }
    };
});
