import { FastifyReply, FastifyRequest } from "fastify";
import { UserService } from "../service/UserService";

class UserController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { name, email } = req.body as { name: string; email: string };

    const user = new UserService();
    const customer = await user.execute({ name, email });
    rep.send(customer);
  }
}

export { UserController };
