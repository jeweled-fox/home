//posts

console.log("blog script running")

postnames = ["Welcome!",
	"[Article] Money and the future of software",
	]
postdates = ["9/23/2021",
	"9/23/2021",
	]


postbodys = [
	"Welcome to my blog! This is a space that will probably evolve over time (I might add things such as images and possibly other things). Here, I'll usually write about random things, and maybe I'll also write some simple articles. Well, whatever the case, enjoy.",

"Since pretty much the dawn of computers, software has essentially been seperated into two categories: Free software and paid software. Free software, or \"freeware\", is defined as any software that is initially provided at no cost to the end user. Paid software, conversely, is defined as any software that is initially provided at a cost of money. Whether it's $2 or $100, it's paid software. It's not a new conclusion that freeware commonly contains advertisements and extra purchases, as the companies that made them need to make money somehow. This is usually not present in paid software, as the company that made it is getting money already. However, some new software is seemingly breaking this norm. Take Autodesk's Fusion 360. This is a paid software. It's a 3D modeling application. Then, take Blender. It's a completely free 3D modeling application. But, however, it has just as many features as Fusion, with no advertisments or extra purchases. The Blender Foundation makes its money from optional donations. This kind of thing is a pattern that's been really prominent recently. So, what's the point? The point is that this might mean a completely different future in the market of software. Shifting a bit to personal, I haven't made any paid software or software with advertisments / extra purchases as of yet. So, I'm often asked, why do I make them? It's mainly for programming experience, but also, mainly for just the joy of making something for people to use. Making something and having people actually use it is pretty cool, in my opinion. That's what I call \"joy of creation\" motivation. What was discussed earlier, about how companies do it for the money, is what I call money motivation. These two types of motivation are what I feel makes the difference between indie (solo, without a company) developers and so-called \"corporate\" developers. \"Corporate\" developers do it for the money, and indie developers do it for the sake of creating something. Obviously, this isn't always the case, but I feel like this difference might blur over time, as the \"COMPLETELY free\" software market grows.",
]

shortbodys = []

//script

postnames = postnames.reverse()
postdates = postdates.reverse()
postbodys = postbodys.reverse()


for (i=0; i < postnames.length; i++) {
	copyentry = document.querySelector(".entry").cloneNode(true)
	copyentry.childNodes[1].innerText = postnames[i]
	copyentry.childNodes[3].innerText = "Posted on " + postdates[i]

	copyentry.childNodes[5].innerText = postbodys[i].substring(0, 50) + "..."
	shortbodys.push(postbodys[i].substring(0, 50) + "...")
	

	copyentry.childNodes[7].addEventListener("click", function(e) {
		if (shortbodys.indexOf(e.path[1].childNodes[5].innerText) == -1) {

			e.path[1].childNodes[5].innerText = shortbodys[postbodys.indexOf(e.path[1].childNodes[5].innerText)]
			e.path[0].innerText = "See more ↓"
			e.path[0].title = "See more"
		} else {
			e.path[1].childNodes[5].innerText = postbodys[shortbodys.indexOf(e.path[1].childNodes[5].innerText)]
			e.path[0].innerText = "See less ↑"
			e.path[0].title = "See less"
		}	
	}, false)
	
	document.querySelector("#entries").appendChild(copyentry)


	if (postnames[i + 1] != null) {
		newhr = document.createElement("hr")
		newhr.style.margin = "15px"
		document.querySelector("#entries").appendChild(newhr)
	}


	copyentry.style.display = ""
}