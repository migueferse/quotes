const path = require('path');

function render(file, res) {
    return res.sendFile(path.join(__dirname + `/../views/${file}.html`));
}

class QuotesController {
    async index(req, res) {
        return render('quotes', res);
    }
}

module.exports = new QuotesController();