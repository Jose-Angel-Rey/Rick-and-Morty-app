import styles from "./Pagination.module.scss";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export default function Pagination({
  page,
  setPage,
  hasNextPage,
  hasPreviousPage,
}: PaginationProps) {
  return (
    <section className={styles.container}>
      {hasPreviousPage && (
        <button type="button" onClick={() => setPage(page - 1)}>
          <GrLinkPrevious /> Prev
        </button>
      )}
      {hasNextPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          Next  <GrLinkNext />
        </button>
      )}
    </section>
  );
}
