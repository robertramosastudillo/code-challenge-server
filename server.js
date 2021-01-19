const app = require("./app");

// Application Port
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost: ${PORT}`);
});
