var flag = false;
function input_color_on(id) {
    var id = document.getElementById(id);
    id.style.border = '1px solid #f36b11';
    var img_id = null;
    if (id.id == 'username') {
        img_id = document.getElementById('username-img');
        img_id.style.background = '#fef9f6';
        var img_id1 = document.getElementById('username-img1');
        img_id1.style.background = "url('./images/spirit.png') 16px 0px";
    }
    if (id.id == 'password') {
        img_id = document.getElementById('password-img');
        img_id.style.background = '#fef9f6';

        var img_id1 = document.getElementById('password-img1');
        img_id1.style.background = "url('./images/spirit.png') 16px 32px";
    }
    if (img_id != null) {
        img_id.style.border = '1px solid #f36b11';
        img_id.style.borderRight = 'none';
    }
};
function input_color_blur(id) {
    var id = document.getElementById(id);
    id.style.border = '1px solid #d6d6d6';
    var img_id = null;
    if (id.id == 'username') {
        img_id = document.getElementById('username-img');
        img_id.style.background = '#f6f6f6';

        var img_id1 = document.getElementById('username-img1');
        img_id1.style.background = "url('./images/spirit.png')";
    }
    if (id.id == 'password') {
        img_id = document.getElementById('password-img');
        img_id.style.background = '#f6f6f6';
        var img_id1 = document.getElementById('password-img1');
        img_id1.style.background = "url('./images/spirit.png') 0px 32px";
    }
    if (img_id != null) {
        img_id.style.border = '1px solid #d6d6d6';
        img_id.style.borderRight = 'none';
    }
};
function auto_login(id) {
    var id = document.getElementById(id);
    if (flag == false) {
        id.style.background = "url('./images/spirit.png') 17px 60px";
        flag = true;
    } else {
        id.style.background = "url('./images/spirit.png') 0px -32px";
        flag = false;
    }

}
