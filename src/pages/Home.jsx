import Cars from "../components/Cars";
import Secret from "../components/Secret";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Secret msg="BIG" />
      <Cars red="red" blue="blue" green="green" />
    </>
  );
}
