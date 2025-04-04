export const signUp = (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// Signin
export const signIn = async (user) => {
  return fetch(`${process.env.REACT_APP_API_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => err);
};

//authenticate
export const authenticate = (data, next) => {
  if (window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

//check if user is authenticated
export const isAuthenticated = () => {
  // eslint-disable-next-line
  if (typeof window === undefined) {
    return false;
  } else {
    if (localStorage.getItem("jwt")) {
      return JSON.parse(localStorage.getItem("jwt"));
    }
    return false;
  }
};

//signout method
export const signout = (next) => {
  // eslint-disable-next-line
  if (typeof window != undefined) {
    localStorage.removeItem("jwt");
    next();
    return fetch(`${process.env.REACT_APP_API_URL}/signout`, {
      method: "GET",
    })
      .then((response) => {
        console.log("Sign out:", response);
      })
      .catch((err) => console.log(err));
  }
};
