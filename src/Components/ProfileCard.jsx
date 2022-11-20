export function ProfileCard() {
  return (
    <>
      <div className=" rounded-xl bg-gradient-to-r p-[6px] from-[#1A936F] via-[#3B82F6] to-[#88D498]">
        <div className=" bg-white rounded-lg p-4 h-80 w-[45rem] text-black">
          <div className="h-full w-full flex gap-6">
              <img
                src="/Profile_Image.jpg"
                alt="Profile Image"
                className=" rounded-full h-full border-4 border-[#1A936F] shadow-xl shadow-current"
              ></img>
              <div className="text-lg text-justify p-4">
                <h1 className="text-2xl font-semibold">Johey Artavia Barrantes</h1>
                <div className="flex text-center items-center gap-1">
                <img src="/CostaRica_Flag.png" className="w-6"></img>
                    <span>Costa Rica </span>
                </div>
                <span>💻 Frontend Developer</span>
                <p className="">📜Estudiante de ingeniería en sistemas de información en la Universidad Nacional de Costa Rica, interesado en el área del Frontend con capacidad de adaptarse a nuevas tecnologías y
                    potenciar los conocimientos ya adquiridos.
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
