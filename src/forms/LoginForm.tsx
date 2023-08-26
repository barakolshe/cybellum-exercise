import { ErrorOutlineOutlined } from "@mui/icons-material";
import { Box, useTheme } from "@mui/material";
import { useLoginMutation } from "api/auth/auth";
import { AuthRequestType } from "api/auth/auth.interface";
import PrimaryInput from "components/forms/PrimaryInput";
import PrimaryButton from "components/ui/PrimaryButton";
import React, { FC } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "slices/user/userSlice";

interface LoginFormProps {}

const formValidation = {
  email: {
    required: true,
  },
  password: {
    required: true,
  },
};

type LoginTypes = {
  email: string;
  password: string;
};

const LoginForm: FC<LoginFormProps> = () => {
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>();
  const [loginError, setLoginError] = React.useState<string | null>(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const handleLogin: SubmitHandler<AuthRequestType> = async (data) => {
    try {
      const result = await login(data).unwrap();
      dispatch(setUser(result));
      setLoginError(null); // clear any previous error
      navigate("/");
    } catch (error) {
      setLoginError("The email or password you entered don't match"); // set the error message
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(handleLogin)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { xs: "100%", md: "400px" },
        gap: theme.spacing(14),
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: theme.spacing(7),
        }}
      >
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={formValidation.email}
          render={({ field }) => (
            <PrimaryInput
              fullWidth
              label="Username"
              InputProps={{
                endAdornment: <ErrorOutlineOutlined />,
              }}
              error={Boolean(errors.email) || Boolean(loginError)}
              helperText={errors.email && "Email is required"}
              {...field}
            />
          )}
        />
        <Box
          width="100%"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0px",
            alignItems: "start",
          }}
        >
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={formValidation.password}
            render={({ field }) => (
              <PrimaryInput
                fullWidth
                label="Password"
                type="password"
                InputProps={{
                  endAdornment: <ErrorOutlineOutlined />,
                }}
                error={Boolean(errors.password) || Boolean(loginError)}
                helperText={
                  errors.password ? "Password is required" : loginError
                }
                lowerButton={{
                  text: "Forgot your password?",
                }}
                {...field}
              />
            )}
          />
        </Box>
      </Box>
      <PrimaryButton sx={{ width: "100%" }} type="submit">
        Log in
      </PrimaryButton>
    </Box>
  );
};

export default LoginForm;
