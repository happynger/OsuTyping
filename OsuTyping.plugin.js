//META{"name":"OsuTyping", "website":"https://github.com/happynger/OsuTyping", "source":"https://github.com/happynger/OsuTyping"}*//

class OsuTyping
{
	getName() {return "Osu Typing";}
	getVersion() {return "1.0";}
	getAuthor() {return "Happy Ori";}
	getDescription() {return "Adds a clicking sound when you type";}

	initConstructor() {}

	load()
	{
		if (!document.getElementById("OTSFX"))
		{
			let sfx = document.createElement("audio");
			sfx.id = "OTSFX";
			sfx.src = "https://raw.githubusercontent.com/happynger/OsuTyping/master/menuclick.wav";
			document.head.appendChild(sfx);
		}
	}

	unload()
	{
		$("#OTSFX").remove();
	}

	start()
	{
		this.initialize();
		this.onChatInput = e =>
		{
			this.sfx.trigger("pause");
			this.sfx.prop("currentTime", 0);
			this.sfx.trigger("play");
		}
	}

	initialize()
	{
		this.sfx = $("#OTSFX");
	}

	stop()
	{
		const chatbox = this.getChat();
		if (chatbox)
			chatbox.removeEventListener("keydown", this.onChatInput);
	}

	onSwitch()
	{
		const chatbox = this.getChat();
		if (chatbox)
			chatbox.addEventListener("keydown", this.onChatInput);
	}

	getChat()
	{
		let chatbox = document.getElementsByClassName("chat-3bRxxu")[0];

		return chatbox ? chatbox.getElementsByTagName("textarea")[0] : null;
	}
}