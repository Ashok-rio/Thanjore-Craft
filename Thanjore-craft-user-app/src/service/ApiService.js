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

exports.getSlickImgs = async () => {
  const response = await fetch("http://localhost:3100/api/slick/getAll");

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

exports.createCart = async (productId, Qty) => {
  let card = {
    id: productId,
    quantity: Qty,
  };
  const token = localStorage.getItem("usertoken");
  const response = await fetch(`http://localhost:3100/api/cart/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(card),
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.createAddress = async (body) => {
  let address = body;
  const token = localStorage.getItem("usertoken");
  const response = await fetch(`http://localhost:3100/api/address/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(address),
  });
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.createOrder = async (address) => {
  let Body = {
    address: address,
  };
  const token = localStorage.getItem("usertoken");
  const response = await fetch(`http://localhost:3100/api/order/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
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

exports.getAllAddress = async () => {
  const token = localStorage.getItem("usertoken");
  const response = await fetch(`http://localhost:3100/api/address/get`, {
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

exports.getAddress = async (id) => {
  const Body = {
    id: id,
  };
  const token = localStorage.getItem("usertoken");
  const response = await fetch(`http://localhost:3100/api/address/getById`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(Body),
  });
  console.log(response, "hihihi");
  if (response.status === 200) {
    console.log("successfully");
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.editAddress = async (body) => {
  const Body = body;
  const token = localStorage.getItem("usertoken");
  const response = await fetch(`http://localhost:3100/api/address/edit`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
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

exports.getCart = async () => {
  const token = localStorage.getItem("usertoken");
  const response = await fetch("http://localhost:3100/api/cart/getALL", {
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

exports.updateCart = async (updateValue) => {
  const Body = updateValue;
  const token = localStorage.getItem("usertoken");
  const response = await fetch("http://localhost:3100/api/cart/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(Body),
  });
  console.log("Updateresponse", response);
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};

exports.getOrderAll = async () => {
  const token = localStorage.getItem("usertoken");
  const response = await fetch("http://localhost:3100/api/order/get", {
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

exports.getOneOrder = async (OrderId) => {
  const token = localStorage.getItem("usertoken");
  const response = await fetch(
    `http://localhost:3100/api/order/get/${OrderId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );
  console.log("response", response);
  if (response.status === 200) {
    return await response.json();
  } else {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
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

exports.payment = async (payment) => {
  let pay = payment;
  const token = localStorage.getItem("usertoken");
  const response = await fetch("http://localhost:3100/api/payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(pay),
  });
  if (response.status === 200) {
    return await response.json();
  } else if (response.status === 401) {
    let errorResponse = await response.json();
    throw new Error(errorResponse.error);
  }
};