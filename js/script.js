$('.region-slide').slick({
    infinite: false,
    arrow: true,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                variableWidth: false
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                variableWidth: false
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                variableWidth: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
                slidesToScroll: 1
            }
        }
    ]
});

$('.main-map-obl').on('click', function () {
    $('.modal').show();
});
$('.modal .btn-close').on('click', function () {
    $('.modal').hide();
});

let astana = ['г.Нур-Султан', '0,8 тыс.км2', '1 166,0 тыс.чел', '563,3 тыс.чел', '659$'];
$('#astana').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/astana.png');
    $('#region_name').text(astana[0]);
    $('#area_land').text(astana[1]);
    $('#population').text(astana[2]);
    $('#employed_economy').text(astana[3]);
    $('#average_salary').text(astana[4]);
});
$('#astana_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/astana.png');
    $('#region_name').text(astana[0]);
    $('#area_land').text(astana[1]);
    $('#population').text(astana[2]);
    $('#employed_economy').text(astana[3]);
    $('#average_salary').text(astana[4]);
});

let almaty = ['г.Алматы', '0,7 тыс.км2', '1 955,0 тыс.чел', '959,0 тыс.чел', '556$'];
$('#almaty').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/almaty.png');
    $('#region_name').text(almaty[0]);
    $('#area_land').text(almaty[1]);
    $('#population').text(almaty[2]);
    $('#employed_economy').text(almaty[3]);
    $('#average_salary').text(almaty[4]);
});
$('#almaty_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/almaty.png');
    $('#region_name').text(almaty[0]);
    $('#area_land').text(almaty[1]);
    $('#population').text(almaty[2]);
    $('#employed_economy').text(almaty[3]);
    $('#average_salary').text(almaty[4]);
});

let shymkent = ['г.Шымкент', '1,2 тыс.км2', '1 057,5 тыс.чел', '409,0 тыс.чел', '383$'];
$('#shymkent').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/shymkent.png');
    $('#region_name').text(shymkent[0]);
    $('#area_land').text(shymkent[1]);
    $('#population').text(shymkent[2]);
    $('#employed_economy').text(shymkent[3]);
    $('#average_salary').text(shymkent[4]);
});
$('#shymkent_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/shymkent.png');
    $('#region_name').text(shymkent[0]);
    $('#area_land').text(shymkent[1]);
    $('#population').text(shymkent[2]);
    $('#employed_economy').text(shymkent[3]);
    $('#average_salary').text(shymkent[4]);
});

let akmola = ['Акмолинская область', '146,2 тыс.км2', '735,3 тыс.чел', '397,8 тыс.чел', '380$'];
$('#akmola').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/akmola.png');
    $('#region_name').text(akmola[0]);
    $('#area_land').text(akmola[1]);
    $('#population').text(akmola[2]);
    $('#employed_economy').text(akmola[3]);
    $('#average_salary').text(akmola[4]);
});
$('#akmola_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/akmola.png');
    $('#region_name').text(akmola[0]);
    $('#area_land').text(akmola[1]);
    $('#population').text(akmola[2]);
    $('#employed_economy').text(akmola[3]);
    $('#average_salary').text(akmola[4]);
});

let aktobe = ['Актюбинская область', '300,6 тыс.км2', '890,2 тыс.чел', '414,2 тыс.чел', '413$'];
$('#aktobe').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/aktobe.png');
    $('#region_name').text(aktobe[0]);
    $('#area_land').text(aktobe[1]);
    $('#population').text(aktobe[2]);
    $('#employed_economy').text(aktobe[3]);
    $('#average_salary').text(aktobe[4]);
});
$('#aktobe_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/aktobe.png');
    $('#region_name').text(aktobe[0]);
    $('#area_land').text(aktobe[1]);
    $('#population').text(aktobe[2]);
    $('#employed_economy').text(aktobe[3]);
    $('#average_salary').text(aktobe[4]);
});

