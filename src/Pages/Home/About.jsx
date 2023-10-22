import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 p-5 mb-10">
            <div className="hero-content flex-col lg:flex-row relative">
                <div className='w-1/2'>
                <img src={person} className="lg:w-[460px] lg:h-[473px] rounded-lg shadow-2xl" />
                <img src={parts} className="lg:w-[327px] 
                lg:h-[332px] rounded-lg absolute top-1/2 left-52 shadow-2xl border-8 border-white" />
                </div>
                <div className='w-1/2'>
                    <h3 className="text-2xl font-bold text-orange-500">About us</h3>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-outline btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;