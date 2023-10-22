import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img src={img1} className="w-full h-full space-y-8" />
                <div className="absolute flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-8 ">
                    <div className='text-white w-1/2 space-y-8 '>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-error">Appointment</button>
                            <button className="btn btn-outline btn-primary ml-4">Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 right-10 gap-4 bottom-0">
                    <a href="#slide4" className="btn btn-circle w-16 h-16">❮</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] w-16 h-16">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-8 ">
                    <div className='text-white w-1/2 space-y-8 '>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-error">Appointment</button>
                            <button className="btn btn-outline btn-primary ml-4">Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 right-10 gap-4 bottom-0">
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] w-16 h-16">❮</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] w-16 h-16">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-8 ">
                    <div className='text-white w-1/2 space-y-8 '>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-error">Appointment</button>
                            <button className="btn btn-outline btn-primary ml-4">Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 right-10 gap-4 bottom-0">
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] w-16 h-16">❮</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] w-16 h-16">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex items-center h-full  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] pl-8 ">
                    <div className='text-white w-1/2 space-y-8 '>
                        <h1 className='text-5xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                            <button className="btn btn-outline btn-error">Appointment</button>
                            <button className="btn btn-primary ml-4">Appointment</button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-12 right-10 gap-4 bottom-0">
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] w-16 h-16">❮</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] w-16 h-16">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;