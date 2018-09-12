var sunam = new Date
var yearam = sunam.getFullYear();
var montham = sunam.getMonth();
var dteam = sunam.getDate();
var dayam = sunam.getDay();
var sunyear
switch (dayam) {
    case 0:
        var today = "يکشنبه";
        break;
    case 1:
        var today = "دوشنبه";
        break;
    case 2:
        var today = "سه شنبه";
        break;
    case 3:
        var today = "چهارشنبه";
        break;
    case 4:
        var today = "پنچشنبه";
        break;
    case 5:
        var today = "جمعه";
        break;
    case 6:
        var today = "شنبه";
        break;
}
switch (montham) {
    case 0:

        sunyear = yearam - 622;
        if (dteam <= 20) {
            var sunmonth = "دي";
            var daysun = dteam + 10;
        } else {
            var sunmonth = "بهمن";
            var daysun = dteam - 20;
        }
        break;
    case 1:

        sunyear = yearam - 622;
        if (dteam <= 19) {
            var sunmonth = "بهمن";
            var daysun = dteam + 11;
        } else {
            var sunmonth = "اسفند";
            var daysun = dteam - 19;
        }
        break;
    case 2:
        {
            if ((yearam - 621) % 4 == 0)
                var i = 10;
            else
                var i = 9;
            if (dteam <= 20) {
                sunyear = yearam - 622;
                var sunmonth = "اسفند";
                var daysun = dteam + i;
            } else {
                sunyear = yearam - 621;
                var sunmonth = "فروردين";
                var daysun = dteam - 20;
            }
        }
        break;
    case 3:

        sunyear = yearam - 621;
        if (dteam <= 20) {
            var sunmonth = "فروردين";
            var daysun = dteam + 11;
        } else {
            var sunmonth = "ارديبهشت";
            var daysun = dteam - 20;
        }
        break;
    case 4:

        sunyear = yearam - 621;
        if (dteam <= 21) {
            var sunmonth = "ارديبهشت";
            var daysun = dteam + 10;
        } else {
            var sunmonth = "خرداد";
            var daysun = dteam - 21;
        }

        break;
    case 5:

        sunyear = yearam - 621;
        if (dteam <= 21) {
            var sunmonth = "خرداد";
            var daysun = dteam + 10;
        } else {
            var sunmonth = "تير";
            var daysun = dteam - 21;
        }
        break;
    case 6:

        sunyear = yearam - 621;
        if (dteam <= 22) {
            var sunmonth = "تير";
            var daysun = dteam + 9;
        } else {
            var sunmonth = "مرداد";
            var daysun = dteam - 22;
        }
        break;
    case 7:

        sunyear = yearam - 621;
        if (dteam <= 22) {
            var sunmonth = "مرداد";
            var daysun = dteam + 9;
        } else {
            var sunmonth = "شهريور";
            var daysun = dteam - 22;
        }
        break;
    case 8:

        sunyear = yearam - 621;
        if (dteam <= 22) {
            var sunmonth = "شهريور";
            var daysun = dteam + 9;
        } else {
            var sunmonth = "مهر";
            var daysun = dteam + 22;
        }
        break;
    case 9:

        sunyear = yearam - 621;
        if (dteam <= 22) {
            var sunmonth = "مهر";
            var daysun = dteam + 8;
        } else {
            var sunmonth = "آبان";
            var daysun = dteam - 22;
        }
        break;
    case 10:

        sunyear = yearam - 621;
        if (dteam <= 21) {
            var sunmonth = "آبان";
            var daysun = dteam + 9;
        } else {
            var sunmonth = "آذر";
            var daysun = dteam - 21;
        }

        break;
    case 11:

        sunyear = yearam - 621;
        if (dteam <= 19) {
            var sunmonth = "آذر";
            var daysun = dteam + 9;
        } else {
            var sunmonth = "دي";
            var daysun = dteam + 21;
        }
        break;

}
document.getElementById("date").innerHTML = "امروز "+today+"&nbsp;"+daysun+"&nbsp;"+sunmonth+"&nbsp;"+sunyear+" است";