import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../images/logo.svg"

const Logo = () => {
  return (
    <Link href="/" className=''>
        <Image src={logo} alt="Logo Icon" width={170} height={40} />
    </Link>
  );
};

export default Logo;
