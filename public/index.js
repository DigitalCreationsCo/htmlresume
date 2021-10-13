jQuery(function() {

  $('.clickable').mouseenter(function(){
    $('.pointerdialog').show()
  })
  .mousemove(function( event ){
    $('.pointerdialog').css("top", (event.pageY + 20))
    $('.pointerdialog').css("left", (event.pageX + 20))
  })
  $('.clickable').mouseleave(function(){
    $('.pointerdialog').hide()
  })
  
  var clicked = false
  $('.clickable').delegate('a', 'click', function(event){
    event.stopImmediatePropagation();
  })
  $('.clickable').click(function(){
    var div1 = '<div class="w-20 h-20 border rounded-md"><img class="rounded" src="/assets/Bryantprofile.jpg" alt="Bryant Mejia" /></div><div class="self-center"><h1 class="text-2xl font-bold">Bryant Mejia</h1><p>Front End Software Engineer</p></div>'
    var div2 = '<div class="px-8 self-center flex flex-row"><div class="self-center"><h2 class="text-xl font-bold">Contact Me</h2><a class="email" href="mailto:bmejia220@gmail.com">bmejia220@gmail.com</a></div><div class="self-center mt-1 ml-16"><a class="telephone" href="tel:15707901185">570 790 1185</a><p><a class="linkedin" target="_blank" href="https://www.linkedin.com/in/bryantmejia/">Linkedin</a></p></div></div>'
    var divset = []
    divset.push(div1, div2)
    
    var clickable = $('.clickable');
    if(clicked == false){
      $('.pointerdialog').html('Send me an email!')
      clickable.fadeOut(200, function(){
        clickable.html(divset[1])
        clickable.fadeIn(400);
        clicked = true
      })
    } else {
      $('.pointerdialog').html('Click to contact me')
      clickable.fadeOut(200, function(){
        clickable.html(divset[0])
        clickable.fadeIn(400);
        clicked = false
      })
    }
    
    
  })
})
