$(function() {
  $.ajax('https://www.codeschool.com/users/w11th.json', {
    dataType: 'jsonp',
    success: function(result) {
      var courses = result.courses.completed;
      let coursesDivs = courses.map(function(course) {
        let courseDiv = $('<div />', {
          'class': 'course'
        });
        $('<h3 />', {
          text: course.title
        }).appendTo(courseDiv);
        $('<img />', {
          src: course.badge,
          alt: course.title + " badge image"
        }).appendTo(courseDiv);
        $('<a />', {
          href: course.url,
          target: '_blank',
          'class': 'btn btn-primary',
          text: 'See Course'
        }).appendTo(courseDiv);
        return courseDiv;
      });
      $('#badges').append(coursesDivs);
    },
    error: function(jqxhr, textStatus, error) {
      var err = textStatus + ", " + error;
      console.log(err);
    }
  });
});
