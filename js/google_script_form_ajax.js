var $form = $('form#submit-form'),
    url = 'https://script.google.com/macros/s/AKfycbzoAI2wJNaD0II2oZAU7hu6TzDxGEoevsU-KRd31w4TjwwqvTQ/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
