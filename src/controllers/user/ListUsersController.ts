import { Request, Response } from "express";
import { ListUsersService } from "../../services/user/ListUsersService";


class ListUsersController {
    async handle(req: Request, res: Response) {

        const listUsersService = new ListUsersService();

        const users = await listUsersService.execute();

        return res.status(200).json(users);
    }
}

export { ListUsersController }