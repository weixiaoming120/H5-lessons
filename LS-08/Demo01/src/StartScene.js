//创建开始场景
//此场景在main.js中运行（在main.js中调用此场景）

//创建子场景
var StartLayer = cc.Layer.extend({
    ctor: function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.BLUE);
        //this指的是MainLayer实例化出来的对象
        this.addChild(layer);

        //获取屏幕尺寸
        var size = cc.winSize;
        //创建容器
        var  lable = new cc.LabelTTF("这是开始场景","",50);
        //设置坐标
        lable.x = size.width*0.5;
        lable.y = size.height*0.7;
        this.addChild(lable);



        //创建按钮（菜单项）
        var menuItem = new cc.MenuItemFont("跳转主游戏场景",function(){
            //跳传到第二个人场景
            cc.director.runScene(new MainScene());
        },this);
        //设置菜单项尺寸
        menuItem.setFontSize(50);
        //创建Menu获取按钮menuItem
        var menu = new cc.Menu(menuItem);
        menu.setPosition(0,0);
        //设置menuItem的坐标
        menuItem.x = size.width*0.5;
        menuItem.y = size.height*0.3;
        this.addChild(menu);


    }
});
var BgL

var StartScene = cc.Scene.extend({
    //onEnter也可以是ctor
    onEnter:function () {
        this._super();
        //创建层，并添加到此场景上
        // var layer = new cc.LayerColor(cc.color.RED);
        // this.addChild(layer);
        //调用子场景
        var layer=  new StartLayer();
        this.addChild(layer);
    }
});