    var countries = {
      AU: ["Australia" , "flags/4x3/au.svg"],
      BR: ["Brazil" , "flags/4x3/br.svg"],
      CA: ["Canada" , "flags/4x3/ca.svg"],
      CH: ["Switzerland" , "flags/4x3/ch.svg"],
      DE: ["Germany" , "flags/4x3/de.svg"],
      DK: ["Denmark" , "flags/4x3/dk.svg"],
      ES: ["Spain" , "flags/4x3/es.svg"],
      FI: ["Finland" , "flags/4x3/fi.svg"],
      FR: ["France" , "flags/4x3/fr.svg"],
      GB: ["United Kingdom" , "flags/4x3/gb.svg"],
      IE: ["Ireland" , "flags/4x3/ie.svg"],
      IR: ["Iran" , "flags/4x3/ir.svg"],
      NL: ["Netherlands" , "flags/4x3/nl.svg"],
      NZ: ["New Zealand" , "flags/4x3/nz.svg"],
      TR: ["Turkey" , "flags/4x3/tr.svg"],
      US: ["United States of America" , "flags/4x3/us.svg"]
    }
    $('.get-profile').on('click', function(e) {
        e.preventDefault()
        console.log(e)
        $.ajax({
          url: 'https://randomuser.me/api/',
        })
        .then(function(oData) {
          console.log(oData)
          // SETTING VARIABLES
          function addZero(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
          }

          function timeNow() {
            var d = new Date();
            var h = addZero(d.getHours());
            var m = addZero(d.getMinutes());
            var s = addZero(d.getSeconds());
            return h + ":" + m + ":" + s;
          }
          var timeChecked = timeNow()
          var d = new Date();
          var timeNow =  d.getHours() + ':' + d.getMinutes() + ':'  + d.getSeconds()
          console.log(timeNow)
          var firstName = oData.results[0].name.first
          var lastName = oData.results[0].name.last
          var name = firstName + ' ' + lastName
          var fullName = name.replace(/\b\w/g, l => l.toUpperCase())
          var registrationDate = oData.results[0].registered
          var dateOfBirth = oData.results[0].dob
          var nacionality = oData.results[0].nat
          var finalNationality = countries[nacionality][0]
          var flag = '<img width="20px" src="'+ countries[nacionality][1] +'">'
          var gender = oData.results[0].gender
          var address1 = oData.results[0].location.street
          var address2 = oData.results[0].location.postcode
          var address3 = oData.results[0].location.city
          var address4 = oData.results[0].location.state
          var finalAddress = address1 + ' ' + address2 + ' ' + address3 + ' ' + address4
          var email = oData.results[0].email
          var phoneNumber = oData.results[0].phone
          var picture = oData.results[0].picture.medium

          // MAKING MAGIC

          $('.pull-right').text(timeChecked)
          $('.full-name').text(fullName)
          $('.profile-image').attr('src' , picture)
          $('.registration-date').text(registrationDate)
          $('.born-date').text(dateOfBirth)
          $('.nationality').text(finalNationality)
          $('.flag').html(flag)
          $('.gender').text(gender)
          $('.address').text(finalAddress)
          $('.email').text(email)
          $('.gender').text(gender)
          $('.phone').text(phoneNumber)
        })
    })
