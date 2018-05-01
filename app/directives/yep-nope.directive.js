function YepNopeDirective() {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.check, function (val) {
        var words = val ? 'Yepss' : 'Nopess';
        element.text(words);
      });
    }
  }
}

angular.module('dashboard').directive('yepNope', YepNopeDirective);