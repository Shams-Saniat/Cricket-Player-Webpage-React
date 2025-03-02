import bannerImage from '../../assets/banner-main.png';
import bannerShadow from '../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen relative bg-black text-white">
            {/* background shadow */}
            <img src={bannerShadow} alt="" className="absolute top-0 left-0 w-full min-h-screen" />

            {/* content */}
            <img
                src={bannerImage}
                alt="Banner"
                className="banner-image absolute top-20"
            />
            <div className="text-center relative z-10">
                <div className="max-w-2xl mx-auto">
                    <h1 className="mb-5 text-4xl font-bold whitespace-nowrap">
                        Assemble Your Ultimate Dream 11 Cricket Team
                    </h1>
                    <p className="mb-5 opacity-75">Beyond Boundaries Beyond Limits</p>
                    <button className="btn text-black" style={{ backgroundColor: '#E7FE29' }}>
                        Claim Free Credit
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Banner;
