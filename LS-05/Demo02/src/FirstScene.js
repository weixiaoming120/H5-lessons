var FirstLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var sp2 = new cc.Sprite(res.one_jpg);
        sp2.x = 200;
        sp2.y = 200;
        this.addChild(sp2);

        // var sp1 = new cc.Sprite(res.two_jpg);
        // sp1.x = 20;
        // sp1.y = 0;
        // this.addChild(sp1);



        return true;
    }
});






var FirstScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new FirstLayer();
        this.addChild(layer);
    }
});
