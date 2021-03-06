/**
 * Wave effect
 * A directive that shows a growing circle in the background
 * of components it's attached to
 * @author Zach Barnes
 * @created 07/11/2016
 */
module Thread.Components {
    export class waveEffect implements ng.IDirective {
        restrict = 'A';
        static $inject = ['$timeout'];

        constructor(private $timeout: ng.ITimeoutService) {

        }

        link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any) => {
            if (attrs.hasOwnProperty('noWave')) {
                return;
            }

            let waveEl;
            let rawElement = element[0];
            let isFab = false;
            let removeActiveTriggered = false;
            let removeActiveTimeout = null;

            this.$timeout(() => {
                let width;
                let height;

                waveEl = angular.element('<span class="wave-effect"></span>');

                if (element.hasClass('c-button--fab') ||
                    element.hasClass('c-button--fab-mini') ||
                    element.hasClass('c-button--icon')) {
                    waveEl.addClass('wave-effect--fab');
                    isFab = true;
                }

                if (isFab) {
                    //circle, height must match the width
                    width = rawElement.offsetWidth;
                    height = rawElement.offsetWidth;
                } else {
                    width = Math.ceil(rawElement.offsetWidth);
                    height = Math.ceil(rawElement.offsetWidth);
                }

                waveEl[0].style.width = `${width}px`;
                waveEl[0].style.height = `${height}px`;

                element.append(waveEl);
            });

            angular.element(document.querySelector('body')).on('mouseup', onMouseUp);

            element.on('mousedown', (e) => {
                e.stopPropagation();
                e.preventDefault();
                if (e.which === 1) {
                    if (!isFab) {
                        let pos = { left: e.clientX, top: e.clientY };
                        let parentPos = e.target.getBoundingClientRect();

                        waveEl[0].style.left = `${pos.left - parentPos.left}px`;
                        waveEl[0].style.top = `${pos.top - parentPos.top}px`;
                    }

                    waveEl.removeClass('has-focus');
                    waveEl.addClass('is-active');

                    removeActiveTimeout = this.$timeout(() => {
                        if (removeActiveTriggered) {
                            removeActiveTriggered = false;
                            waveEl.removeClass('is-active');
                        }
                        removeActiveTimeout = null;
                    }, 300);
                }
            });

            element.on('focus', () => {

                waveEl[0].style.left = '';
                waveEl[0].style.top = '';

                if (!element.hasClass('is-active')) {
                    waveEl.addClass('has-focus');
                } else {
                    rawElement.blur();
                }
            });

            element.on('blur', () => {
                waveEl.removeClass('has-focus');
            });

            function onMouseUp() {
                if (removeActiveTimeout) {
                    removeActiveTriggered = true;
                } else {
                    waveEl.removeClass('is-active');
                }
                rawElement.blur();
            }

            scope.$on('$destroy', () => {
                if(waveEl) {
                    waveEl.remove();
                }
                angular.element(document.querySelector('body')).off('mouseup', onMouseUp);
            });
        };

        static factory() : ng.IDirectiveFactory {
            var directive = ($timeout: ng.ITimeoutService) => new Thread.Components.waveEffect($timeout);
            return directive;
        }

    }

    export class waveEffectButton extends waveEffect {
        restrict = 'C';
        static $inject = ['$timeout'];

        static factory() : ng.IDirectiveFactory {
            var directive = ($timeout: ng.ITimeoutService) => new Thread.Components.waveEffectButton($timeout);
            return directive;
        }
    }
}

angular.module('thread.waveEffect', []).directive('waveEffect', Thread.Components.waveEffect.factory());
angular.module('thread.waveEffect').directive('cButton', ['$timeout', Thread.Components.waveEffectButton.factory()]);

