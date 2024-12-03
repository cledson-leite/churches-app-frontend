import Image, { StaticImageData } from 'next/image';

import avatarDefault from '../../../../public/images/avatarDefault.png';

import styles from './Avatar.module.sass';

type Props = {
  imgSrc?: string;
};
export default function Avatar({ imgSrc }: Props) {
  let img: StaticImageData | string;
  if (imgSrc?.startsWith('https://') || imgSrc?.startsWith('http://')) {
    img = imgSrc;
  } else {
    img = avatarDefault;
  }
  return (
    <Image
      src={img}
      alt="profile"
      width={52}
      height={52}
      className={styles.avatar}
    />
  );
}
