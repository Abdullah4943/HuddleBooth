import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import Toast from "../../Components/Toast";
import { themeInterface } from "../../Assets/Styles/Styles";
import useResetPassword from "../../Hooks/useResetPassword";

const validationSchema = yup.object({
  reset_password_token: yup.string().required("Please enter your code"),
  password: yup
    .string()
    .required("Please enter your new password")
    .min(6, "Password should be of minimum 6 characters length")
    .oneOf([yup.ref("password")], "Passwords do not match"),
  confirmPassword: yup
    .string()
    .required("Confirm Password")
    .min(6, "Password should be of minimum 6 characters length")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const Reset = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const { ResetPassword } = useResetPassword(props);
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState(false);

  const formik = useFormik({
    initialValues: {
      reset_password_token: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      ResetPassword(
        values.reset_password_token,
        values.password,
        values.confirmPassword,
        setLoading,
        setOpen,
        setResponseMessage,
        open
      );
    },
  });

  return (
    <Box
      style={{
        backgroundColor: "#303030",
        width: "100vw",
        height: "100vh",
        display: "flex",
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        style={{ backgroundColor: "#f9c712" }}
      >
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#303030" }}>
            <LockIcon />
          </Avatar>

          <Typography component="h1" variant="h5" style={{ color: "#303030" }}>
            Reset Password
          </Typography>

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <ThemeProvider theme={themeInterface}>
              {" "}
              <TextField
                margin="normal"
                fullWidth
                name="reset_password_token"
                label="Enter the code sent to your email"
                type="reset_password_token"
                id="reset_password_token"
                color="primary"
                value={formik.values.reset_password_token}
                onChange={formik.handleChange}
                error={
                  formik.touched.reset_password_token &&
                  Boolean(formik.errors.reset_password_token)
                }
                helperText={
                  formik.touched.reset_password_token &&
                  formik.errors.reset_password_token
                }
                onBlur={formik.handleBlur}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                color="primary"
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirm Password"
                type="Password"
                id="confirmPassword"
                color="primary"
                autoComplete="current-password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                }
                onBlur={formik.handleBlur}
              />
              {loading && (
                <Grid container justifyContent="center">
                  <CircularProgress sx={{ color: "#303030" }} />
                </Grid>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#303030",
                  color: "white",
                  "&:hover": { backgroundColor: "black" },
                }}
              >
                Change Password
              </Button>
            </ThemeProvider>
            <Grid container>
              <Grid item xs>
                <Link to="/" style={{ color: "#303030", fontSize: "14px" }}>
                  Back to Login
                </Link>
              </Grid>
              <Grid item>
                <Link
                  to="/signup"
                  style={{ color: "#303030", fontSize: "14px" }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            {responseMessage === null ? (
              <Toast
                open={open}
                setOpen={setOpen}
                text={"Incorrect code!"}
                severity={"error"}
              />
            ) : (
              <Toast
                open={open}
                setOpen={setOpen}
                text={"Password changed successfully!"}
                severity={"success"}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Reset;
