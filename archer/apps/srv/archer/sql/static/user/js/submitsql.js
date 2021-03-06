function validateForm(element) {
	var result = true;
	element.find('[required]').each(
		function () {
			var fieldElement = $(this);
			//如果为null则设置为''
			var value = editor.getValue() || '';
			if (value) {
				value = value.trim();
			}
			if (!value || value === fieldElement.attr('data-placeholder')) {
				alert((fieldElement.attr('data-name') || this.name) + "不能为空！");
				result = false;
				return result;
			}
		}
	);
	return result;
}

$("#btn-submitsql").click(function (){
	//获取form对象，判断输入，通过则提交
	var formSubmit = $("#form-submitsql");
	if (validateForm(formSubmit)) {
		formSubmit.submit();
	}
});

$("#review_man").change(function review_man(){
    var review_man = $(this).val();
    $("div#" + review_man).hide();
});

$("#create-template").click(function () {
	$.ajax({
		type: "post",
		url: "/templateList/",
		dataType: "json",
		success: function (data) {
			editor.setValue(data)
		},
		error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert(errorThrown);
		}
	});	
})
