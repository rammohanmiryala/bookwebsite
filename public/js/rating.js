$(function () {
    $(".rateyo").rateYo().on("rateyo.change", function (e, data) {
        var rating = data.rating;
        $(this).parent().find('.score').text('score :' + $(this).attr('data-rateyo-score'));
        $(this).parent().find('.result').text('rating :' + rating);
    });
});
// $(function () {

//     $("#rateYo").rateYo({
//         rating: 2,
//         fullStar: true
//     });
// });