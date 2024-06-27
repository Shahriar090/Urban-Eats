import React from "react";
import Container from "../../shared/Container";
import logo from "../../../src/assets/Banner/logo-ft.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <aside>
        <div className="footer-content flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between border-t border-[#C3A981] pt-8">
          <div className="location flex justify-center flex-col items-center gap-3 flex-[1]">
            <h1 className="text-2xl font-medium text-[#C3A981] uppercase">
              We Are Here
            </h1>
            <div className="text-[#DFE0E0] text-center">
              <p>82 Place Charles de Gaulle, Paris</p>
              <p>Brochetterestaurant@gmail.com</p>
              <p> +39-055-123456</p>
            </div>
          </div>
          <div className="about flex justify-center flex-col items-center gap-3 flex-[2]">
            <img src={logo} alt="Restaurant Logo" className="w-32" />

            <p className="max-w-sm text-center text-[#DFE0E0] font-medium">
              distinctive, well-preserved and comfortable space, high-quality
              products, authentic cuisine, food and drinks are done flawlessly.
            </p>
            <div className="socials flex items-center gap-4 text-white ">
              <p>Facebook</p>
              <p>Instagram</p>
              <p>TikTok</p>
            </div>
          </div>
          <div className="open-time flex justify-center flex-col gap-3 items-center flex-[1] text-[#DFE0E0]">
            <h1 className="text-2xl font-medium text-[#C3A981] uppercase">
              Opening Time
            </h1>
            <div className="text-center">
              <p> Mon - Fri: 08:00 am - 09:00pm</p>
              <p> Sat - Sun: 10:00 am - 11:00pm</p>
              <p> Holiday: Close</p>
            </div>
          </div>
        </div>
        <div className="h-[1px] my-6 w-full bg-[#C3A981]"></div>
        <div className="copyright text-[#DFE0E0] text-center pb-3">
          <p className="">Copyright &copy; {currentYear}</p>
          <p>All Rights Reserved By Mohammad Shahriar Hossain</p>
          <p>Design Inspiration - ThemesFlat</p>
        </div>
      </aside>
    </Container>
  );
};

export default Footer;
