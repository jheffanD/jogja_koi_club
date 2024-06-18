import Landing from "/home/jeffan-ganteng/Documents/docker/cloud/koi-club/my-app/src/asset/Landingg.svg";

export default function Header() {
    return (
        <div className="relative flex justify-center items-center px-5 py-10">
            <img src={Landing} alt="Ikan Koi" className="w-full h-auto max-w-[95rem] max-h-[100rem] object-cover" />
            <div className="absolute inset-0 flex justify-center items-center">
                <h1 className="text-white text-4xl font-bold p-5 text-center">
                    Keputusan yang teraktik menghasilkan koi yang estetik.
                </h1>
            </div>
        </div>
    );
}
