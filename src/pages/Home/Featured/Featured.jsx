import React from "react";
import SectionTitle from "../../../components/SectionTittle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item text-white">
      <div className="bg-black pb-10 pt-5 bg-opacity-75">
        {" "}
        <SectionTitle
          heading="Featured Item"
          subHeading="Check it Out"
        ></SectionTitle>
        <div className="md:flex justify-center items-center gap-10 pl-96 pr-80">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div>
            <p>Jan 21 ,2025</p>
            <p className="uppercase">Where Can i get Some?</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              odit dolor rerum repellendus rem perferendis animi earum velit,
              in,
            </p>
            <button className="uppercase btn btn-outline border-b-2 border-t-0 border-l-0 border-r-0 border-white text-white mt-3">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
