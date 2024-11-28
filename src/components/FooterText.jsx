function FooterTest() {
    return (
        <>
            <div className="flex items-center justify-center h-auto">
                <div className="w-full max-w-5xl p-4 md:p-8">
                    {/* ল্যাঙ্গুয়েজ লিস্ট */}
                    <ul className="flex flex-wrap gap-3 md:gap-5 items-center font-light text-sm justify-center md:justify-start">
                        <li><a href="#">English (UK)</a></li>
                        <li><a href="#">বাংলা</a></li>
                        <li><a href="#">অসমীয়া</a></li>
                        <li><a href="#">हिन्दी</a></li>
                        <li><a href="#">नेपाली</a></li>
                        <li><a href="#">Bahasa Indonesia</a></li>
                        <li><a href="#">العربية</a></li>
                        <li><a href="#">中文(简体)</a></li>
                        <li><a href="#">Bahasa Melayu</a></li>
                        <li><a href="#">Español</a></li>
                        <li><a href="#">Português (Brasil)</a></li>
                    </ul>

                    {/* ল্যাঙ্গুয়েজ বাটন */}
                    <div className="flex justify-center md:justify-start mt-3">
                        <button className="block bg-slate-500 p-2 rounded-full outline-none" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </button>
                    </div>

                    {/* বিভাজক লাইন */}
                    <hr className="border-b-0 border-slate-300 mt-3" />

                    {/* কপিরাইট সেকশন */}
                    <div className="flex justify-center md:justify-start mt-3">
                        <span className="font-light text-sm">Meta © 2024</span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default FooterTest;