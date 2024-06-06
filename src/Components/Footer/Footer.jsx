import './Footer.css'
const Footer = () => {
    return (
        <div className='bg-[#1A1919]'>
            <footer className="footer p-10  text-white pt-16 flex justify-between">
                <aside>
                    <h3 className="text-2xl font-extrabold">CareerHub</h3>
                    <p className="leading-relaxed text-[#ffffffb3]">There are many variations of passages <br /> of Lorem Ipsum , but the majority have <br /> suffered alteration in some form.</p>
                    <img className="mt-2" src="/assets/icons/social.png" alt="" />
                </aside>
                <nav>
                    <h6 className="text-lg font-extrabold text-white -ml-1">Company</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-extrabold text-white -ml-1">Product</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-extrabold text-white -ml-1">Support</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className='mr-5'>
                    <h6 className="text-lg font-extrabold text-white -ml-1">Contact</h6>
                    <a className="link link-hover">524 Broadway , NYC</a>
                    <a className="link link-hover">+1 777 - 978 - 5570</a>
                </nav>
        </footer>
        <div className='text-[#757575] text-sm border-t flex justify-between border-[#9873FF] mx-9 py-6 px-3'>
            <p>@2023 CareerHub. All Rights Reserved</p>
            <p>Powered by <span className='font-extrabold'>CareerHub</span></p>
        </div>
        </div>
    );
};

export default Footer;