import { toast } from "react-toastify";
import config from "../config/config";

class ApiAuthServices {
  apiKey = config.apiKey;
  static getInstance() {
    return new ApiAuthServices();
  }

  // this is for the signup request for the firebase
  signup = async (credentials) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      toast.success("Account Created. Go to Log in Page To continue");
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Sign Up Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };

  // creating request for the login user
  login = async (credentials) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      toast.success("Log in Success");
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Sign Up Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };

  // this request for the forget password of the user
  forgetPassword = async (credentials) => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${this.apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: credentials.email,
        }),
      }
    );
    if (response.ok) {
      const data = await response.json();
      toast.success("Password reset link is sent to your mail.");
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };

  getUserProfile = async () => {
    const idToken = localStorage.getItem("idToken");
    //console.log(idToken);
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${this.apiKey}`,
      {
        method: "POST",
        body: JSON.stringify({ idToken }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      return data;
    }
  };
}

export const ApiAuthService = ApiAuthServices.getInstance();
