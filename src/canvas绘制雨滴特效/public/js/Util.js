// 获取页面的宽度 window.innerWidth
function getPageWidth() {
    return window.innerWidth;
}
// 获取页面的高度 window.innerHeight
function getPageHeight() {
    return window.innerHeight;
}
// clientWidth
function getViewportWidth() {
    return document.body.clientWidth;
}
// clientWidth
function getViewportHeight() {
    return document.body.clientHeight;
}
// 生成一个最小值和最大值之间的随机数
function random(min, max) {
    return min + Math.random()*(max - min);
}
/* requestAnimationFrame.js
 * by zhangxinxu 2013-09-30
*/
(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
}());
