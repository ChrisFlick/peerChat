$(document).ready(() => {
    $.ajax({
        method: "GET",
        url: "/api/lobbies"
    }).then(function (res) {
        console.log(res)

        for (let i = 0; i < res.length; i++) {
            let lobby = $("<div>")
            let button = $("<button>")

            lobby.text(res[i].lobby_name)
            button.text('Join')

            button.attr("class", 'button')

            button.attr("name", res[i].lobby_name)
            button.attr("userID", res[i].id)


            lobby.append(button)
            $("#lobbies").append(lobby)
        }

        $(".button").on("click", function() {
            localStorage.setItem("PeerChatID", $(this).attr("userID"))
            localStorage.setItem("rm_name", $(this).attr("name"))
            document.location.href = "/b"
        })
    })
})