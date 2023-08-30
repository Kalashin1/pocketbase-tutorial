import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

export const login = async (email, password) => {
  try {
    const authData = await pb.collection('users').authWithPassword(
      email,
      password
  );
  return [null, authData];
  } catch (error) {
    return [error, null]
  }
}

export const signUp = async ({name, email, password}) => {
  try {
    const user = await pb.collection('users').create({
      email, 
      name, 
      password, 
      passwordConfirm: password
    });
    return [null, user];
  } catch (error) {
    return [error, null]
  }
}


export default pb;