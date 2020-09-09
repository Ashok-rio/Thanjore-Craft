exports.signUp = async (registerBody) => {
  const Body = registerBody;
  const response = await fetch("http://localhost:3100/api/user/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Body),
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.login = async (loginBody) => {
  const Body = loginBody;
  console.log("Body", Body);
  const response = await fetch("http://localhost:3100/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Body),
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    return await response.json();
  }
};

exports.getUserData = async () => {
  const token = localStorage.getItem("usertoken");
  const response = await fetch("http://localhost:3100/api/user/get", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};


exports.getAllProduct = async () => {
  const response = await fetch("http://localhost:3100/api/product/getAll", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("response", response);
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.getProductOne = async (id) => {
  const response = await fetch(`http://localhost:3100/api/product/get/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log("response", response);
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.getOrderAll = async () => {
  const token = localStorage.getItem("usertoken");
  const response = await fetch("http://localhost:3100/api/order/getOrder", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  console.log("response", response);
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.createProduct = async (product) => {
  let products = product;
  const token = localStorage.getItem("usertoken");
  const response = await fetch("http://localhost:3100/api/product/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(products),
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};


