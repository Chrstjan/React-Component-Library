import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import s from "./LoginForm.module.scss";

export const LoginForm = () => {
    const { user, loginUser, logoutUser } = useContext(UserContext);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        mode: "all",
      });

      const notify = (success) => {
        if (success) {
          toast("Du er logget ind!");
        } else {
          toast("Bruger ikke fundet, forket username eller password");
        }
      };

      const handleFormSubmit = async (data) => {
        const { username, password } = { ...data };

        const formData = {
          username: username,
          password: password,
        };
    
        const res = await fetch(``, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        const userData = await res.json();
    
        if (userData) {
          loginUser(userData);
          notify(true);
        }
        else {
          notify(false);
        }
      }

  return (
    <>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className={s.formStyling}
        >
          <input
            {...register("username", {
              required: "username is required",
              pattern: {
                value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid username format",
              },
              minLength: {
                value: 8,
                message: "username must be at least 8 characters",
              },
            })}
            type="email"
            id="username"
            name="username"
            placeholder="Brugernavn"
          />
          {errors.username ? <p>{errors.username.message}</p> : null}
          <input
            {...register("password", {
              required: "password is required",
              pattern: {
                value: /^[A-Za-z\d@$!%*?&]{5,}$/,
                message: "Invalid password format",
              },
              minLength: {
                value: 5,
                message: "password must be at least 5 characters",
              },
            })}
            type="password"
            id="password"
            name="password"
            placeholder="Adgangskode"
          />
          {errors.password ? <p>{errors.password.message}</p> : null}
          <span className={s.buttonContainer}>
            <input type="submit" value="Login" />
            <input type="reset" value="Annuller" />
          </span>
        </form>
    </>
  )
}