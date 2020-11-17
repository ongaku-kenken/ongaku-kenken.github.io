function quicksearchstart() {
    $(function () {
        $('input#search').quicksearch('ul li');
    });
}
$(function () {
    //JSONを読み込み
    $.getJSON("https://raw.githubusercontent.com/ongaku-kenken/ongaku-kenken.github.io/master/data/json.json", function (ongakudata) {
        //テーブル表示ループ
        for (var i in ongakudata) {
            var list = '<li class="col-12 col-lg-3" style="margin-bottom: 3px;">'
                + '            <div class="card">'
                + '                <div class="card-body">'
                + '                    <h4 class="card-title">' + ongakudata[i].song_title + '</h4>'
                + '                    <h5 class="card-title text-right text-secondary">' + ongakudata[i].pref_name + '</h5>'
                + '                    <p><a class="btn btn-primary" href="view.html?id=' + i + '" role="button">詳細を見る</a></p>'
                + '                </div>'
                + '            </div>'
                + '     </li>';
            //完成したhtmlをoutput
            $("#tableoutput").append(list);
            quicksearchstart();
        }
    });
});
