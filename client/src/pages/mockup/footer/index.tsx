import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { Image } from "antd"
import { Images } from "../../../utils/imageLoader";

export const itemContact = [
  {
    icon: <IoLocationOutline fontSize={20} color="#fff" />,
    desc: "page.footer.contact.address"
  },
  {
    icon: <IoPhonePortraitOutline fontSize={20} color="#fff" />,
    desc: "page.footer.contact.phone"
  },
  {
    icon: <MdOutlineEmail fontSize={20} color="#fff" />,
    desc: "page.footer.contact.email"
  },
]

export const itemRoom = [
  {
    image: <Image src={Images["slide (1)"]} height={70} width={100} />,
    hotelName: "Muong Thanh Hotel",
    reg: "11 Jan 2025 - 22 Mar 2025",
    price: "$1000",
  },
  {
    image: <Image src={Images["slide (4)"]} height={70} width={100} />,
    hotelName: "Novotel",
    reg: "11 Jan 2025 - 22 Mar 2025",
    price: "$800",
  },
]

export const itemLinks = [
  {
    link: "page.footer.usefullink.aboutus"
  },
  {
    link: "page.footer.usefullink.ouroffer"
  },
  {
    link: "page.footer.usefullink.howspread"
  },
  {
    link: "page.footer.usefullink.contactus"
  },
  {
    link: "page.footer.usefullink.outevent"
  },
]