let almObl = ['Алматинская область', '223,9 тыс.км2', '2 071,4 тыс.чел', '975,1 тыс.чел', '378$'];
$('#alm_obl').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/alm_obl.png');
    $('#region_name').text(almObl[0]);
    $('#area_land').text(almObl[1]);
    $('#population').text(almObl[2]);
    $('#employed_economy').text(almObl[3]);
    $('#average_salary').text(almObl[4]);
});
$('#alm_obl_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/alm_obl.png');
    $('#region_name').text(almObl[0]);
    $('#area_land').text(almObl[1]);
    $('#population').text(almObl[2]);
    $('#employed_economy').text(almObl[3]);
    $('#average_salary').text(almObl[4]);
});

let atyrau = ['Атырауская область', '118,6 тыс.км2', '652,5 тыс.чел', '313,7 тыс.чел', '867$'];
$('#atyrau').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/atyrau.png');
    $('#region_name').text(atyrau[0]);
    $('#area_land').text(atyrau[1]);
    $('#population').text(atyrau[2]);
    $('#employed_economy').text(atyrau[3]);
    $('#average_salary').text(atyrau[4]);
});
$('#atyrau_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/atyrau.png');
    $('#region_name').text(atyrau[0]);
    $('#area_land').text(atyrau[1]);
    $('#population').text(atyrau[2]);
    $('#employed_economy').text(atyrau[3]);
    $('#average_salary').text(atyrau[4]);
});

let wko = ['Западно-Казахстанская область', '151,3 тыс.км2', '659,9 тыс.чел', '320,8 тыс.чел', '445$'];
$('#wko').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/wko.png');
    $('#region_name').text(wko[0]);
    $('#area_land').text(wko[1]);
    $('#population').text(wko[2]);
    $('#employed_economy').text(wko[3]);
    $('#average_salary').text(wko[4]);
});
$('#wko_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/wko.png');
    $('#region_name').text(wko[0]);
    $('#area_land').text(wko[1]);
    $('#population').text(wko[2]);
    $('#employed_economy').text(wko[3]);
    $('#average_salary').text(wko[4]);
});

let zhambyl = ['Жамбылская область', '144,3 тыс.км2', '1 136,9 тыс.чел', '502,4 тыс.чел', '351$'];
$('#zhambyl').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/zhambyl.png');
    $('#region_name').text(zhambyl[0]);
    $('#area_land').text(zhambyl[1]);
    $('#population').text(zhambyl[2]);
    $('#employed_economy').text(zhambyl[3]);
    $('#average_salary').text(zhambyl[4]);
});
$('#zhambyl_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/zhambyl.png');
    $('#region_name').text(zhambyl[0]);
    $('#area_land').text(zhambyl[1]);
    $('#population').text(zhambyl[2]);
    $('#employed_economy').text(zhambyl[3]);
    $('#average_salary').text(zhambyl[4]);
});

let karagandy = ['Карагандинская область', '428,0 тыс.км2', '1 376,2 тыс.чел', '635,0 тыс.чел', '468$'];
$('#karagandy').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/karagandy.png');
    $('#region_name').text(karagandy[0]);
    $('#area_land').text(karagandy[1]);
    $('#population').text(karagandy[2]);
    $('#employed_economy').text(karagandy[3]);
    $('#average_salary').text(karagandy[4]);
});
$('#karagandy_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/karagandy.png');
    $('#region_name').text(karagandy[0]);
    $('#area_land').text(karagandy[1]);
    $('#population').text(karagandy[2]);
    $('#employed_economy').text(karagandy[3]);
    $('#average_salary').text(karagandy[4]);
});

let kostanay = ['Костанайская область', '196,0 тыс.км2', '866,2 тыс.чел', '462,9 тыс.чел', '398$'];
$('#kostanay').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/kostanay.png');
    $('#region_name').text(kostanay[0]);
    $('#area_land').text(kostanay[1]);
    $('#population').text(kostanay[2]);
    $('#employed_economy').text(kostanay[3]);
    $('#average_salary').text(kostanay[4]);
});
$('#kostanay_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/kostanay.png');
    $('#region_name').text(kostanay[0]);
    $('#area_land').text(kostanay[1]);
    $('#population').text(kostanay[2]);
    $('#employed_economy').text(kostanay[3]);
    $('#average_salary').text(kostanay[4]);
});

