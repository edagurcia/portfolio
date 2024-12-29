import { Account, Client, Databases } from "appwrite";

type AppwriteConfig = {
  url: string;
  projectId: string;
  databaseId: string;
  storageId: string;
  heroENId: string;
  heroESId: string;
  aboutENId: string;
  aboutESId: string;
};

export const appwriteConfig: AppwriteConfig = {
  url: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT ?? "",
  projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID ?? "",
  databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID ?? "",
  storageId: process.env.NEXT_PUBLIC_APPWRITE_STORAGE_ID ?? "",
  heroENId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HERO_EN_ID ?? "",
  heroESId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_HERO_ES_ID ?? "",
  aboutENId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ABOUT_EN_ID ?? "",
  aboutESId: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ABOUT_ES_ID ?? "",
};

const client = new Client();

client.setEndpoint(appwriteConfig.url);
client.setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);