class BlocksController {
  async get(req, res) {
    res.json({ message: 'blocks router works well...' });
  }
  async post(req, res) {}
  async update(req, res) {}
  async delete(req, res) {}
}

module.exports = new BlocksController();
