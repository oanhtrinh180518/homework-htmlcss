$(document).ready(function() {
    $('aForgot').click(function() {
        $('myLogin').modal('hide')
        $('myForgotPass').modal('show')
    });


});

var taiKhoan = [{ ten: 'admin', pass: 'admin' }, { ten: 'oanh', pass: 'oanh' }];

function clickLoginSystem() {
    document.getElementById('username').value = 'admin'
    document.getElementById('myPassword').value = 'admin'
}

function clickLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('myPassword').value;
    var bol = false;
    if (username == '' | password == '') {
        document.getElementById('lbBatbuoc1').innerHTML = 'Bắt buộc nhập username và password'
        bol = true;
    } else {
        for (i = 0; i < taiKhoan.length; i++) {
            if (username == taiKhoan[i].ten & password == taiKhoan[i].pass) {
                document.getElementById('idLogin').innerHTML = 'Loading'
                document.getElementById('btnLoginSystem').innerHTML = 'Đăng nhập thành công'
                document.getElementById('lbBatbuoc1').innerHTML = ''

                bol = true;
                break;
            }
        }
        if (bol == false)
            document.getElementById('lbBatbuoc1').innerHTML = 'Nhập sai username hoặc password'
    }
}

function clickSavePass() {
    var username2 = document.getElementById('username2').value;
    var newPassword = document.getElementById('newPassword').value;

    var bol = false;
    if (username2 == '' | newPassword == '') {
        document.getElementById('lbBatbuoc2').innerHTML = 'Bắt buộc nhập tên đăng nhập cũ và mật khẩu mới'
        bol = true;
    } else {
        for (i = 0; i < taiKhoan.length; i++) {
            if (username2 == taiKhoan[i].ten & newPassword != null) {
                taiKhoan[i].pass = newPassword;
                document.getElementById('idSavePass').setAttribute('data-toggle', 'modal')
                document.getElementById('idSavePass').setAttribute('data-target', '#myLogin')
                document.getElementById('idSavePass').setAttribute('data-dismiss', 'modal')
                document.getElementById('idSavePass').value = 'false'
                $('myForgotPass').modal('hide')
                document.getElementById('lbBatbuoc1').innerHTML = 'Bạn đã đổi mật khẩu thành công'
                bol = true;
                break;
            }
        }
        if (bol == false)
            document.getElementById('lbBatbuoc2').innerHTML = 'Nhập sai username'
    }
}