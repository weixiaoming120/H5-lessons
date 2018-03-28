var SeconedLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var sky = new cc.Sprite(res.three_png);
        sky.x = size.width/2;
        sky.y = size.height/2;
        this.addChild(sky);

        var tree = new cc.Sprite(res.four_png);
        tree.x = size.width/2;
        tree.y = size.height/2;
        this.addChild(tree);
        //让树往下走
        tree.runAction(cc.moveBy(2,0,145).reverse());
        //旋转动画
        tree.setAnchorPoint(1.5,0.5);
        tree.runAction(cc.rotateBy(1,90).repeatForever());


        return true;
    }
});






var SeconedScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SeconedLayer();
        this.addChild(layer);
    }
});
