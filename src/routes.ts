import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginOptions,
} from "fastify";
import { UserController } from "./controller/UserController";
import { ListController } from "./controller/ListController";
import { DeleteController } from "./controller/DeleteController";

const routes = async (
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) => {
  fastify.post("/clientes", async (req: FastifyRequest, res: FastifyReply) => {
    return new UserController().handle(req, res);
  });

  fastify.get("/clientes", async (req: FastifyRequest, rep: FastifyReply) => {
    return new ListController().handle(req, rep);
  });

  fastify.delete(
    "/clientes",
    async (req: FastifyRequest, rep: FastifyReply) => {
      return new DeleteController().handle(req, rep);
    }
  );
};

export { routes };