let kyzylorda = ['Кызылординская область', '226,1 тыс.км2', '810,1 тыс.чел', '325,0 тыс.чел', '438$'];
$('#kyzylorda').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/kyzylorda.png');
    $('#region_name').text(kyzylorda[0]);
    $('#area_land').text(kyzylorda[1]);
    $('#population').text(kyzylorda[2]);
    $('#employed_economy').text(kyzylorda[3]);
    $('#average_salary').text(kyzylorda[4]);
});
$('#kyzylorda_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/kyzylorda.png');
    $('#region_name').text(kyzylorda[0]);
    $('#area_land').text(kyzylorda[1]);
    $('#population').text(kyzylorda[2]);
    $('#employed_economy').text(kyzylorda[3]);
    $('#average_salary').text(kyzylorda[4]);
});

let mangystau = ['Мангистауская область', '165,6 тыс.км2', '712,0 тыс.чел', '304,1 тыс.чел', '741$'];
$('#mangystau').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/mangystau.png');
    $('#region_name').text(mangystau[0]);
    $('#area_land').text(mangystau[1]);
    $('#population').text(mangystau[2]);
    $('#employed_economy').text(mangystau[3]);
    $('#average_salary').text(mangystau[4]);
});
$('#mangystau_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/mangystau.png');
    $('#region_name').text(mangystau[0]);
    $('#area_land').text(mangystau[1]);
    $('#population').text(mangystau[2]);
    $('#employed_economy').text(mangystau[3]);
    $('#average_salary').text(mangystau[4]);
});

let turkestan = ['Туркестанская область', '116,3 тыс.км2', '2 036,0 тыс.чел', '781,5 тыс.чел', '405$'];
$('#turkestan').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/turkestan.png');
    $('#region_name').text(turkestan[0]);
    $('#area_land').text(turkestan[1]);
    $('#population').text(turkestan[2]);
    $('#employed_economy').text(turkestan[3]);
    $('#average_salary').text(turkestan[4]);
});
$('#turkestan_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/turkestan.png');
    $('#region_name').text(turkestan[0]);
    $('#area_land').text(turkestan[1]);
    $('#population').text(turkestan[2]);
    $('#employed_economy').text(turkestan[3]);
    $('#average_salary').text(turkestan[4]);
});

let pavlodar = ['Павлодарская область', '124,8 тыс.км2', '751,4 тыс.чел', '383,6 тыс.чел', '426$'];
$('#pavlodar').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/pavlodar.png');
    $('#region_name').text(pavlodar[0]);
    $('#area_land').text(pavlodar[1]);
    $('#population').text(pavlodar[2]);
    $('#employed_economy').text(pavlodar[3]);
    $('#average_salary').text(pavlodar[4]);
});
$('#pavlodar_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/pavlodar.png');
    $('#region_name').text(pavlodar[0]);
    $('#area_land').text(pavlodar[1]);
    $('#population').text(pavlodar[2]);
    $('#employed_economy').text(pavlodar[3]);
    $('#average_salary').text(pavlodar[4]);
});

let nko = ['Северо-Казахстанская область', '98,0 тыс.км2', '545,5 тыс.чел', '290,6 тыс.чел', '371$'];
$('#nko').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/nko.png');
    $('#region_name').text(nko[0]);
    $('#area_land').text(nko[1]);
    $('#population').text(nko[2]);
    $('#employed_economy').text(nko[3]);
    $('#average_salary').text(nko[4]);
});
$('#nko_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/nko.png');
    $('#region_name').text(nko[0]);
    $('#area_land').text(nko[1]);
    $('#population').text(nko[2]);
    $('#employed_economy').text(nko[3]);
    $('#average_salary').text(nko[4]);
});

let eko = ['Восточно-Казахстанская область', '283,2 тыс.км2', '1 366,6 тыс.чел', '665,8 тыс.чел', '430$'];
$('#eko').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/eko.png');
    $('#region_name').text(eko[0]);
    $('#area_land').text(eko[1]);
    $('#population').text(eko[2]);
    $('#employed_economy').text(eko[3]);
    $('#average_salary').text(eko[4]);
});
$('#eko_map').on('click', function () {
    $('.modal').show();
    $('#region_logo').attr('src', 'img/eko.png');
    $('#region_name').text(eko[0]);
    $('#area_land').text(eko[1]);
    $('#population').text(eko[2]);
    $('#employed_economy').text(eko[3]);
    $('#average_salary').text(eko[4]);
});