Giffy
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$validationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $validationProvider) {
        $locationProvider.html5Mode(true);
        $stateProvider

            //------------------------------
            // PAGES
            //------------------------------

            .state('pages', {
                url: '',
                templateUrl: appBaseUrl + 'pages/common/views/common.html'
            })


            //------------------------------
            // LEAGUE
            //------------------------------
            .state('pages.league', {
                url: '/league/:slug',
                params: {
                    slug: { squash: true, value: null }
                },
                templateUrl: appBaseUrl + 'pages/league/views/league.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                files: [
                                    'wwwroot/vendors/fileinput/fileinput.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                ]
                            }
                        ])
                    }]
                }
            })

            //------------------------------
            // TEAM
            //------------------------------
            .state('pages.team', {
                url: '/team/:slug',
                params: {
                    slug: { squash: true, value: null }
                },
                templateUrl: appBaseUrl + 'pages/team/views/team.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                files: [
                                    'wwwroot/vendors/fileinput/fileinput.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                ]
                            }
                        ])
                    }]
                }
            })


            //------------------------------
            // PLAYER
            //------------------------------
            .state('pages.player', {
                url: '/player/:slug',
                params: {
                    slug: { squash: true, value: null }
                },
                templateUrl: appBaseUrl + 'pages/player/views/player.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                files: [
                                    'wwwroot/vendors/fileinput/fileinput.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                ]
                            }
                        ])
                    }]
                }
            })


            //------------------------------
            // MANAGEMENT
            //------------------------------
            .state('management', {
                url: '/management',
                templateUrl: appBaseUrl + 'pages/management/common/views/manage.html'
            })

            .state('management.posts', {
                url: '/posts/{filter}/:slug',
                params: {
                    filter: { squash: true, value: null },
                    slug: { squash: true, value: null }
                },
                templateUrl: appBaseUrl + 'pages/management/posts/views/posts.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level',
                                files: [
                                    'wwwroot/vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    //'wwwroot/vendors/bower_components/mediaelement/build/mediaelement-and-player.min.js',
                                    'wwwroot/vendors/bower_components/lightgallery/dist/js/lg-thumbnail.min.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                    'wwwroot/vendors/bower_components/jquery.gifplayer/jquery.gifplayer.min.js',
                                    'wwwroot/vendors/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
                                    'wwwroot/vendors/bower_components/jquery_scrollIntoView/jquery.scrolling.min.js',
                                    'wwwroot/vendors/fileinput/fileinput.min.js'
                                ]
                            }
                        ])
                    }]
                }
            })

            //------------------------------
            // ACCOUNT
            //------------------------------

            .state('account', {
                url: '/account/:action',
                templateUrl: appBaseUrl + 'pages/account/views/login.html'
            })

            .state('associate', {
                url: '/associate',
                templateUrl: appBaseUrl + 'pages/account/views/associate.html'
            })

            .state('pages.profile', {
                url: '/profile/:username',
                templateUrl: appBaseUrl + 'pages/account/views/profile.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                files: [
                                    'wwwroot/vendors/bower_components/lightgallery/dist/js/lg-thumbnail.min.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                    'wwwroot/vendors/fileinput/fileinput.min.js'
                                ]
                            }
                        ])
                    }]
                }
            })

            .state ('pages.profile.about', {
                url: '/about',
                templateUrl: appBaseUrl + 'pages/account/views/profile/about.html'
            })

            .state('pages.profile.connections', {
                url: '/connections',
                templateUrl: appBaseUrl + 'pages/account/views/profile/connections.html'
            })

            .state('pages.profile.photos', {
                url: '/photos',
                templateUrl: appBaseUrl + 'pages/account/views/profile/photos.html'
            })

            .state('pages.profile.posts', {
                url: '/posts/{filter}',
                params: {
                    filter: { squash: true, value: null },
                },
                templateUrl: appBaseUrl + 'pages/account/views/profile/posts.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level',
                                files: [
                                    'wwwroot/vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    //'wwwroot/vendors/bower_components/mediaelement/build/mediaelement-and-player.min.js',
                                    'wwwroot/vendors/bower_components/lightgallery/dist/js/lg-thumbnail.min.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                    'wwwroot/vendors/bower_components/jquery.gifplayer/jquery.gifplayer.min.js',
                                    'wwwroot/vendors/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
                                    'wwwroot/vendors/bower_components/jquery_scrollIntoView/jquery.scrolling.min.js',
                                    'wwwroot/vendors/fileinput/fileinput.min.js'
                                ]
                            }
                        ])
                    }]
                }
            })


            //------------------------------
            // GAG
            //------------------------------
            .state('pages.gag', {
                url: '/gag/:slug',
                params: {
                    slug: { squash: true, value: null }
                },
                templateUrl: appBaseUrl + 'pages/wall/views/gag.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level',
                                files: [
                                    'wwwroot/vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'wwwroot/vendors/bower_components/mediaelement/build/mediaelement-and-player.min.js',
                                    'wwwroot/vendors/bower_components/lightgallery/dist/js/lg-thumbnail.min.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                    'wwwroot/vendors/bower_components/jquery.gifplayer/jquery.gifplayer.min.js',
                                    'wwwroot/vendors/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
                                    'wwwroot/vendors/bower_components/jquery_scrollIntoView/jquery.scrolling.min.js',
                                    'wwwroot/vendors/bower_components/ng-tags-input/ng-tags-input.min.js',
                                    'wwwroot/vendors/fileinput/fileinput.min.js'
                                ]
                            }
                        ], { cache: false, timeout: 5000 })
                    }]
                }
            })


            //------------------------------
            // WALL
            //------------------------------
            .state('pages.wall', {
                url: '/{filter}/:slug',
                params: {
                    filter: { squash: true, value: null },
                    slug: { squash: true, value: null }
                },
                templateUrl: appBaseUrl + 'pages/wall/views/wall.html',
                resolve: {
                    loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level',
                                files: [
                                    'wwwroot/vendors/bower_components/autosize/dist/autosize.min.js'
                                ]
                            },
                            {
                                name: 'vendors',
                                files: [
                                    'wwwroot/vendors/bower_components/mediaelement/build/mediaelement-and-player.min.js',
                                    'wwwroot/vendors/bower_components/lightgallery/dist/js/lg-thumbnail.min.js',
                                    'wwwroot/vendors/bower_components/angular-file-upload/dist/angular-file-upload.min.js',
                                    'wwwroot/vendors/bower_components/jquery.gifplayer/jquery.gifplayer.min.js',
                                    'wwwroot/vendors/bower_components/ngInfiniteScroll/build/ng-infinite-scroll.min.js',
                                    'wwwroot/vendors/bower_components/jquery_scrollIntoView/jquery.scrolling.min.js',
                                    'wwwroot/vendors/bower_components/ng-tags-input/ng-tags-input.min.js',
                                    'wwwroot/vendors/fileinput/fileinput.min.js'
                                ]
                            }
                        ], { cache: false, timeout: 5000 })
                    }]
                }
            });

        $httpProvider.interceptors.push('authInterceptorService');

        $validationProvider.showSuccessMessage = false;
        $validationProvider.setErrorHTML(function (msg) {
            return '<small class="help-block">' + msg + '</small>';
        });
        $validationProvider
            .setExpression({
                username: /^(?!\d)(?!.*-.*-)(?!.*-$)(?!-)[a-zA-Z0-9-]{4,30}$/
            })
            .setDefaultMsg({
                required: {
                    error: 'Should not empty'
                },
                email: {
                    error: 'Invalid email'
                },
                minlength: {
                    error: 'Too short'
                },
                username: {
                    error: 'Invalid username'
                }
            });

        angular.extend($validationProvider, {
            validCallback: function (element) {
                $(element).closest('.input-group').addClass('has-success');
                $(element).closest('.input-group').removeClass('has-error');
                $(element).closest('.input-group').find('small').remove();
            },
            invalidCallback: function (element) {
                $(element).closest('.input-group').addClass('has-error');
                $(element).closest('.input-group').removeClass('has-success');
                var fgLine = $(element).closest('.fg-line');
                var small = fgLine.find('small');
                $(element).closest('.input-group').find('small').remove();
                fgLine.after(small);
            }
        });
    }]);
