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
    <section>
      {hasPreviousPage && (
        <button type="button" onClick={() => setPage(page - 1)}>
          Prev
        </button>
      )}
      {hasNextPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          Next
        </button>
      )}
    </section>
  );
}
