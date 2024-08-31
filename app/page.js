"use client";
import AuthButton from "./components/auth/AuthButton";
import { useSelector } from "react-redux";
import Hero from "./components/hero";
import TrendingProducts from "./components/trendingproduct/TrendingProducts";
import { HomeKidsCates, HomeMenCates, HomeWomenCates } from "./components/homedisplaycates";

export default function Home() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  console.log(isAuthenticated);
  return (
    <main className="">
      <Hero />
      <TrendingProducts />
      <HomeMenCates />
      <HomeWomenCates />
      <HomeKidsCates />
      {/* <AuthButton /> */}
    </main>
  );
}
