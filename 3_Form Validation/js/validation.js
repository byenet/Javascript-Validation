function getEle(id){
    return document.getElementById(id);
}

function validName(name){
    var pattern = new RegExp(
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
    );

    return(pattern.test(name));
}

function validDoDai(value,min,max){
    if (value.length >= min && value.length <= max) {
        return true;
    }else{
        return false;
    }
}

function validEmail(value){
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return mailFormat.test(value);
}

function validPhone(value) {
    var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    return phoneFormat.test(value);
}



function Validation(){

    this.kiemTraTaiKhoan = function() {
        var taiKhoan = getEle('TaiKhoan')
        var taiKhoanStatus = getEle('taiKhoanStatus');
        
        if(taiKhoan.value == ""){
            taiKhoanStatus.className = "invalid-feedback d-block"
            taiKhoanStatus.innerHTML = "Tài khoản không được bỏ trống!"
            taiKhoan.className = "form-control w-50 is-invalid";
            return false;
        }else if(!validDoDai(taiKhoan.value, 6,12)){
            taiKhoanStatus.className = "invalid-feedback d-block";
            taiKhoanStatus.innerHTML = "Tài khoản phải từ 6 đến 12 ký tự!";
            taiKhoan.className = "form-control w-50 is-invalid";
            return false;
        }
        else {
            taiKhoanStatus.className = "valid-feedback d-block";
            taiKhoanStatus.innerHTML = "Look good!";
            taiKhoan.className = "form-control w-50 is-valid";
            return true;
        }
    }

    this.kiemTraHoTen = function(){
        var hoTen = getEle('HoTen');
        var hoTenStatus = getEle('hoTenStatus');
        if(hoTen.value == ""){
            hoTenStatus.className = "invalid-feedback d-block"
            hoTenStatus.innerHTML = "Họ tên không được bỏ trống!"
            hoTen.className = "form-control w-50 is-invalid";
            return false;
        }else if(!validName(hoTen.value)){
            hoTenStatus.className = "invalid-feedback d-block";
            hoTenStatus.innerHTML = "Họ tên không không hợp lệ!";
            hoTen.className = "form-control w-50 is-invalid";
            return false;
        }
        else{
            hoTenStatus.className = "valid-feedback d-block";
            hoTenStatus.innerHTML = "Look good!";
            hoTen.className = "form-control w-50 is-valid";
            return true;
        }
    }

    this.kiemTraMatKhau = function() {
        var matKhau = getEle('MatKhau');
        var matKhauStatus = getEle("matKhauStatus");

        if(matKhau.value == ""){
            matKhauStatus.className = "invalid-feedback d-block"
            matKhauStatus.innerHTML = "Mật Khẩu không được bỏ trống!"
            matKhau.className = "form-control w-50 is-invalid";
            return false;
        }
        else if(!validDoDai(matKhau.value, 5,8)){
            matKhauStatus.className = "invalid-feedback d-block";
            matKhauStatus.innerHTML = "Mật Khẩu phải từ 5 đến 8 ký tự!";
            matKhau.className = "form-control w-50 is-invalid";
            return false;
        }
        else{
            matKhauStatus.className = "valid-feedback d-block";
            matKhauStatus.innerHTML = "Look good!";
            matKhau.className = "form-control w-50 is-valid";
            return true;
        }
    }

    this.kiemTraEmail = function() {
        var email = getEle('Email');
        var emailStatus = getEle('emailStatus');
        if(email.value == ""){
            emailStatus.className = "invalid-feedback d-block"
            emailStatus.innerHTML = "email không được bỏ trống!"
            email.className = "form-control w-50 is-invalid";
            return false;
        }
        else if(!validEmail(email.value)){
            emailStatus.className = "invalid-feedback d-block";
            emailStatus.innerHTML = "email không hợp lệ!";
            email.className = "form-control w-50 is-invalid";
            return false;
        }
        else{
            emailStatus.className = "valid-feedback d-block";
            emailStatus.innerHTML = "Look good!";
            email.className = "form-control w-50 is-valid";
            return true;
        }
    }

    this.kiemTraSoDienThoai = function() {
        var phone = getEle('SoDienThoai');
        var phoneStatus = getEle('phoneStatus');

        if(phone.value == ""){
            phoneStatus.className = "invalid-feedback d-block"
            phoneStatus.innerHTML = "Số điện thoại không được bỏ trống!"
            phone.className = "form-control w-50 is-invalid";
            return false;
        }
        else if(!validPhone(phone.value)){
            phoneStatus.className = "invalid-feedback d-block";
            phoneStatus.innerHTML = "Số điện thoại không không hợp lệ!";
            phone.className = "form-control w-50 is-invalid";
            return false;
        }
        else{
            phoneStatus.className = "valid-feedback d-block";
            phoneStatus.innerHTML = "Look good!";
            phone.className = "form-control w-50 is-valid";
            return true;
        }
    }
}