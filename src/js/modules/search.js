import $ from 'jquery';

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

    console.log();

    $('.js-search-result-error ins').text(search);

    $('.search__form_close').show();
    $('.js-search-result').show();
    // $(".js-load").show();

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
