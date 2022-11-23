import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, useParams, Navigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useSignup from "../../Hooks/useSignup";
import Toast from "../../Components/Toast";
import { themeInterface } from "../../Assets/Styles/Styles";

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
  username: yup.string().required("Username is required"),
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

const Signup = (props: any) => {
  let { userType, screen } = useParams();

  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const token = window.localStorage.getItem("token");
  const { SignupAPI } = useSignup(userType, screen);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      SignupAPI(
        values.username,
        values.email,
        values.password,
        setOpen,
        setLoading
      );
    },
  });
  if (userType !== "customer" && userType !== "admin" && userType !== "brand") {
    return <Navigate to="/404_Not_Found" />;
  }

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
          style={{ backgroundColor: "#f9c712", height: "100vh" }}
        >
          <CssBaseline />

          <Box
            sx={{
              marginTop: 4,
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
              Signup as {userType.toUpperCase()}
            </Typography>

            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <ThemeProvider theme={themeInterface}>
                <TextField
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Username"
                  name="username"
                  color="primary"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.username && Boolean(formik.errors.username)
                  }
                  helperText={formik.touched.username && formik.errors.username}
                  onBlur={formik.handleBlur}
                />
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
                  SignUp
                </Button>
              </ThemeProvider>
              <Grid container>
                <Grid item>
                  <Link
                    to={`/${userType}/login`}
                    style={{
                      color: "#303030",
                      marginLeft: "6rem",
                      fontSize: "14px",
                    }}
                  >
                    {"Already have an account? Login"}
                  </Link>
                </Grid>
              </Grid>
              <Toast
                open={open}
                setOpen={setOpen}
                text={
                  token ? "Signed up successfully!" : "Email already exists!"
                }
                severity={token ? "success" : "error"}
              />
            </Box>
          </Box>
          <Copyright sx={{ mt: 6 }} />
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Signup;
