$(document).ready(function(){
	var date1 = new Date;
	date1.setHours(0, 0, 0, 0);
	date1.setDate(10);
	var date2 = new Date;
	date2.setHours(0, 0, 0, 0);
	date2.setDate(23);

	$( "#datepicker" ).datepicker( {beforeShowDay: $.datepicker.noWeekends},
		{ 
			onSelect: function(dateText, inst) {
					var date1 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input1").val());
					var date2 = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#input2").val());
					if (!date1 || date2) {
						$("#input1").val(dateText);
						$("#input2").val("");
						$(this).datepicker("option", "minDate", dateText);
					} else {
						$("#input2").val(dateText);
						$(this).datepicker("option", "minDate", null);
					}
				}
		}
		
		);
});
