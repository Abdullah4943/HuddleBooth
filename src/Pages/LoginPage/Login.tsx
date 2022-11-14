import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useLogin from "../../Hooks/useLogin";
import Toast from "../../Components/Toast";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" to="/">
        Huddle Booth
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password should be of minimum 6 characters length")
    .required("Password is required"),
});
const theme = createTheme();
const Login = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  let { userType } = useParams();
  const token = window.localStorage.getItem("token");
  const { LoginAPI } = useLogin(userType);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      LoginAPI(values.email, values.password, setOpen, setLoading);
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
      <ThemeProvider theme={theme}>
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

            <Typography
              component="h1"
              variant="h5"
              style={{ color: "#303030" }}
            >
              Log in
            </Typography>

            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                color="primary"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
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
              <FormControlLabel
                control={
                  <Checkbox value="remember" style={{ color: "#303030" }} />
                }
                label="Remember me"
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
                  "&:hover": { backgroundColor: "black" },
                }}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="#" style={{ color: "#303030", fontSize: "14px" }}>
                    Forgot password?
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
              <Toast
                open={open}
                setOpen={setOpen}
                text={
                  token
                    ? "Logged in successfully!"
                    : "Incorrect email or password!"
                }
                severity={token ? "success" : "error"}
              />
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Login;
