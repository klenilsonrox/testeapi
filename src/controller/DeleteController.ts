import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteUser } from "../service/DeleteUser";

class DeleteController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const { id } = req.query as { id: string };

    const deleteUser = new DeleteUser();
    const customer = await deleteUser.execute({ id });
    rep.send(customer);
  }
}

export { DeleteController };
