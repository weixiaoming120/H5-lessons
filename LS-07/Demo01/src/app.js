
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    second:0,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

       var size = cc.winSize;

       var labelTTF = new cc.LabelTTF("玩家：","this.second",64);
       labelTTF.x = 50;
       labelTTF.y = size.height-50;
       labelTTF.setAnchorPoint(0,1);
       this.addChild(labelTTF);

//设置字体样式
       labelTTF.setFontFillColor(cc.color.RED);
       labelTTF.setFontSize(100);
       labelTTF.enableStroke(cc.color.YELLOW,5);
       // labelTTF.enableShadow(cc.color.WHITE,15,15,15);
      this.label = labelTTF;
      this.schedule(this.myTimer,1,cc.REPEAT_FOREVER,0);


       return true;
    },
    myTimer:function (dt) {
        this.second+=1;
        this.label.setString("玩家："+this.second);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

