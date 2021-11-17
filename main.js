// Calculate timeline width
let timelineWidth = parseInt($('.histoy-timeline__years').css('width'));

// Timeline Van calculation
let timelineVanWidth = parseInt($('.timeline-van__wrapper').css('width'));
let numOfYears = Object.keys($('.history-timeline__item')).length;
let vanStep = timelineVanWidth / numOfYears;

// Calculate half of the screen for list positioning
let listPositionHalf = (timelineWidth / 2) - 310;
$('.history-timeline__list').css('left', `${listPositionHalf}px`);

let count = 0;
$('.timeline-arrow__left').css('pointer-events', 'none');

$('.next_year').click(function() {

    //Enable left arrow
    $('.timeline-arrow__left').css('pointer-events', 'all');

    //Move van to right
    let currentVanPosition = parseInt($('.timeline-van__img').css('left'))

    if (count == 0) {
        $('.timeline-van__img').animate({
            left: `${vanStep}px`
        }, 450);
    } else {
        $('.timeline-van__img').animate({
            left: `${currentVanPosition + vanStep}px`
        }, 450);
    }


    // Apply class to selected year    
    currentYear = $('.selected_year');
    currentYear.removeClass('selected_year');
    let updatedYear = currentYear.parent().next().children('a').addClass('selected_year');

    // Update year header
    $('.history-timeline__heading').text(updatedYear.children('span').text());

    //Update year paragraph dynamically
    let selectedText = updatedYear.next().text();
    $('.timeline-text__dynamic').text(selectedText);

    //Check if last year is selected 
    if (updatedYear.children('span').text() == '2020') {

        //Disable click 
        $('.next_year').css('pointer-events', 'none');
        $('.history-timeline__heading').text('2020');

        let currentPosition = parseInt($('.history-timeline__list').css('left'));

        $('.history-timeline__list').animate({
            left: `${(currentPosition - 369.5)}px`
        }, 450);
    } else {

        //Disable click 
        $(this).css('pointer-events', 'none');
        count++

        let currentPosition = parseInt($('.history-timeline__list').css('left'));
        console.log(currentPosition)

        if (count == 1) {
            $('.history-timeline__list').animate({
                left: `${(currentPosition - 364)}px`
            }, 450);
        } else {
            $('.history-timeline__list').animate({
                left: `${(currentPosition - 364) + 0.5}px`
            }, 450);
        }
        setTimeout(function() {
            //Enable click 
            $('.next_year').css('pointer-events', 'all');
        }, 450)
    }
});

$('.prev-year').click(function() {

    //Enable right arrow
    $('.next_year').css('pointer-events', 'all');

    //Move van to right
    let currentVanPosition = parseInt($('.timeline-van__img').css('left'))

    if (count == 0) {
        $('.timeline-van__img').animate({
            left: `${vanStep}px`
        }, 450);
    } else {
        $('.timeline-van__img').animate({
            left: `${currentVanPosition - vanStep}px`
        }, 450);
    }

    // Apply class to selected year    
    currentYear = $('.selected_year');
    currentYear.removeClass('selected_year');
    let updatedYear = currentYear.parent().prev().children('a').addClass('selected_year');

    // Update year header
    $('.history-timeline__heading').text(updatedYear.children('span').text());

    //Update year paragraph dynamically
    let selectedText = updatedYear.next().text();
    $('.timeline-text__dynamic').text(selectedText);

    //Check if fist year is selected 
    if (updatedYear.children('span').text() == 'Start') {

        //Disable click 
        $(this).css('pointer-events', 'none');
        $('.history-timeline__heading').text('Start');

        let currentPosition = parseInt($('.history-timeline__list').css('left'));

        $('.history-timeline__list').animate({
            left: `${(currentPosition + 364)}px`
        }, 450);

    } else {

        //Enable click 
        $('.timeline-arrow__left').css('pointer-events', 'none');
        count++

        let currentPosition = parseInt($('.history-timeline__list').css('left'));

        if (count == 0) {
            $('.history-timeline__list').animate({
                left: `${(currentPosition + 364)}px`
            }, 450);
        } else {
            $('.history-timeline__list').animate({
                left: `${(currentPosition + 364) - 0.75}px`
            }, 450);
        }
        setTimeout(function() {
            //Enable click 
            $('.timeline-arrow__left').css('pointer-events', 'all');
        }, 450)
    }
});