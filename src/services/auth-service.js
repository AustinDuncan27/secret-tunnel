export const signUp = async(userName) => {
  const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: userName}),
  })
  const result= await response.json();
  console.log(result.token)
  return result;
}



export const authenticate = async(token) => {
  const response = await fetch ('https://fsa-jwt-practice.herokuapp.com/authenticate',{
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`, 
    }
  })
  const result = await response.json();
  return result;
}

