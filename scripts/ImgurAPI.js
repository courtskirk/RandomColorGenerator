const file = document.getElementById("file")
const img = document.getElementById("img")
const url = document.getElementById("url")

file.addEventListener("change", ev=>{
	
	const formdata = new FormData()
	formdata.append("image", ev.target.files[0])
	fetch("https://api.imgur.com/3/image/",{
		method: "post",
		headers:{
			Authorization:"Client-ID 309705456930db4"
		}
		,body:formdata
	}).then(data=>data.json()).then(data=>{
		img.src = data.data.link
		const urlLink = data.data.link
		url.innerHTML = '<a href="'+urlLink+'">'+urlLink+'</a>';
	})
})