import $ from 'jquery';

const App = {
    init() {
        this.header();
        this.search();
        this.catalog();
    },

    header() {
        if ($(document).width() <= 820) {
            $(document).on('click', '.nav-main__link', function (e) {
                e.preventDefault();

                const thisClick = $(this).next('.nav-main__dropdown');

                $(this).toggleClass('on');
                $(this).parents('.js-header-main-menus').toggleClass('on');
                thisClick.toggleClass('on');
            });

            $(document).on('click', '.js-main-nav-link--forward', function (e) {
                e.preventDefault();

                const thisClick2 = $(this).next('.nav-dropdown--sub');

                $(this).toggleClass('on');
                thisClick2.toggleClass('on');
            });
        } else {
            $(document).on('mouseover', '.js-header-main-menus', function () {
                const thisClick = $(this).find('.nav-main__dropdown');
                const parentClick = $('.js-header-main-menus').find(
                    '.nav-main__dropdown'
                );

                if (parentClick.hasClass('on')) {
                    parentClick.removeClass('on');
                    $('.js-header-main-menus').removeClass('on');
                }

                $(this).addClass('on');
                thisClick.addClass('on');
            });

            $(document).on('mousemove', function (e) {
                // событие клика по веб-документу
                const div = $('.js-header-main-menus.on'); // тут указываем ID элемента
                if (
                    !div.is(e.target) && // если клик был не по нашему блоку
                    div.has(e.target).length === 0
                ) {
                    $('.js-header-main-menus').removeClass('on');
                    $('.js-header-main-menus')
                        .find('.nav-main__dropdown')
                        .removeClass('on');
                }
            });

            $(document).on('click', '.nav-tabs__item', function () {
                const navTab = $(this).attr('data-tab');

                if (
                    $('.nav-tabs__item').hasClass('on') ||
                    $('.nav-tabs__item').hasClass('default')
                ) {
                    $('.nav-tabs__item').removeClass('on');
                    $('.nav-dropdown__tab').removeClass('on').hide();
                }

                $('.nav-tabs__item').removeClass('default');
                $(this).addClass('on');
                $('#nav-tab-' + navTab)
                    .addClass('on')
                    .show();
            });
        }

        $(document).on('click', '.hamburger', function () {
            $(this).toggleClass('is-active');
            $('.nav-main').toggleClass('is-active');
        });
    },
    search() {
        // Открываем список
        $('.search__cat_select').on('click', function () {
            $('.search__cat_list').toggle();
        });

        // Сбрасываем выбранную категорию
        $('.search__cat_list_item_default').on('click', function () {
            $('.search__cat_value').text('Все разделы');
            $('.search__cat_list').hide();
        });

        // Открываем список
        $(document).on('click', '.search__cat_list_item', function () {
            // Запоминаем объект по которому кликнули
            const catItem = $(this);
            // Запоминаем текс в объекте по которому кликнули
            const catItemTitle = $(this).text();

            // Проверяем есть ли класс у выбранного объекта
            if (catItem.hasClass('checked')) {
                return false;
            } else {
                // Удаляем у предыдущего
                $('.search__cat_list_item').removeClass('checked');
            }
            // Добавляем выбранному объекту
            catItem.addClass('checked');
            // Меняем текст у селекта
            $('.search__cat_value').text(catItemTitle);
            // Скрываем список
            $('.search__cat_list').hide();
        });

        $('.js-search-input').on('keyup', function () {
            let search = $('.js-search-input').val();
            if (search.length > 0) {
                $('.search__form_close').hide();
                $('.js-search-result').hide();
            }
            if (search.length < 3) {
                return false;
            }

            $('.js-search-result-error ins').text(search);

            $('.search__form_close').show();
            $('.js-search-result').show();

            $('.js-search-result-error').show();

            setTimeout(() => {
                $('.js-load').hide();
            }, 1500);

            if (search === 'success') {
                $('.js-search-result-error').hide();
                $('.search__result__terms_item').show();
                $('.search__result__product').show();
                // $('.search__result__wrap_footer').show();
            } else {
                $('.search__result__terms_item').hide();
                $('.search__result__product').hide();
            }
        });

        $('.search__form_close').on('click', function () {
            $('.search__form_close').hide();
            $('.js-search-result').hide();
            $('.js-search-input').val('').change();
        });

        // Определяем высоту контейнера и высоту объекта
        // function is_shown(target) {
        //     var wt = $('.search__result__products').scrollTop();
        //     var wh = $('.search__result__products').height();
        //     var eh = $(target).outerHeight();
        //     var et = $(target).offset().top - 100;
        //
        //     if (wt + wh >= et && wt + wh - eh * 2 <= et + (wh - eh)){
        //         return true;
        //     } else {
        //         return false;
        //     }
        // }

        // При прокрутке до объекта показываем событие
        // $('.search__result__products').scroll(function(){
        //     console.log('---', 111);
        //     if (is_shown('.search__result__product_hidden')) {
        //         console.log(true);
        //     }
        // });

        $('.js-mobile-search--show').on('click', function () {
            $('.search').toggle();
        });
    },
    catalog() {
        $('.catalog-filter__btn').on('click', function () {
            $('.catalog-filter').addClass('is-visible');
        });
        $('.catalog-filter__footer a').on('click', function () {
            $('.catalog-filter').removeClass('is-visible');
        });
        $('.catalog-filter__subtitle').on('click', function () {
            $(this).toggleClass('is-open');
            $(this).next('.catalog-filter__content').slideToggle(300);
        });
    },
};

App.define = function (namespace) {
    var parts = namespace.split('.'),
        parent = App,
        i;

    //Убрать начальный префикс если это являетсся глобальной переменной
    if (parts[0] == 'App') {
        parts = parts.slice(1);
    }

    //Если в глобальном объекте нет свойства - создать его.
    for (var i = 0; i < parts.length; i++) {
        if (typeof parent[parts[i]] == 'undefined') {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};

$(function () {
    App.init();
    // svg4everybody();
});
