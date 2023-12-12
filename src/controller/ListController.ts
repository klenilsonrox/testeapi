import { FastifyReply, FastifyRequest } from "fastify";
import { ListUser } from "../service/LIstUser";

class ListController {
  async handle(req: FastifyRequest, rep: FastifyReply) {
    const list = new ListUser();
    const user = await list.execute();
    rep.send(user);
  }
}

export { ListController };
