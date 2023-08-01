(function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Code
        let forms = document.getElementsByTagName("form");
        var validation = Array.prototype.filter.call(
          forms,
          function (form) {
            form.addEventListener(
              "submit",
              function (event) {
                if (form.checkValidity() === false) {
                  event.preventDefault();
                  event.stopPropagation();
                } else if (form.checkValidity() === true) {
                  alert("The form was submitted");
                }
                form.classList.add("was-validated");
              },
              false
            );
          }
        );
      },
      false
    );
  })();