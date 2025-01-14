import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";
import Counter from "../Counter/Counter";
import Greeting from "../Greeting/Greeting";
import News from "../News/News";
import UserProfileForm from "../Form/UserProfileForm";

const initialData = {
  displayName: "John Doe",
  email: "john@example.com",
  phone: "+1234567890",
  emailNotifications: true,
  smsNotifications: false,
};

const handleSubmit = async (profile) => {
  // Имитация отправки данных на сервер
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Submitted profile:", profile);
};

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Home</div>} />
        <Route path="counter" element={<Counter exerciseName="Push-ups" />} />
        <Route path="greeting" element={<Greeting />} />
        <Route path="news" element={<News />} />
        <Route
          path="user-form"
          element={
            <UserProfileForm
              initialData={initialData}
              onSubmit={handleSubmit}
            />
          }
        />
      </Route>
    </Routes>
  );
}
