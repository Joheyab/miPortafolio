import { ProfileCard } from "./ProfileCard";

export function PortafolioLayout() {
  return (
    <>
      <main className="h-[100%] flex flex-col mt-20">
        <div className="flex justify-center mt-10" id="acerca_de_mi">
          <ProfileCard />
        </div>
      </main>
    </>
  );
}
