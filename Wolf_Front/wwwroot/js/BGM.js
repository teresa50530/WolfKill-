window.onload = function () { $('#music_btn').click(play()); }

function play() {
    var Bgm_music = document.getElementById("Bgm_music");
    Bgm_music.play();
};
$("body").addClass("bgm-pic");
var btn = document.querySelector('.btnClass');

function saveName(e) {
    //�ŧi�@���ܼơA�j�w��J��AŪ��&�����ϥΪ̿�J����r
    var str = $('#Email_ID').val();
    localStorage.setItem('myName', str);
    addpic();//���J�����e�s�b�s����
}
function addpic() {
    let picData =
    {
        email: $('#Email_ID').val(),
        pic: localStorage.getItem('Register_pic')
    }

    
    $.ajax({
        type: 'POST',
        url: 'https://wolfpeoplekill.azurewebsites.net/api/UserRegister/postpic',
        dataType: 'json',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(picData),
        success: function (msg) {
            //alert('Data Saved: ' + msg);
        }
    });
}
btn.addEventListener('click', saveName)