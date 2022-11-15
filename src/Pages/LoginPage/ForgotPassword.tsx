import React from "react";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import * as yup from "yup";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import LockIcon from "@mui/icons-material/Lock";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useForgotPassword from "../../Hooks/useForgotPassword";
import Toast from "../../Components/Toast";
import { themeInterface } from "../../Assets/Styles/Styles";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});
const theme = createTheme();
const ForgotPassword = (props: any) => {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  let { userType } = useParams();
  const { ForgotAPI } = useForgotPassword(userType);
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setLoading(true);
      ForgotAPI(values.email, setOpen, setLoading);
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
            Forgot Password
          </Typography>

          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 5 }}
          >
            <ThemeProvider theme={themeInterface}>
              {" "}
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
                  mt: 5,
                  mb: 4,
                  backgroundColor: "#303030",
                  color: "white",
                  "&:hover": { backgroundColor: "black" },
                }}
              >
                Send Reset Link
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
            <Toast
              open={open}
              setOpen={setOpen}
              text={"Reset link has been sent to your mail!"}
              severity={"success"}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ForgotPassword;
