import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";
const SocialMedia = () => {
  return (
    <>
        <ul>
            <li><Link href={'https://www.facebook.com/satvamnutrifoods/'} target='_blank' className="facebook"><img src="/images/facebook.svg" width={27} height={28} alt="facebook"/></Link></li>
            <li><Link href={'https://www.instagram.com/satvamnutrifoods/'} target='_blank' className="instagram"><img src="/images/instagram.svg" width={27} height={28} alt="instagram"/></Link></li>
            <li><Link href={'https://www.youtube.com/c/SatvamNutrifoods'} target='_blank' className="youtube"><img src="/images/youtube.svg" width={27} height={28} alt="youtube"/></Link></li>
            <li><Link href={'https://in.linkedin.com/company/satvam'} target='_blank' className="linkedin"><img src="/images/linkedin.svg" width={27} height={28} alt="linkedin"/></Link></li>
            <li><Link href={'https://in.pinterest.com/satvamnutrifoodsltd/'} target='_blank' className="pintrest"><img src="/images/pintrest_icon.svg" width={27} height={28} alt="pintrest"/></Link></li>
            
            
        </ul>
    </>
  )
}
export default SocialMedia