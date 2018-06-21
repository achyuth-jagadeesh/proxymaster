MyApp.controller("DashboardCtrl",function($http,$scope){
    var dashboard =this;
	dashboard.model={
	    mainq:null,
		skillList:[],
		selSubjectList :[],
		current:null,
		qFilter:"",
		url:"https://docs.google.com/document/d/1nL-XhJJ5HlQQlpqDfrNwrypBXdWW1ASGfLeaZ786hHw/edit"
	}
	
	$http.get("data/data.json").then(function(response){
		dashboard.model.mainq= response.data;
		dashboard.model.selSubjectList=dashboard.model.mainq[Object.keys(dashboard.model.mainq)[0]];
		processData()
	},function(error){
		console.log(error)
	});
	
	dashboard.refreshQusetions=function(subject){
		dashboard.model.selSubjectList=dashboard.model.mainq[subject.skill];
	}
	
	dashboard.showQ=function(challange,index){
		if(dashboard.model.current != null){
			 dashboard.model.current.show = !dashboard.model.current.show;
		}
		
		if(challange.show===undefined){
			challange.show=false;
		}
		challange.show=!challange.show;
		if(challange.show){
			dashboard.copyToClipBoard(index);
		}
		dashboard.model.current=challange;
	}
	dashboard.copyToClipBoard=function(index){
		setTimeout(function(){
			$("#txt_ans_"+index).select();
			try {
				var successful = document.execCommand('copy');
				var val = $("#txt_ans_"+index).val();
			    $("#txt_ans_"+index).val('');
			    $("#txt_ans_"+index).val(val);
				
			  } catch (err) {
				console.log('Oops, unable to copy');
			  }
		},100);
	}
	
	dashboard.loadURL=function(){
		$("#iframe_to_share").attr("src",dashboard.model.url);
	}
	
	dashboard.loadURL();
	
	function processData(){
		dashboard.model.skillList=Object.keys(dashboard.model.mainq).map(function(value){
			return {skill:value};
		});
	}
});

