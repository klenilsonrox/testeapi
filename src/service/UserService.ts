import { prisma } from "../prisma";

interface UserProps {
  name: string;
  email: string;
}

class UserService {
  async execute({ name, email }: UserProps) {
    if (!name || !email) {
      throw new Error("name and email required");
    }

    const user = await prisma.users.create({
      data:{
        name, 
        email
      }
    })

    return user;
  }
}

export { UserService };
