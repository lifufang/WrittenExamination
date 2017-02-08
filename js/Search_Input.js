window.onload = function() {
	renderevent();
	datepicker();
}
function renderevent() {
	var search_input = document.getElementById('search_input');
	var clearbutton = document.getElementById('clear');
	var chevron = document.getElementById('chevron');
	var result = document.getElementById('search_list').getElementsByTagName('li');
	console.log(result);
	for(var i=0;i<result.length;i++) {
		result[i].onclick = function() {
			console.log(this)
			search_input.value = this.innerText;
		}
	}
	document.onclick = function(e) {
		var aim = e.target;
		if(aim!=chevron){
			for(var i=0;i<result.length;i++) {
			result[i].style.display = 'none'
			}
			chevron.className = 'glyphicon glyphicon-chevron-down';
		}
	}
	clearbutton.onclick = function() {
		search_input.value = "";
		for(var i=0;i<result.length;i++) {
			result[i].style.display = 'none'
			}
	}
	chevron.onclick = function() {
		if(this.className == 'glyphicon glyphicon-chevron-down') {
			this.className = 'glyphicon glyphicon-chevron-up';
			for(var i=0;i<result.length;i++) {
				result[i].style.display = 'block'
			}
		}
		else {
			this.className = 'glyphicon glyphicon-chevron-down'
			for(var i=0;i<result.length;i++) {
			result[i].style.display = 'none'
			}
		}	
	}
}
function datepicker() {
	var month = ['January','February','March','April','May','June','July','August','September','Octorber','November','December'];
	var date = new Date();
	var current_month = date.getMonth();
	showday(current_month);
	var current_year = date.getFullYear();
	var index_month = current_month;
	console.log(current_month)
	document.getElementsByClassName('month')[0].innerText = month[current_month]+" "+current_year;
	var last_month = document.getElementById('last_month');
	var next_month = document.getElementById('next_month');
	last_month.onclick = function() {
		var tr = document.getElementsByClassName('day_table')[0].getElementsByTagName('tr');
		for(var i=0;i<tr.length;i++){
			tr[i].innerHTML = "";
		}
		if(index_month == 0){
			index_month =11;
			document.getElementsByClassName('month')[0].innerText = month[index_month]+" "+current_year;
		}
		else {
			index_month = index_month - 1;
			document.getElementsByClassName('month')[0].innerText = month[index_month]+" "+current_year;
		}
		var td = document.getElementsByClassName('day_table')[0].getElementsByTagName('td');
		showday(index_month);
		var td = document.getElementsByClassName('day_table')[0].getElementsByTagName('td');
		console.log(td)
		for(var i=0;i<td.length;i++) {
		td[i].onclick = function() {
			var day = this.innerText;
			document.getElementsByClassName('time')[0].innerText = date.getFullYear()+"-"+(index_month+1)+"-"+day;
			}
		}
	}
	next_month.onclick = function() {
		var tr = document.getElementsByClassName('day_table')[0].getElementsByTagName('tr');
		for(var i=0;i<tr.length;i++){
			tr[i].innerHTML = "";
		}
		if(index_month == 11){
			index_month =0;
			document.getElementsByClassName('month')[0].innerText = month[index_month]+" "+current_year;
		}
		else {
			index_month = index_month + 1;
			document.getElementsByClassName('month')[0].innerText = month[index_month]+" "+current_year;
		}
		showday(index_month);
		var td = document.getElementsByClassName('day_table')[0].getElementsByTagName('td');
		console.log(td)
		for(var i=0;i<td.length;i++) {
		td[i].onclick = function() {
			var day = this.innerText;
			document.getElementsByClassName('time')[0].innerText = date.getFullYear()+"-"+(index_month+1)+"-"+day;
			}
		}
	}
	var td = document.getElementsByClassName('day_table')[0].getElementsByTagName('td');
	for(var i=0;i<td.length;i++) {
		td[i].onclick = function() {
			var day = this.innerText;
			document.getElementsByClassName('time')[0].innerText = date.getFullYear()+"-"+(index_month+1)+"-"+day;
		}
	}
}
function showday(month) {
	var tr = document.getElementsByClassName('day_table')[0].getElementsByTagName('tr');
	var start_day = 1;
	var current_month = month+1;
	var largemonth = [1,3,5,7,8,10,12];
	var smallmonth = [4,6,9,11];
	if(contains(largemonth,current_month)) {
		for(var i=0;i<4;i++){
			for(var j=0;j<7;j++){
				tr[i].innerHTML += '<td>'+start_day+'</td>'
				start_day++;
			}	
		}
		for(var i=0;i<3;i++) {
			tr[4].innerHTML += '<td>'+start_day+'</td>'
			start_day++;
		}
	}
	else if(contains(smallmonth,current_month)) {
		for(var i=0;i<4;i++){
			for(var j=0;j<7;j++){
				tr[i].innerHTML += '<td>'+start_day+'</td>'
				start_day++;
			}	
		}
		for(var i=0;i<2;i++) {
			tr[4].innerHTML += '<td>'+start_day+'</td>'
			start_day++;
		}
	}
	else {
		for(var i=0;i<4;i++){
			for(var j=0;j<7;j++){
				tr[i].innerHTML += '<td>'+start_day+'</td>'
				start_day++;
			}	
		}
	}
}
function contains(arr,current_month) {
	for(var i=0;i<arr.length;i++) {
		if(current_month == arr[i]){
			return true
		}
	}
	return false
}
function onTextChange(e){
	var j = 0;
	var text = e.target.value;
	console.log(text)
	var result = document.getElementById('search_list').getElementsByTagName('li');
	for(var i=0;i<result.length;i++) {
		console.log(result[i].innerText)
		if(result[i].innerText.indexOf(text)==j) {
			result[i].style.display = 'block'
		}
		else {
			result[i].style.display = 'none'
		}
	}
	j++;	
}





