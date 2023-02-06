import {
  addDoc,
  collection,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import firebaseconfig from "../../firebaseconfig";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseconfig);
const db = getFirestore(app);

export const getEmails = async () => {
  const emails = await getDocs(collection(db, "emails"));
  emails.forEach((doc) => {
    console.log(doc.data());
  });
};

export const addEmail = (email) => {
  addDoc(collection(db, "emails"), { email: email });
};

export const getJobs = async () => {
  let aux = [];
  const jobs = await getDocs(collection(db, "jobs"));
  jobs.forEach((job) => {
    aux.push({ id: job.id, ...job.data() });
  });

  return aux;
};
