import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Breadcrumb from "@/components/screen/breadcrumb";
import * as C from "@/styles/pages/contact";

export default function ContactComponent() {
  return (
    <C.Contact>
      <Breadcrumb title="Contact" page="Contact" />
      <section className="contact__container">
        <div className="contact__title">
          <h1>Get In Touch</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            nulla fuga, natus quae, nam, fugit modi accusamus tenetur provident
            veniam voluptatum in voluptates exercitationem laudantium distinctio
            magnam reiciendis! Facilis, suscipit!
          </p>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
          loading="lazy"
        ></iframe>

        <div className="contact__contents">
          <form>
            <input type="text" placeholder="Enter Your Name" />
            <input type="text" placeholder="Enter Your Email" />
            <textarea
              placeholder="Enter Your Message"
              cols={34}
              rows={8}
            ></textarea>
            <button>Submit</button>
          </form>
          <div className="contact_info">
            <div className="info__item">
              <p>
                <FaMapMarkerAlt />
              </p>
              <p>
                <span>Address</span>
                <span>123 Street New York.USA</span>
              </p>
            </div>

            <div className="info__item">
              <p>
                <IoMdMail />
              </p>
              <p>
                <span>Mail Us</span>
                <span>info@example.com</span>
              </p>
            </div>

            <div className="info__item">
              <p>
                <FaPhone />
              </p>
              <p>
                <span>Telephone</span>
                <span>(+012) 3456 7890</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </C.Contact>
  );
}
