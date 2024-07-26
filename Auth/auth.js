const url = "http://20.244.56.144/test/auth";
const data = {
  companyName: "goMart",
  clientID: "a37bde8a-6b79-4711-be79-4ed8af14845e",
  clientSecret: "XybpunLmQdqVQWlx",
  ownerName: "Purushottama Kavya",
  ownerEmail: "pkavya11122003@gmail.com",
  rollNo: "21L31A05J3",
};
const Token = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};

Token();
