const express = require('express');
const router = express.Router();

// router.get('/', (req, res) => {
//     console.log(req.query);
//     res.status(200).send('Rendered');
// });

router.get('/', (req, res) => {
    console.log(req.query);
    switch(req.query.form) {
        case "signup":
            console.log("SIGNING UP");
            break;
        case "login":
            console.log("LOGGING IN");
            break;
        default:
            console.log("INVALID PARAMETERS");
    }

    res.status(200).send('Rendered');
});

module.exports = router;