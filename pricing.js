$(document).ready(function() {
    var middleValueAds = (Math.floor(Math.random() * (75 - 40 + 1)) + 40);
    var middleValueWeb = (Math.floor(Math.random() * (35 - 5 + 1)) + 5);
    
    $('#range_ads').val(middleValueAds).trigger("input");
    $('#range_web').val(middleValueWeb).trigger("input");
    
    $('#range_ads').on("input", function() {
        $('#output_ads').text("Rs. " + this.value + ",000 ");
    });
    
    $('#range_web').on("input", function() {
        $('#output_web').text("Rs. " + this.value + ",000 ");
    });
});