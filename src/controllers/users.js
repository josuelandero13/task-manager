import { validateUser, validateUserUpdate } from "../validators/user.js";

export class UserController {
  constructor({ userModel }) {
    this.userModel = userModel;
  }

  getAll = async (_, res) => {
    const users = await this.userModel.getAll();

    res.json(users);
  };

  createUser = async (req, res) => {
    const result = validateUser(req.body);

    this.returnErrorResponse(res, result);

    const newUser = await this.userModel.createUser({ input: result.data });

    res.status(201).json(newUser);
  };

  updateUser = async (req, res) => {
    const result = validateUserUpdate(req.body);

    this.returnErrorResponse(res, result);

    const updatedUser = await this.userModel.updateUser({
      id: req.params.id,
      input: result.data,
    });

    res.status(201).json(updatedUser);
  };

  returnErrorResponse = async (res, result) => {
    if (!result.success) {
      return await res
        .status(422)
        .json({ error: JSON.parse(result.error.message) });
    }
  };
}
