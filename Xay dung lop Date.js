let MyDate= function (day,month,year) {
    this.day = day;
    this.month = month;
    this.year = year;

    this.getDay = function () {
        return this.day;
    }
    this.getMonth = function () {
        return this.month;
    }
    this.getYear = function () {
        return this.year;
    }
    this.setDay = function (day) {
        this.day = day;
    }
    this.setMonth = function (month) {
        this.month = month;
    }
    this.setYear = function (year) {
        this.year = year;
    }
    this.setDate = function (day,month,year) {
        this.day=day;
        this.month=month;
        this.year=year;
    }
    this.ToString =function (day,month,year) {
        return day+'/'+month+'/'+year;
    }
};
let date = new MyDate(12,5,2018);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + "/" + month + "/" +year);
date.setDay(15);
date.setMonth(6);
date.setYear(2020);
date.setDate(15,8,2030);
alert(date.day + "/" + date.month + "/" +date.year);
let result= date.ToString(12,12,2016);
alert(result);



