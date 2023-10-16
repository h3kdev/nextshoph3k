import Sidebar from "./components/sidebar";

export default function Index() {
    return(
        <div className="w-full h-full flex items-start justify-center">
            <div className="flex items-center justify-center">
                <Sidebar />
                <div className="w-[75rem] h-screen bg-slate-200 px-10 py-5">
                    <div>
                        <div>
                            <div className="text-2xl">Hoş geldin, <span className="font-semibold">Emre Keskin</span></div>
                            <div className="text-sm font-semibold">15 Ekim 2023, Pazar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}