import { sleep, removeRootLastChild } from "../utils/functions.js"
import { saveCursor } from "../utils/functions.js"

export async function runCommand(root, command, argument, currentSettings) {
	let commandRunned = false
	command = searchAliases(command)
	console.log(command)

	if (command == "sudo") {
		root.innerHTML += `<p class="command">Password for ${currentSettings.currentUser}: <input type="password"/></p>`
		commandRunned = true
	} else if (command == "help") {
		root.innerHTML += `<b class="command">SITE</b>`
		// await removeRootLastChild(root)
		root.innerHTML += `<p class="command" style="animation-delay: 100ms">Displays my portfolio</p>`
		// await removeRootLastChild(root)
		root.innerHTML += `<b class="command" style="animation-delay: 200ms">SOCIALS</b>`
		// await removeRootLastChild(root)
		root.innerHTML += `<p class="command" style="animation-delay: 300ms">Show my social media</p>`
		commandRunned = true
	} else if (command == "cd") {
		currentSettings.currentFolder = argument
		commandRunned = true
	} else if (command == "su") {
		currentSettings.currentUser = argument
		commandRunned = true
	} else if (command == "clear") {
		saveCursor()
		root.childNodes.forEach((el) => console.log(el))
	} else if (command == "site") {
		let url = "https://ilrocha.com"
		root.innerHTML += `<p class="command"> Entering <a href="${url}" target="_blank">https://ilrocha.com</a></p>`
		commandRunned = true
		window.open(url, "_blank").location
	} else if (command == "socials") {
		root.innerHTML += `<b class="command">SOCIALS</b>`
		// await removeRootLastChild(root)
		root.innerHTML += `<p class="command" style="animation-delay: 100ms">Instagram &nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.instagram.com/igor.roc" target="_blank">@igor.roc</a></p>`
		// await removeRootLastChild(root)
		root.innerHTML += `<p class="command" style="animation-delay: 200ms">Github &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.github.com/igorroc" target="_blank">@igorroc</a></p>`
		// await removeRootLastChild(root)
		root.innerHTML += `<p class="command" style="animation-delay: 300ms">Behance &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://www.behance.net/igorrocha" target="_blank">@igorrocha</a></p>`
		commandRunned = true
	} else if (command == "banner") {
		banner(root)
		commandRunned = true
	}

	if (!commandRunned) {
		root.innerHTML += `<p class="command error" >Terminal: The command '${command}' is not recognized as the name of a function.</p>`
		root.innerHTML += `<p class="command error" style="animation-delay: 100ms">Check the spelling of the name, or type 'help' to see the list of commands!</p>`
	}
}

function searchAliases(cmd) {
	if (cmd == "website" || cmd == "portfolio") return "site"
	if (cmd == "social") return "socials"
	return cmd
}

export function banner(root) {
	root.innerHTML += `<pre class="command" style="font-variant-ligatures: none; white-space: pre; style="animation-delay: 400ms;"">
                  ,----------------,              ,---------, 
             ,-----------------------,          ,"        ,"|
           ,"                      ,"|        ,"        ,"  |
          +-----------------------+  |      ,"        ,"    |
          |  .-----------------.  |  |     +---------+      |
          |  |                 |  |  |     | -==----'|      |     ______                                      _______                       __                 
          |  |                 |  |  |     |         |      |    /      |                                    /       \\                     /  |                
          |  |                 |  |  |     |'---=    |      |    $$$$$$/   ______    ______    ______        $$$$$$$  |  ______    _______ $$ |____    ______  
          |  |  C:\>_           |  |  |     |==== ooo |      ;      $$ |   /      \\  /      \\  /      \\       $$ |__$$ | /      \\  /       |$$      \\  /      \\ 
          |  |                 |  |  |     |(((( [33]|    ,"       $$ |  /$$$$$$  |/$$$$$$  |/$$$$$$  |      $$    $$< /$$$$$$  |/$$$$$$$/ $$$$$$$  | $$$$$$  |
          |  '-----------------'  |,"      |((((     |  ,"         $$ |  $$ |  $$ |$$ |  $$ |$$ |  $$/       $$$$$$$  |$$ |  $$ |$$ |      $$ |  $$ | /    $$ |
          +-----------------------+        |         |,"          _$$ |_ $$ \\__$$ |$$ \\__$$ |$$ |            $$ |  $$ |$$ \\__$$ |$$ \\_____ $$ |  $$ |/$$$$$$$ |
             /_)______________(_/          +---------+           / $$   |$$    $$ |$$    $$/ $$ |            $$ |  $$ |$$    $$/ $$       |$$ |  $$ |$$    $$ |
         ___________________________/___  ',                     $$$$$$/  $$$$$$$ | $$$$$$/  $$/             $$/   $$/  $$$$$$/   $$$$$$$/ $$/   $$/  $$$$$$$/ 
        /  oooooooooooooooo  .o.  oooo /,   \\,"-----------		 /  \\__$$ |      
       / ==ooooooooooooooo==.o.  ooo= //   ,'\--{)B     ,"		 $$    $$/      
      /_==__==========__==_ooo__ooo=_/'   /___________,"	 	  $$$$$$/      
     '-----------------------------'
	</pre>`
}
