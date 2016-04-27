/**
 * Created by Liukeyi on 2016/3/26.
 */
$(function() {
    $('#submit').on('click', function () {
        var userName = $('#userName').val();
        var pwd = $('#password').val();

        $.ajax({
            type : "POST",
            url : 'login',
            header : {
                'Accept' : 'application/json'
            },
            data : {
                username : userName,
                pwd : pwd
            },
            withCredential:true,
            success:function (data) {
                var data = JSON.parse(data);
                if (data.result) {
                    //window.location.href = "UserCheck";
                }
            }
        });
    });
});