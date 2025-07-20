import { prisma } from "@repo/database";
import { cookies } from "next/headers";

export default async function IndexPage() {
  const cookiesList = await cookies();
  console.log(cookiesList);
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello World</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
