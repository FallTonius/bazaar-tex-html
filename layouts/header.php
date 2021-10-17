<header id="header" class="header">
    <div class="header-top">
        <div class="header__in">
            <div class="header__city city">
                <span class="city__text">Ваш город:</span>
                <a href="/cities" class="city__link">Москва</a>
            </div>
            <div class="conditions header__conditions">
                <ul class="conditions__list">
                    <li class="conditions__item">
                        <a href="/page/usloviya_dostavki" class="conditions__link">Условия доставки</a>
                    </li>
                    <li class="conditions__item">
                        <a href="/page/usloviya_oplaty" class="conditions__link">Условия оплаты</a>
                    </li>
                    <li class="conditions__item">
                        <a href="/contacts" class="conditions__link">Контакты</a>
                    </li>
                </ul>
            </div>
            <a href="tel:8 800 100-87-15" class="phone header__phone">8 800 100-87-15</a>
        </div>
    </div>
    <div class="header-main">
        <div class="header__bottom">
            <div class="header__in">
                <div class="header__nav">
                    <div class="hamburger js-hamburger"><span></span></div>  
                </div>
                <div class="header__logo logo"><svg><use xlink:href="assets/images/sprites/sprite-multi.svg#logo"/></svg></div>
                <div class="header__search search">
                    <form class="search__form">
                        <div class="search__cat">
                            <div class="search__cat_select">
                                <span class="search__cat_value">Все разделы</span>
                            </div>
                            <div class="search__cat_list" style="display: none;">
                                <div class="search__cat_list_item checked">Все разделы</div>
                                <div class="search__cat_list_item">Новинки</div><div class="search__cat_list_item">Ткани</div>
                                <div class="search__cat_list_item">Швейная фурнитура</div>
                                <div class="search__cat_list_item">Остатки тканей</div>
                                <div class="search__cat_list_item">Распродажа</div>
                            </div>
                        </div> 
                        <input placeholder="Поиск по 2543 товарам" type="text" autocomplete="off" value="" class="search__field js-search-input">
                        <button type="submit" class="search__btn"><svg><use xlink:href="assets/images/sprites/sprite-mono.svg#icon--search-btn"/></svg></button> 
                        <div class="search__form_close"></div>
                    </form>
                </div>
                <div class="header__user-nav user-nav">
                    <a class="user-nav__item user-nav__item--login">
                        <div class="user-nav__icon"><svg><use xlink:href="assets/images/sprites/sprite-mono.svg#icon--user-login"/></svg></div>
                        <div class="user-nav__text">Вход</div>
                    </a>
                    <div class="user-nav__item user-nav__item--search">
                        <div class="user-nav__icon"><svg><use xlink:href="assets/images/sprites/sprite-mono.svg#icon--search"/></svg></div>
                        <div class="user-nav__text">Поиск</div>
                    </div>
                    <a class="user-nav__item user-nav__item--favorite">
                        <div class="user-nav__icon"><svg><use xlink:href="assets/images/sprites/sprite-mono.svg#icon--user-favorite"/></svg></div>
                        <div class="user-nav__text">Избранное</div>
                    </a>
                    <a class="user-nav__item user-nav__item--cart">
                        <div class="user-nav__icon">
                            <svg><use xlink:href="assets/images/sprites/sprite-mono.svg#icon--user-cart"/></svg>
                            <div class="user-nav__icon-count is-active"><span>4</span></div>
                        </div>
                        <div class="user-nav__text">Корзина</div>
                    </a>
                </div>
            </div>
        </div>
        <nav class="nav-main">
        </nav>
    </div>
    <div class="header-main--clone"></div>
</header>
