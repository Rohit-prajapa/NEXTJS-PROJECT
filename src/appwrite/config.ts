import config from "../config/config";
import { Client, Account, ID } from "appwrite";

type CreateUserAccount = {
  email: string;
  password: string;
  username: string;
};

type LoginUserAccount = {
  email: string;
  password: string;
};

const client = new Client();

client.setEndpoint(config.appwriteurl).setProject(config.appwriteproject);

const account = new Account(client);

// CREATE USER ACCOUNT
export const createUserAccount = async (data: CreateUserAccount) => {
  try {
    const response = await account.create(
      ID.unique(),
      data.email,
      data.password,
      data.username,
    );

    return response;
  } catch (error) {
    throw error;
  }
};

// LOGIN USER
export const login = async ({ email, password }: LoginUserAccount) => {
  try {
    const response = await account.createEmailPasswordSession(email, password);

    return response;
  } catch (error) {
    throw error;
  }
};

// GET CURRENT USER
export const getCurrentUser = async () => {
  try {
    const response = await account.get();
    return response;
  } catch (error) {
    throw error;
  }
};

// CHECK WHETHER USER IS LOGGED IN
export const isLoggingIn = async (): Promise<boolean> => {
  try {
    await account.get();
    return true;
  } catch (error) {
    return false;
  }
};

// LOGOUT USER
export const logout = async () => {
  try {
    const response = await account.deleteSession("current");
    return response;
  } catch (error) {
    throw error;
  }
};
