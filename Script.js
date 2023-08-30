document.addEventListener('DOMContentLoaded', function () {
    var cel = document.getElementById("cel");
    var fah = document.getElementById("fah");
    var kel = document.getElementById("kel");
    var rank = document.getElementById("rank");


    cel.addEventListener('input', function () {
        let c = parseFloat(this.value);
        let f = (c * 9 / 5) + 32;
        let k = c + 273.15;
        let r = f + 459.67;
        fah.value = f;
        kel.value = k;
        rank.value = r;
    });

    fah.addEventListener('input', function () {
        let f = parseFloat(this.value);
        let c = (f - 32) * 5 / 9;
        let k = (f - 32) * 5 / 9 + 273.15;
        let r = f + 459.67;
        kel.value = k;
        cel.value = c;
        rank.value = r;
    });

    kel.addEventListener('input', function () {
        let k = parseFloat(this.value);
        let c = k - 273.15;
        let f = (k - 273.15) * 9 / 5 + 32;
        let r = f + 459.67;
        cel.value = c;
        fah.value = f;
        rank.value = r;
    });

    rank.addEventListener('input', function () {
        let r = parseFloat(this.value);
        let c = (r - 491.67) / 1.8;
        let f = (c * 9 / 5) + 32;
        let k = (f - 32) * 5 / 9 + 273.15;
        cel.value = c;
        fah.value = f;
        kel.value = k;
    });
});
