var validation = new Validation();

function getEle(id){
    return document.getElementById(id);
}

function validateForm(){
    if(checkInput()){
        return true;
    }else{
        return false;
    }
}

function checkInput() {

    var taiKhoan = getEle("TaiKhoan").value;
    var matKhau = getEle("MatKhau").value;
    var hoTen = getEle("HoTen").value;
    var email = getEle("Email").value;
    var soDT = getEle("SoDienThoai").value;

    var isValid = true;

    /*Tai Khoan */
    isValid &=
      validation.kiemTraRong(
        taiKhoan,
        "faRight1",
        "faFail1",
        "TaiKhoan",
        "tbTaiKhoan",
        "(*) Tài khoản không để trống!"
      ) &&
      validation.kiemTraDoDai(
        taiKhoan,
        "faRight1",
        "faFail1",
        "TaiKhoan",
        "tbTaiKhoan",
        "(*) tài khoản từ 8 đến 20 ký tự!",
        8,
        20
      );
    
        
    /*Ho ten*/
    isValid &=
      validation.kiemTraRong(
        hoTen,
        "faRight2",
        "faFail2",
        "HoTen",
        "tbHoTen",
        "(*) Họ tên không được để trống!"
      ) &&
      validation.kiemTraChuoi(
        hoTen,
        "faRight2",
        "faFail2",
        "HoTen",
        "tbHoTen",
        "(*) Họ tên chứa ký tự không hợp lệ!"
      );

    /*Mat Khau */
    isValid &=
      validation.kiemTraRong(
        matKhau,
        "faRight3",
        "faFail3",
        "MatKhau",
        "tbMatKhau",
        "(*) Mật khẩu không được để trống!"
      ) &&
      validation.kiemTraDoDai(
        matKhau,
        "faRight3",
        "faFail3",
        "MatKhau",
        "tbMatKhau",
        "(*) Mật khẩu phải từ 6 đến 12 ký tự!",
        6,
        12
      );

    /*Email*/
    isValid &=
      validation.kiemTraRong(
        email,
        "faRight4",
        "faFail4",
        "Email",
        "tbEmail",
        "(*) Email không được để trống!"
      ) &&
      validation.kiemTraEmail(
        email,
        "faRight4",
        "faFail4",
        "Email",
        "tbEmail",
        "(*) Email bạn nhập không hợp lệ!"
      );
    
    /*So dien thoai*/
    isValid &=
      validation.kiemTraRong(
        soDT,
        "faRight5",
        "faFail5",
        "SoDienThoai",
        "tbSDT",
        "(*) Số điện thoại không được để trống!"
      ) &&
      validation.kiemTraSDT(
        soDT,
        "faRight5",
        "faFail5",
        "SoDienThoai",
        "tbSDT",
        "(*) Số điện thoại bạn nhập không hợp lệ"
      );
        

    return isValid;
}