window.onscroll = function() {stickMeToTheTop()};
                    
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickMeToTheTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("bg-solid")
  } else {
    navbar.classList.remove("sticky");
  }
}
//Menu - click and scroll to section:

$(".Tech").click(function() {
  $('html,body').animate({
      scrollTop: $(".tech").offset().top },
      'slow');
});
$(".Edukacja").click(function() {
  $('html,body').animate({
      scrollTop: $(".edukacja").offset().top },
      'slow');
});
$(".Kontakt").click(function() {
  $('html,body').animate({
      scrollTop: $(".kontakt").offset().top },
      'slow');
});

// Chart start
var ctx = document.getElementById("techsChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Infolinia Techniczna Neostrady", "Hewlett-Packard", "Starostwo Powiatowe w Ostródzie", "Media-Expert", "Graviola Dietetyk", "Quad/Graphics"],
        datasets: [{
            data: [11, 28, 10, 11,12,21],
            backgroundColor: [
                'orange',
                'darkblue',
                'yellow',
                'lightgreen',
                'darkgreen',
                'lightblue'
            ],
        }],
    },

});
//Chart End
