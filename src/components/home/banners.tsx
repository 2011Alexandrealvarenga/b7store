import { Banner } from "types/banner";
import Image from "next/image";
import Link from "next/link";

type Props = {
  list: Banner[];
}
export const Banners = ({list}: Props) =>{
  return(
    <div>
      <div className="relative">
        {list.map((banner, index) => (
            <Link
              key={index}
              href={banner.link}
              className="absolute inset-0"
            >
              <Image 
                src={banner.img}
                alt=""
                width={1200}
                height={400}
              />
            </Link>
          ))}
      </div>
    </div>
  )
}