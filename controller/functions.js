const add = (req, res) => {
    res.send((req.body.a + req.body.b).toString());
  };
  
  const mul = (req, res) => {
    res.send((req.body.a * req.body.b).toString());
  };
  
  module.exports = { add, mul };
  