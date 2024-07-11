$(document).ready(function(){
    $(".hidden").hide();

    $(".key").on("click", function() {    
            $("#sideBar").animate({left: `0px`},500)
            console.log($("#sideMenu").innerWidth());
    });

    $("#closeBtn").on("click", function() {    
        $("#sideBar").animate({left: `-223px`},500)
        console.log($("#sideMenu").innerWidth());
    });


    $(".card-header").on("click", function() {
        $(this).next(".card-content").slideToggle();
    });

    const countdownInterval = setInterval(updateCountdown, 1000);
    const eventDate = new Date('2024-10-25T20:00:00').getTime();
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now; 
     
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(`${days} D`);
        $('#hours').text(`${hours} h`);
        $('#minutes').text(`${minutes} m`);
        $('#seconds').text(`${seconds} s`);

        if (distance < 0) {
            clearInterval(countdownInterval);
            $('#days').text('0 D');
            $('#hours').text('0 h');
            $('#minutes').text('0 m');
            $('#seconds').text('0 s');
        }
    }
    updateCountdown();
    
    
    let charSpan = document.getElementById("charSpan");
    let textareaInput = document.getElementById("messageTextarea");
    let maxLength = 100;

    textareaInput.addEventListener('input', () => {
        let currentLength = textareaInput.value.length;
        charSpan.innerHTML = maxLength - currentLength;
    });
});
