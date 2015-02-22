var connect_string, express, pg, router;

express = require("express");

pg = require("pg");

router = express.Router();

connect_string = process.env.DATABASE_URL;

router.post("/:id", function(req, res) {
  var body, id;
  id = req.params.id;
  body = req.body;
  return pg.connect(connect_string, function(err, client, done) {
    return client.query('INSERT into raw_reports (id, blob) VALUES("' + id + '", "' + body + '")');
  });
});

router.get("/all", function(req, res) {
  return db.unprocessed(res);
});

module.exports = router;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsbUNBQUE7O0FBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxFQUNBLEdBQUssT0FBQSxDQUFRLElBQVIsQ0FETCxDQUFBOztBQUFBLE1BRUEsR0FBUyxPQUFPLENBQUMsTUFBUixDQUFBLENBRlQsQ0FBQTs7QUFBQSxjQUdBLEdBQWlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFIN0IsQ0FBQTs7QUFBQSxNQUtNLENBQUMsSUFBUCxDQUFZLE1BQVosRUFBb0IsU0FBQyxHQUFELEVBQU0sR0FBTixHQUFBO0FBQ2xCLE1BQUEsUUFBQTtBQUFBLEVBQUEsRUFBQSxHQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBaEIsQ0FBQTtBQUFBLEVBQ0EsSUFBQSxHQUFPLEdBQUcsQ0FBQyxJQURYLENBQUE7U0FFQSxFQUFFLENBQUMsT0FBSCxDQUFXLGNBQVgsRUFBMkIsU0FBQyxHQUFELEVBQU0sTUFBTixFQUFjLElBQWQsR0FBQTtXQUN6QixNQUFNLENBQUMsS0FBUCxDQUFhLDZDQUFBLEdBQThDLEVBQTlDLEdBQWlELE1BQWpELEdBQXdELElBQXhELEdBQTZELElBQTFFLEVBRHlCO0VBQUEsQ0FBM0IsRUFIa0I7QUFBQSxDQUFwQixDQUxBLENBQUE7O0FBQUEsTUFXTSxDQUFDLEdBQVAsQ0FBVyxNQUFYLEVBQW1CLFNBQUMsR0FBRCxFQUFNLEdBQU4sR0FBQTtTQUNsQixFQUFFLENBQUMsV0FBSCxDQUFlLEdBQWYsRUFEa0I7QUFBQSxDQUFuQixDQVhBLENBQUE7O0FBQUEsTUFlTSxDQUFDLE9BQVAsR0FBaUIsTUFmakIsQ0FBQSIsImZpbGUiOiJ1bml0LmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwcmVzcyA9IHJlcXVpcmUoXCJleHByZXNzXCIpXG5wZyA9IHJlcXVpcmUoXCJwZ1wiKVxucm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxuY29ubmVjdF9zdHJpbmcgPSBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkxcblxucm91dGVyLnBvc3QgXCIvOmlkXCIsIChyZXEsIHJlcykgLT5cbiAgaWQgPSByZXEucGFyYW1zLmlkXG4gIGJvZHkgPSByZXEuYm9keVxuICBwZy5jb25uZWN0IGNvbm5lY3Rfc3RyaW5nLCAoZXJyLCBjbGllbnQsIGRvbmUpLT5cbiAgICBjbGllbnQucXVlcnkoJ0lOU0VSVCBpbnRvIHJhd19yZXBvcnRzIChpZCwgYmxvYikgVkFMVUVTKFwiJytpZCsnXCIsIFwiJytib2R5KydcIiknKVxuXHRcbnJvdXRlci5nZXQgXCIvYWxsXCIsIChyZXEsIHJlcykgLT5cblx0ZGIudW5wcm9jZXNzZWQgcmVzXG5cblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXJcbiJdfQ==