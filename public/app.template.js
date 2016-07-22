angular.module('app.templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('pages/components/button/button.html','<div class="button__scope">\r\n    <div class="c-app-bar c-app-bar--orange">\r\n        <div class="c-app-bar__left">\r\n            <button class="c-button c-button--icon"><i class="mi">menu</i></button>\r\n            <span class="c-app-bar__title">Buttons</span>\r\n        </div>\r\n    </div>\r\n    <div class="l-page">\r\n        <div class="component">\r\n\r\n            <h2 class="component__title">Shapes</h2>\r\n\r\n            <div class="component__body">\r\n                <div class="component__section component__section--shapes">\r\n                    <h2>Shapes</h2>\r\n                    <button class="c-button">Base</button>\r\n                    <button class="c-button c-button--raised">Raised</button>\r\n                    <button class="c-button c-button--huge">Huge</button>\r\n                    <button class="c-button c-button--icon"><i class="mi">menu</i></button>\r\n                    <button class="c-button c-button--fab"><i class="mi">add</i></button>\r\n                    <button class="c-button c-button--fab-mini"><i class="mi">add</i></button>\r\n                </div>\r\n\r\n                <div class="component__section component__section--colors">\r\n                    <h2>Colors</h2>\r\n                    <button class="c-button">Base</button>\r\n                    <button class="c-button c-button--primary">Primary</button>\r\n                    <button class="c-button c-button--primary c-button--raised">Primary raised</button>\r\n                    <button class="c-button c-button--secondary-filled">secondary filled</button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class="component__code">\r\n                <h2>Code</h2>\r\n                <pre>\r\n                    <code class="language-markup">\r\n                        &lt;button class="c-button">Text&lt;/button>\r\n                    </code>\r\n                </pre>\r\n            </div>\r\n\r\n            <div class="component__options">\r\n                <table>\r\n                    <thead>\r\n                    <tr>\r\n                        <th>Class Name</th>\r\n                        <th>Usage</th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <td>.c-button</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>.c-button--raised</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>.c-button--huge</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>.c-button--icon</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>.c-button--fab</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>.c-button--fab-mini</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>.c-button--primary</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>.c-button--secondary-filled</td>\r\n                        <td>\r\n                            <!-- Description here -->\r\n                        </td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>');}]);