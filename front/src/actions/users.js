
export const getUsers = async (token) => {
  const response = await fetch(
      '/EPSP_Djanet_Plateforme/users_list/',
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
    console.log("Users loaded");
    return JSON.parse(text);
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value]) => {
      fail(`${key}: ${value}`);
    });
  }
};


export const deleteUser = async (id,token) => {
  const response = await fetch(
      `/EPSP_Djanet_Plateforme/delete_user/${id}/`,
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
    console.log("User Deleted");
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value]) => {
      fail(`${key}: ${value}`);
    });
  }
};


export const addNewUser = async (email,password,service,token) => {
  const response = await fetch(
      '/EPSP_Djanet_Plateforme/register_user/',
      {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization':`Token ${token}`,
        },
        body: JSON.stringify({
              "email": email,
              "password": password,
                "service":service,
            })
      }
  );
  const text = await response.text();
  if (response.status === 200) {
    console.log("success", JSON.parse(text));
    console.log("User Added");
  } else {
    console.log("failed", text);
    Object.entries(JSON.parse(text)).forEach(([key, value]) => {
      fail(`${key}: ${value}`);
    });
  }
};