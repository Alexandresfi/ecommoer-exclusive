'use client';

import { useState } from 'react';
import Image from 'next/image';

import { ImgCarousel } from './CarouselImg';

interface Props {
  pictures: {
    url: string;
  }[];
}

export function ContainerImages({ pictures }: Props) {
  const [changeImg, setChangeImg] = useState<string>(pictures[0].url);
  function handleClickImg(url: string) {
    setChangeImg(url);
  }
  return (
    <div className="flex gap-[30px]">
      <ImgCarousel pictures={pictures} handleChangeImg={handleClickImg} />
      <div className="h-[605px] w-[500px] flex justify-center items-center bg-white-primary">
        <Image
          src={changeImg}
          defaultValue={pictures[0].url}
          width={446}
          height={315}
          alt="main image"
          className="w-[446px] h-[315px] object-scale-down"
        />
      </div>
    </div>
  );
}
