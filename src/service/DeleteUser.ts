import { prisma } from "../prisma";

interface DeleteProps {
  id: string;
}

class DeleteUser {
  async execute({ id }: DeleteProps) {
    if (!id) {
      throw new Error("id is required");
    }

    const userDelete = await prisma.users.findFirst({
      where: {
        id: id,
      },
    });

    if (!userDelete) {
      throw new Error("delete user is required");
    }

    await prisma.users.delete({
      where: {
        id: userDelete.id,
      },
    });

    return userDelete;
  }
}

export { DeleteUser };
