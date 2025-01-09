export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (req, res) => {
    const { genre } = req.query;
    const movies = await this.userModel.getAll({ genre });
    res.json(movies);
  };
}
