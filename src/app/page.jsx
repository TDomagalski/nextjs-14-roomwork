import Image from 'next/image';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="/front_img.webp"
          alt="RoomWork - Kwatery && Pokoje pracownicze do wynajęcia"
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1>RoomWork - kwatery / pokoje do wynajęcia!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
          ipsam. Quos iste, alias nihil in laboriosam quas placeat. A,
          perspiciatis asperiores. Exercitationem mollitia dolorum labore
          suscipit a consequatur quos eveniet.
        </p>
      </div>
    </div>
  );
}
