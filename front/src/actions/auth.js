
import { useNavigate } from "react-router-dom";



// CHECK TOKEN & LOAD USER
export const loadUser = () => async (token) => {
  const response = await fetch(
      '/EPSP_Djanet_Plateforme/auth/users/me/',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':`Token ${token}`,
        },
        body: JSON.stringify()
      }
  );
  const text = await response.text();
  if (response.status === 200) {
    console.log("success", JSON.parse(text));
    console.log("User loaded");
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value]) => {
      fail(`${key}: ${value}`);
    });
  }
};



export const login_api = async (username, password) => {
  const response = await fetch(
        `/EPSP_Djanet_Plateforme/auth/token/login/`,
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": username,
              "password": password,
            })
        }
    );
  const text = await response.text();
  if (response.status === 200) {
    console.log("success", JSON.parse(text).auth_token);
    console.log("Yeah! Authenticated! and stored");
    await localStorage.setItem("auth_token", JSON.parse(text).auth_token);
    return "logged";

  } else {
    console.log("failed", text);
    return "not logged";

  }
};



// REGISTER USER
export const register = async (email,password,service,token) => {
  const response = await fetch(
      '/EPSP_Djanet_Plateforme/create_user/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
        body: JSON.stringify({
              "email": email,
              "password": password,
              "service": service,
            })
      }
  );
  const text = await response.text();
  if (response.status === 200) {
    console.log("success", JSON.parse(text));
    console.log("User"+email+" created");
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value]) => {
      fail(`${key}: ${value}`);
    });
  }
};




// LOGOUT USER
export const logout =  async (token) => {
  const response = await fetch(
      '/EPSP_Djanet_Plateforme/auth/token/logout/',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Token ${token}`,
        },
        body: JSON.stringify()
      }
  );
  const text = await response.text();
  if (response.status === 200) {
    console.log("success", JSON.parse(text));
    console.log("User" + email + " created");
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value]) => {
      fail(`${key}: ${value}`);
    });
  }
};

// Setup config with token - helper function
