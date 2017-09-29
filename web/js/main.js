let show_main_menu = document.getElementById('show_main_menu'),
    main_menu__wrap = document.getElementById('main_menu__wrap'),
    header = document.getElementById('header_wrap');



function toggleClass(str, clas) {
    let str_mod = str;
    let tempArr = str.className.split(' ');
    existe = false;
    tempArr.forEach(function (item, i, array) {
        if (item === clas) {
            array.splice(i, 1);
            existe = true;
        }
    });
    if (!existe) {
        str = addClass(str, clas);
    } else {
        str = tempArr.join(' ');
    }
    str_mod.className = str;
    return str;
}


// -- add class to HTML element --
function addClass(str, clas) {
    let str_mod = str;
    str = str.className;
    let tempArr = str.split(' ');
    let match = false;
    tempArr.forEach(function (item, i) {
        if (item === clas) {
            match = true;
        }
    });
    if (match === false) {
        tempArr.push(clas);
        str = tempArr.join(' ');
    }
    str_mod.className = str;
    return str;
}


// -- remove class to HTML element --
function removeClass(str, clas) {
    let str_mod = str;
    str = str.className;
    var tempArr = str.split(' ');
    tempArr.forEach(function (item, i) {
        if (item === clas) {
            tempArr.splice(i, 1);
        }
    });
    str = tempArr.join(' ');
    str_mod.className = str;
    return str;
}

show_main_menu.onclick = () => {
    toggleClass(show_main_menu, 'active');
    toggleClass(main_menu__wrap, 'active');
    toggleClass(header, 'header');
};