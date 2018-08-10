// Regular map
function regular_map() {
    var var_location = new google.maps.LatLng(-1.298141, 36.793038);

    var var_mapoptions = {
        center: var_location,
        zoom: 17
    };

    var var_map = new google.maps.Map(document.getElementById("map-container-8"),
        var_mapoptions);


    var contentString = '<div id="content" style="height:auto;">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent" style="font-size:1.5%;">'+

      '<p style="text-align:left;font-size:2.2vh;"><strong>Nairobi Garage</strong>'+ '<br>' + 'PineTree Plaza'+'<br>'+ 'Ngong Road'+'<br>'+ 'Nairobi, '+'<br>'+ 'Kenya</p>'
      +
      '<p><a href="https://www.google.com/maps/place/Nairobi+Garage/@-1.297347,36.793038,17z/data=!4m5!3m4!1s0x0:0x111775bb295f8d1f!8m2!3d-1.2981538!4d36.7930148?hl=en-US">'+
      'View on Google maps</a> '+
      '</p>'+
      '</div>'+
      '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 250,
      maxHeight:50

    });
    var var_marker = new google.maps.Marker({
        position: var_location,
        map: var_map,
        title: "Nairobi Garage"
    });


var_marker.addListener('click', function() {
  infowindow.open(var_map, var_marker);
});
}


google.maps.event.addDomListener(window, 'load', regular_map);
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 8) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    $('#exampleModal').on('show.bs.modal', function(event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var recipient = button.data('whatever') // Extract info from data-* attributes
          // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
          // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-title').text('New message to ' + recipient)
      modal.find('.modal-body input').val(recipient)
    })

    var svgAttributes = anime({
    targets: '#svgAttributes polygon',
    points: '64 128 8.574 96 8.574 32 64 0 119.426 32 119.426 96',
    easing: 'easeInOutExpo'
    });

    anime({
      targets: ['line', 'path'],
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 1500,
      direction: 'alternate',
      loop: true
    });
    var pathEl = anime.path('.path');
    anime({
      targets: '.item',
      translateX: pathEl('x'),
      translateY: pathEl('y'),
      easing: 'easeInOutSine',
      duration: 1500,
      direction: 'alternate',
      loop: true
    });
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
