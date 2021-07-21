export const formatDate = {
  filters: {
    formatDate: function (value) {
      function ordinal(n) {
        let x = n % 100;
        let y = n % 10;
        let suffix = ["th", "st", "nd", "rd"];
        if (x !== 11 && y === 1) {
          return `${n}${suffix[1]}`;
        } else if (x !== 12 && y === 2) {
          return `${n}${suffix[2]}`;
        } else if (x !== 13 && y === 3) {
          return `${n}${suffix[3]}`;
        } else {
          return `${n}${suffix[0]}`;
        }
      }

      if (value) {
        /* Convert UNIX timestamp to readable date */
        var a = new Date(value * 1000);
        var months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();

        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var time =
          weekday[a.getDay()] + " " + ordinal(date) + " " + month + ", " + year;
        return time;
      }
    },
  },
};
