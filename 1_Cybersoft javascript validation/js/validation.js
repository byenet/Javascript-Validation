function getEle(id) {
    return document.getElementById(id);
}

function Validation() {

    this.kiemTraRong = function(input,faRight,faFail,inputId, spanId, message){
        if(input === ""){
            getEle(inputId).style.border = "2px solid red";
            getEle(spanId).style.display = "block";
            getEle(spanId).innerHTML = message;
            getEle(faRight).style.display = "none";
            getEle(faFail).style.display = "block";
            return false;
        }else{
            getEle(spanId).style.display = "none";
            getEle(inputId).style.border = "2px solid green";
            getEle(spanId).innerHTML = "";
            getEle(faRight).style.display = "block";
            getEle(faFail).style.display = "none";
            return true;
        }
    };

    this.kiemTraDoDai = function (input,faRight,faFail, inputId, spanId, message, min, max) {
      if (input.length >= min && input.length <= max) {
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        getEle(inputId).style.border = "2px solid green";
        getEle(faRight).style.display = "block";
        getEle(faFail).style.display = "none";
        return true;
      } else {
        getEle(inputId).style.border = "2px solid red";
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        getEle(faRight).style.display = "none";
        getEle(faFail).style.display = "block";
        return false;
      }
    };

    this.kiemTraChuoi = function (input,faRight,faFail, inputId, spanId, message) {
      var pattern = new RegExp(
        "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
          "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
          "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$"
      );

      if (pattern.test(input)) {
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        getEle(inputId).style.border = "2px solid green";
        getEle(spanId).style.display = "none";
        getEle(inputId).style.border = "2px solid green";
        return true;
      } else {
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        getEle(inputId).style.border = "2px solid red";
        getEle(faRight).style.display = "none";
        getEle(faFail).style.display = "block";
        return false;
      }
    };

    this.kiemTraEmail = function (input,faRight,faFail, inputId, spanId, message) {
      var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (input.match(mailFormat)) {
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        getEle(inputId).style.border = "2px solid green";
        getEle(spanId).style.display = "none";
        getEle(inputId).style.border = "2px solid green";
        return true;
      } else {
        getEle(spanId).style = "block";
        getEle(spanId).innerHTML = message;
        getEle(inputId).style.border = "2px solid red";
        getEle(faRight).style.display = "none";
        getEle(faFail).style.display = "block";
        return false;
      }
    };

    this.kiemTraSDT = function (input,faRight,faFail, inputId, spanId, message) {
      var phoneFormat = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (input.match(phoneFormat)) {
        getEle(spanId).style.display = "none";
        getEle(spanId).innerHTML = "";
        getEle(inputId).style.border = "2px solid green";
        getEle(spanId).style.display = "none";
        getEle(inputId).style.border = "2px solid green";
        return true;
      } else {
        getEle(spanId).style.display = "block";
        getEle(spanId).innerHTML = message;
        getEle(inputId).style.border = "2px solid red";
        getEle(faRight).style.display = "none";
        getEle(faFail).style.display = "block";
        return false;
      }
    };
}