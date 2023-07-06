import { cookies } from "next/headers";
import { redirect } from "next/headers";


export async function GET(request, { params }) {
  const token = params.id;
  console.log(token);
  // set cookie
  cookies().set({
    name: "token",
    value: token,
    httpOnly: true,
    path: "/",
  });

  response.writeHead(302, {
    'Location': 'your/404/path.html'
    //add other headers here...
  })
}
