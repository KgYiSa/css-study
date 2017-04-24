var coverGuide = function (cover, target) {
    var body = document.body;
    var doc = document.documentElement;
    if (cover && target) {
        // target size(要遮挡的元素的大小)
        var targetWidth = target.clientWidth,
        targetHeight = target.clientHeight;

        // page size(浏览器窗口的大小)
        var pageWidth = doc.scrollWidth,
        pageHeight = doc.scrollHeight;

        // offset of target
        var offsetTop = target.getBoundingClientRect().top + (body.scrollTop || doc.scrollTop),
        offsetLeft = target.getBoundingClientRect().left + (body.scrollLeft || doc.scrollLeft);

        // set size and border-width(设置遮罩的大小和边框)
        cover.style.width = targetWidth + 'px';
        cover.style.height = targetHeight + 'px';
        cover.style.borderWidth = offsetTop + 'px ' +
            (pageWidth - offsetLeft - targetWidth) + 'px ' +
            (pageHeight - offsetTop - targetHeight) + 'px ' +
            offsetLeft + 'px';
        cover.style.display = 'block';

        // resize(浏览器窗口大小改变时)
        if (!cover.isResizeBind) {
            if (window.addEventListener) {
                window.addEventListener('resize', function () {
                    coverGuide(cover, target);
                });
                cover.isResizeBind = true;
            } else if (window.attachEvent) {
                window.attachEvent('onresize', function () {
                    coverGuide(cover, target);
                });
                cover.isResizeBind = true;

                // IE7, IE8 box-shadow hack
                cover.innerHTML = '<img src="./img/guide-shadow.png" />';
            }
        }
    }
};

var cover = document.getElementById('cover');
var targetList = [
    document.getElementsByTagName('a')[0],
    document.getElementById('backTo'),
    document.getElementById('img')
];
var index = 0; // 当前target在targetList中的位置
coverGuide(cover, targetList[index]);
cover.onclick = function () {
    index++;
    if (!targetList[index]) {
        index = 0;
    }
    coverGuide(cover, targetList[index]);
};
