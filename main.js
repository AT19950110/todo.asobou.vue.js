window.onload = (function() {

    // スタートボタン
    $('#tgCountupTimer #startButton').click(function() {
        // 00:00:00:0からスタート
        $('#tgCountupTimer .time').html('00:00:00:0');

        timer = setInterval("countUp()", 100);

        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #stopButton').removeAttr('disabled');
    });


    // ストップボタン
    $('#tgCountupTimer #stopButton').click(function() {
        // (一時)停止
        clearInterval(timer);

        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #restartButton').removeAttr('disabled');
        $('#tgCountupTimer #clearButton').removeAttr('disabled');
    });


    // リスタートボタン
    $('#tgCountupTimer #restartButton').click(function() {

        timer = setInterval("countUp()", 100);

        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #stopButton').removeAttr('disabled');
        $('#tgCountupTimer #clearButton').attr('disabled','disabled');
    });


    // クリアボタン
    $('#tgCountupTimer #clearButton').click(function() {

        msec = 0;
        sec  = 0;
        min  = 0;
        hour = 0;

        // 00:00:00:0にリセット
        $('#tgCountupTimer .time').html('00:00:00:0');
        clearInterval(timer);

        $(this).attr('disabled', 'disabled');
        $('#tgCountupTimer #stopButton').attr('disabled','disabled');
        $('#tgCountupTimer #restartButton').attr('disabled','disabled');
        $('#tgCountupTimer #startButton').removeAttr('disabled');
    });
});

msec = 0;
sec  = 0;
min  = 0;
hour = 0;

function countUp ()
{
    msec += 1;

    if (msec > 9) {
        msec = 0;
        sec += 1;
    }

    if (sec > 59) {
        sec = 0;
        min += 1;
    }

    if (min > 59) {
        min = 0;
        hour += 1;
    }

    // ミリ秒
    msecNumber = msec;

    // 秒
    if (sec < 10) {
        secNumber = '0' + sec.toString();
    } else {
        secNumber = sec;
    }

    // 分
    if (min < 10) {
        minNumber = '0' + min.toString();
    } else {
        minNumber = min;
    }

    // 時
    if (hour < 10) {
        hourNumber = '0' + hour.toString();
    } else {
        hourNumber = hour;
    }

    // 出力
    $('#tgCountupTimer .time').html(hourNumber + ':' + minNumber + ':' + secNumber + ':' + msecNumber);
}
