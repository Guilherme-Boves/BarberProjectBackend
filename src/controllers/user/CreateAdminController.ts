import { Request, Response } from "express";
import { CreateAdminService } from "../../services/user/CreateAdminService";

class CreateAdminController {
    async handle(req: Request, res: Response) {

        const { name, email, password } = req.body;

        const createAdminService = new CreateAdminService();

        const admin = await createAdminService.execute({
            name,
            email,
            password
        })
        
        return res.status(201).json(admin);
    }
}

export { CreateAdminController }