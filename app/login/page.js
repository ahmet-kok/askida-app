import Auth from "../components/Auth";
import { Login } from "../components/Login";
export default function login() {
  return (
    <>
      <Auth authPage={true}>
        <div className="min-h-screen bg-white">
          <Login />
        </div>
      </Auth>
    </>
  );
}
