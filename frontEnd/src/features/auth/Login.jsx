import { useForm } from "react-hook-form";
import { useUser } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import toast from "react-hot-toast";
// import { getLogin } from "../../services/apiUser";

function Login() {
  const {
    handleSubmit,
    register,
    // formState: { errors },
  } = useForm();

  const { setUser } = useUser();
  const navigate = useNavigate();

  async function login({ email, password }) {
    try {
      const res = await axios.post("/api/users/login", { email, password });
      // console.log(res.data.status);
      setUser(res.data?.data?.user);
      if (email && password) {
        console.log(res.data.status);

        if (res.data.status === "success") {
          toast.success("Logged in successfully");
          navigate("/");
        }
      }
    } catch {
      toast.error("something went wrong, email or password is Incorrect");
    }
  }

  function onSubmit({ email, password }) {
    login({ email, password });
  }

  // console.log(watch("email"));
  return (
    <main className="main">
      <div className="login-form">
        <h2 className="heading-secondary ma-bt-lg">Log into your account</h2>

        <form className="form form--login" onSubmit={handleSubmit(onSubmit)}>
          <div className="form__group">
            <label className="form__label" htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              className="form__input"
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form__group ma-bt-md">
            <label className="form__label" htmlFor="password">
              Password
            </label>

            <input
              id="password"
              className="form__input"
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true, min: 8 })}
              // minLength="8"
            />
          </div>

          <div className="form__group">
            <button className="btn btn--green" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
