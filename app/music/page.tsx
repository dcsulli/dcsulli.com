import MusicCard from "@/components/MusicCard";

export default function MusicPage() {
  return (
    <main>
      <h1>Music</h1>
      <p>Original songs, releases, and studio notes.</p>
      <MusicCard {...({} as any)} />
    </main>
  );
}