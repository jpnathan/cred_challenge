/**
 * Javascript and jQuery class to get, print and receive messages
 */

class Chat {
    constructor(){
        this.waitForMessage();
        this.getMessage();
    }

    // Clean form
    cleanMessage() {
        $('.chat-msg-box').val('');
    }

    // Getting messages from user
    getMessage(msg) {
        if (msg) this.printMessage(msg);
    }

    // Printing messages in message list
    printMessage(message) {

        if (message) { 
            $('.messages .message-list').append(`<li class="list-messages"> User said: <strong> ${message} </strong> </li>`);
            this.waitForMessage();
        }
        else return 'There is no message to be printed! Sorry :(';
    }

    // Example of implementation: Wainting messages
    waitForMessage() {
        /**
         * Example of implementation: Waiting for messages from API
         * 
         * $.ajax({
                type: "GET",
                url: "/feed",
                cache: false,
                timeout: 50000,

                success: function(message) {
                    printMessage(data);
                    setTimeout('waitForMessage()', 1000);
                },
                
                error: function(errorThrown) {
                    printMessage(errorThrown);
                    setTimeout('waitForMessage()', "15000");
                },
            });
        */    
    }
}

$(document).ready(() => {

    const chat = new Chat();

    $('.chat-form').submit((e) => {
        e.preventDefault();

        chat.getMessage($('.chat-msg-box').val());
        chat.cleanMessage();              
    });

    $('.button').click((e) => {

        chat.getMessage($('.chat-msg-box').val());
        chat.cleanMessage();
    })
    
});