import { createFileRoute } from "@tanstack/react-router";
import { GameApp } from "@/components/hieu/game";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <GameApp />;
}
