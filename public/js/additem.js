$(document).ready(function(){
	//$("#warning").hide(); //hide modal - only triggers when error in form validation
})

function validate(){

	var hasError = false;
	var check1 = false;
	var check1 = false;
	var check1 = false;
	var check1 = false;
	var check1 = false;

	$form = $("#formAddUser, input"); //get form additem
	var counter = 0;

	$form.each(function(){ //go through items in the form.
		var checkbox = $(this).attr("name");
		if(checkbox == "options"){
			//if name is "options"
			if($(this).prop("checked")){
				console.log($(this));
				var val = $(this).val();
				counter++; //increment counter if checked.
			}
		}

		if(checkbox == "itemname"){
			if($(this).val().length <= 1){
				$("#warning-text").text("Please provide an organization name.")
				$("#warning").modal({
					show: true
				});
				hasError = true;
				return;
			}
		}
		if(checkbox == "itememail"){
			var value = $(this).val()
			if(value.length <= 1){
				$("#warning-text").text("Please provide an organization email.")
				$("#warning").modal({
					show: true
				});
				hasError = true;
				return;
			}
			//validate email from user
			else{
				var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 				if(!regex.test(value)){
 					$("#warning-text").text("Please provide a valid email address!");
					$("#warning").modal({
						show: true
					});
					hasError = true;
 				}
			}
		}
		if(checkbox == "itemnumber"){
			if($(this).val().length <= 1){
				$("#warning-text").text("Please provide an organization number.")
				$("#warning").modal({
					show: true
				});
				hasError = true;
				return;
			}
		}
		if(checkbox == "itemlocation"){
			if($(this).val().length <= 1){
				$("#warning-text").text("Please provide an organization location.")
				$("#warning").modal({
					show: true
				});
				hasError = true;
				return;
			}
		}
		if(checkbox == "itemwebsite"){
			if($(this).val().length <= 1){
				$("#warning-text").text("Please provide an organization website.")
				$("#warning").modal({
					show: true
				});
				hasError = true;
				return;
			}
		}
	});

	if(counter > 0 && !hasError){
		var posting = $.post("/additem", $("#formAddUser").serialize());
		posting.done(function(){
			console.log("redirecting");

			window.location.assign('/addsuccess');
		})
	}

	else if (counter < 1){
		$("#warning-text").text("Please check at least one box!");
				$("#warning").modal({
					show: true
		});
	}





}
