
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        var size = cc.winSize;
        var b = new cc.LayerColor(cc.color.RED,400,400);
        b.ignoreAnchor = false;
        b.x = size.width/2;
        b.y = size.height/2;
        this.addChild(b);

        var size = cc.winSize;
        var a = new cc.LayerColor(cc.color.YELLOW,200,200);
        a.ignoreAnchor = false;
        a.x = b.x/2+100;
        a.y = size.height/2;
        b.addChild(a);

        var size = cc.winSize;
        var c = new cc.LayerColor(cc.color.BLUE,200,200);
        c.ignoreAnchor = false;
        c.x = b.x + b.x/2;
        c.y = size.height/2;
        this.addChild(c);

        b.runAction(cc);






        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        //坐标系变换  世界坐标系 本地坐标系
        var node3 = new cc.Sprite(res.Red_png);
        node3.setAnchorPoint(cc.p(1.0,1.0));
        node3.x = 200;
        node3.y = 200;
        this.addChild(node3);

        var node4 = new cc.Sprite(res.Red_png);
        node4.setAnchorPoint(cc.p(1.0,1.0));
        node4.x = 50;
        node4.y = 50;
        this.addChild(node4kjk);
        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        // var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // // position the label on the center of the screen
        // helloLabel.x = size.width / 2;
        // helloLabel.y = size.height / 2 + 200;
        // // add the label as a child to this layer
        // this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        // this.sprite = new cc.Sprite(res.HelloWorld_png);
        // this.sprite.attr({
        //     x: size.width / 2,
        //     y: size.height / 2
        // });
        // this.addChild(this.sprite, 0);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

