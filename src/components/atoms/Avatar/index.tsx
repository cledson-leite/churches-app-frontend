import Image from "next/image";

import avatarDefault from "../../../../public/images/avatarDefault.png";

import styles from './Avatar.module.sass'

type Props = {
  imgSrc?: string;
}
export default function Avatar({ imgSrc }: Props) {
  return (
    <Image
      src={!imgSrc ? avatarDefault : imgSrc}
      alt="profile"
      width={52}
      height={52}
      className={styles.avatar}
    />
  );
}
