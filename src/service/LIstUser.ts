import { prisma } from "../prisma";

class ListUser {
  async execute() {
    const listUser = await prisma.users.findMany();
    return listUser;
  }
}

export { ListUser };
