import React from "react";

import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Stack } from "@chakra-ui/react";
import { LpSidebar } from "../Components/Todos/LpSidebar";
import { LpTodoHomePage } from "./LpTodoHomePage";
import { LpEditPage } from "./LpEditPage";
import { CombinedPage } from "./CombinedPage";
import { Product } from "./ProductNew";

import Login from "./Login/Login";
import ProfileEdit from "./ProfileEditPage";
import SignUp from "./SignUp";
import PrinceResourse from "./PrinceResourse";
import PrinceSingle from "./PrinceSingle";
import PrinceSingletwo from "./PrinceSingletwo";
import PrinceSinglethree from "./PrinceSinglethree";
import PrinceSinglefour from "./PrinceSinglefour";
import PrinceSinglefive from "./PrinceSinglefive";
import PrinceSinglesix from "./PrinceSinglesix";
import CalendarHomePage from "../Components/Calendar/CalendarHomePage";
import AllEvents from "./AllEvents";
import AdminDashboard from "./AdminDashboard";
import DSingleBook from "../Components/Admin/DSingleBook";
import PaymentPro from "../Components/paymentproNew";
import ThreeTierPricing from "../Components/PricingNew";
import PricingModal from "../Components/pricingModalNew";
import Overview from "./OverviewER";
import PrivateRoute from "../Routes/PrivateRoute";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/admindashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/profileEdit"
        element={
          <PrivateRoute>
            <ProfileEdit />
          </PrivateRoute>
        }
      />
      <Route
        path="/users/:id"
        element={
          <PrivateRoute>
            <DSingleBook />
          </PrivateRoute>
        }
      />
      <Route path="/enterprises" element={<Overview />} />
      <Route
        path="/payment"
        element={
          <PrivateRoute>
            <PaymentPro />
          </PrivateRoute>
        }
      />
      <Route path="/pricing" element={<ThreeTierPricing />} />
      <Route path="/pricingmodal" element={<PricingModal />} />
      <Route path="/featuresoverview" element={<Product />} />
      <Route path="/resourse" element={<PrinceResourse />} />
      <Route path="/singleresourse" element={<PrinceSingle />} />
      <Route path="/singletworesourse" element={<PrinceSingletwo />} />
      <Route path="/singlethreeresourse" element={<PrinceSinglethree />} />
      <Route path="/singlefourresourse" element={<PrinceSinglefour />} />
      <Route path="/singlefiveresourse" element={<PrinceSinglefive />} />
      <Route path="/singlesixresourse" element={<PrinceSinglesix />} />
      <Route path="/combinedpage" element={<CombinedPage />} />
      <Route
        path="/todohomepage"
        element={
          <PrivateRoute>
            <Stack
              backgroundColor="gray.200"
              direction={{
                base: "column",
                sm: "colum",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <LpSidebar />
              <LpTodoHomePage />
            </Stack>
          </PrivateRoute>
        }
      />
      <Route
        path="/task/:id"
        element={
          <PrivateRoute>
            <Stack
              backgroundColor="gray.200"
              direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
            >
              <LpSidebar />
              <LpEditPage />
            </Stack>
          </PrivateRoute>
        }
      />
      <Route
        path="/calendarhomepage"
        element={
          <PrivateRoute>
            <CalendarHomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/alluserevents"
        element={
          <PrivateRoute>
            <AllEvents />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
export { MainRoutes };
