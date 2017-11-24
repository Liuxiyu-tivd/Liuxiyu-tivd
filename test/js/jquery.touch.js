/**
 * Created by zhangzx on 2016/6/6
 * 移动端tap事件受理
 * type--执行事件方式
 * fun 回调函数
 */
(function ($) {
    $.fn.touchPage = function (type,fun,fun2) {
        var record = {};
        record.common = function (e) {
            //console.log(e);
            //e.preventDefault();
            var touch;
            if (e.changedTouches) {
                touch = e.changedTouches[0];
            } else {
                touch = e.originalEvent.touches[0];
            }
            return {
                x: touch.pageX,
                y: touch.pageY,
                d: new Date()
            };
        };
        var $obj = $(this);
        $obj.on('touchstart', function (event) {
            record['startPos'] = record.common(event);
            record['difPos'] = null;

        }).on('touchmove', function (event) {
            //计算位置
            var startPos = record['startPos'];
            if (startPos) {
                var touch = record.common(event);
                var difPos = {
                    x: touch.x - startPos.x,
                    y: touch.y - startPos.y,
                    d: (new Date()).getTime() - startPos.d.getTime()
                };
                record['difPos'] = difPos;


            if(type=="body_move") {
                    fun($obj);
            }
            }else{
            var touches = event.changedTouches || event.originalEvent.touches;
            if (touches.length > 1 || (event.scale && event.scale !== 1)) {
                return;
            }

          }
        }).on('touchend', function (e) {
            handleEvent(e);
        }).on('touchcancel', function (e) {
            //handleEvent(e);
            /*var difPos = record['difPos'];
            if(type="panel"&&(difPos.x<5 && difPos.y<5 && difPos.x > -5 && difPos.y>-5)){
                fun($obj);
            }
*/
        });
        //事件处理
        function handleEvent(event) {
            var difPos = record['difPos'];
            if(type=="click"){
                if(difPos){
                    if(difPos.x<5 && difPos.y<5 && difPos.x > -5 && difPos.y>-5){
                        fun($obj);
                       // event.preventDefault();
                    }
                }else{
                    fun($obj);
                   // event.preventDefault();
                }
            }else  if(type=="body"&&typeof fun == 'function'){
                fun($obj);
            }else if(type=="startend"){
                if(difPos){
                    if(difPos.x<5 && difPos.y<5 && difPos.x > -5 && difPos.y>-5){
                        fun.start($obj);
                    }
                }else{
                    fun.start($obj);
                }
            }

        }

        //一个元素是否包含另一个元素
        function contains(parentNode, childNode) {
            if (parentNode.contains) {
                return parentNode != childNode && parentNode.contains(childNode);
            } else {
                return !!(parentNode.compareDocumentPosition(childNode) & 16);
            }
        }
    }
})(jQuery);