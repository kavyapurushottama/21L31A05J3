const url = "http://20.244.56.144/test/register";
const data = {
  companyName: "goMart",
  ownerName: "Purushottama Kavya",
  rollNo: "21L31A05J3",
  ownerEmail: "pkavya11122003@gmail.com",
  accessCode: "ZngVRi",
};

const register = async () => {
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
    console.error(error);
  }
};

register();
