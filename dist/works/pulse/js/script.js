$(document).ready(function(){
    
    // Carousel
    
    $('.carousel__init').slick({
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/icons/left.svg" alt="slide"</button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/icons/right.svg" alt="slide"</button>',
        autoplay: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ]
    });


    // Catalog 

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    
    function toggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');

            })
        })
    };
    
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
    
    // Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__cancel').on('click', function() {
        $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    })

    // Validate


    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите ваше имя",
                    minlength: "Имя должно состоять от {0} символов",
                },
                phone: "Введите ваш номер телефона",
                email: {
                    required: "Введите вашу почту",
                    email: "Некорректный адрес почты"
                }
            }
        })
    };
    
    validateForms('#consultation-form');
    validateForms("#consultation form");
    validateForms("#order form");

    // Masked input

    $("#phone, #consultation-phone, #order-phone").mask("+38(999)-999-99-99");

    // Send mail

    $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultation, #order').fadeOut("slow");
            $('.overflay, #thanks').fadeIn("slow");

            $('form').trigger('reset');
        });
        return false;
    })

    // Page up arrow

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600){
            $('.page-up').fadeIn();
        } else {
            $('.page-up').fadeOut();
        }
    });

    // smooth scroll
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function(){
                window.location.hash = hash;
            });
        }
    });

    // Wow.js connection
    new WOW().init();
});