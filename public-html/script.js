let request = new XMLHttpRequest();

request.open("GET","http://10.0.1.4:8081/api/v1/pods");
request.send();
request.onload = () => {
	document.write(request)
	console.log(request);
	if (request.status ==200) {
	document.write(request)
	console.log(JSON.parse(request.response));
	} else {
		console.log (`error ${request.status} ${request.statusText}`)
	}
}