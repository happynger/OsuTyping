//META{"name":"OsuTyping"}

class OsuTyping
{
	getName() {return "Osu Typing";}
	getVersion() {return "0.1";}
	getAuthor() {return "Happy Ori";}
	getDescription() {return "Adds a clicking sound when you type";}

	initConstructor() {}

	load()
	{

	}

	start()
	{

	}

	initialize()
	{
		this.onChatInput() = e =>
		{
			
		}
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