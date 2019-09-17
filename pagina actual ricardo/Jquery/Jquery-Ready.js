$(document).ready(function () {

    var is_chrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    if (is_chrome == true) {
        $('#header-lezcano').addClass('chrome');
        $('#footer-lezcano').addClass('chrome');


    }
    else {
        $('#header-lezcano').addClass('IE');
        $('#footer-lezcano').addClass('IE');
    }

    $("#First-tabs").tabs();
    $(function () {
        var icons = {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
        };
        $("#accordion").accordion({
            icons: icons, heightStyle: "content"
        });
        $("#toggle").button().click(function () {
            if ($("#accordion").accordion("option", "icons")) {
                $("#accordion").accordion("option", "icons", null);
            } else {
                $("#accordion").accordion("option", "icons", icons);
            }
        });
    });

    $("#Lanus").click(function () { $("#First-tabs").tabs("option", "active", 2); });
    $("#Flores").click(function () { $("#First-tabs").tabs("option", "active", 2); });
    /////////////////////////END DOCUMENT READY
});
////////////////////////////////////////////////////////////////////////////////