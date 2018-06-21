MyApp.service("MyService",function(){
    this.msg="default";
});

MyApp.factory("MyFactory",function(){
    return {
	    msg:"default",
		msg1:"sadasd"
	}
});

