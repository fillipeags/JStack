class ContractController {
  index(request, response) {
    response.send('OK');
  }

  show() {
  }

  store() {
  }

  update() {

  }

  delete() {

  }
}

// Singleton = single instance for all uses
module.exports = new ContractController();
