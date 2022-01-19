import styles from "./Header.module.scss";

type HeaderProps = {
  title: string;
  image: string;
  subtitle: string;
};

export default function Header({ title, image, subtitle }: HeaderProps) {
  return (
    <header className={styles.container}>
      <img className={styles.image} src={image} alt="Rick and Morty" />
      <div className={styles.content}>
        <h1 className={styles.contentTitle}>{title}</h1>
        {subtitle && (
          <h2 className={styles.contentSubtitle}>{`${subtitle} ${title}`} </h2>
        )}
      </div>
    </header>
  );
}
