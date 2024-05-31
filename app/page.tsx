
import Hero from "./components/Hero";
import { NewestProduct } from "./components/NewestProduct";

export default function Home() {
  return (
    <main>
      <Hero />
      <NewestProduct category="newest" />
      <NewestProduct category="template" />
      <NewestProduct category="icon" />
      <NewestProduct category="uikit" />
    </main>
  );
}
