var validation = new Validation();

function getEle(id) {
  return document.getElementById(id);
}

function validateForm() {
  validation.kiemTraTaiKhoan();
  validation.kiemTraHoTen();
  validation.kiemTraMatKhau();
  validation.kiemTraEmail();
  validation.kiemTraSoDienThoai();
  if(checkForm()){
    return true;
  }else{
    return false;
  }
}

getEle('TaiKhoan').onblur = function(){
  validation.kiemTraTaiKhoan();
};
getEle('HoTen').onblur = validation.kiemTraHoTen;
getEle('MatKhau').onblur = validation.kiemTraMatKhau;
getEle('Email').onblur = validation.kiemTraEmail;
getEle('SoDienThoai').onblur = validation.kiemTraSoDienThoai;

// getEle("TaiKhoan").onkeyup = validation.kiemTraTaiKhoan;
// getEle("HoTen").onkeyup = validation.kiemTraHoTen;
// getEle("MatKhau").onkeyup = validation.kiemTraMatKhau;
// getEle("Email").onkeyup = validation.kiemTraEmail;
// getEle("SoDienThoai").onkeyup = validation.kiemTraSoDienThoai;

function checkForm(){
  var isValid = true;

  // if (!validation.kiemTraTaiKhoan()) isValid = false;
  // if (!validation.kiemTraHoTen()) isValid = false;
  // if (!validation.kiemTraMatKhau()) isValid = false;
  // if (!validation.kiemTraEmail()) isValid = false;
  // if (!validation.kiemTraSoDienThoai()) isValid = false;

  isValid &= validation.kiemTraTaiKhoan()
          && validation.kiemTraEmail()
          && validation.kiemTraMatKhau()
          && validation.kiemTraEmail()
          && validation.kiemTraSoDienThoai();

  return isValid;
}


