
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        // var myCallBack = callback();
        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var redlayer = new cc.LayerColor(cc.color.RED,100,100);
        redlayer.ignoreAnchor = false;
        redlayer.setAnchorPoint(0.5,0.5);
        redlayer.y = size.height/2;
        this.redlayer = redlayer;
        this.addChild(this.redlayer);

        // this.scheduleUpdate();
       this.schedule(this.myCallBack,0.2,cc.REPEAT_FOREVER,2);

        return true;
    },
    update : function(dt){
            this.redlayer.x += 1;
    },
    myCallBack:function(){
        this.redlayer.x+=20;
        if(this.redlayer.x  > 400){
            this.unschedule(this.myCallBack);
        }
    }
});


var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();//调用父类相应的函数
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

